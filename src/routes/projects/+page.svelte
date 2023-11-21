<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { PROJECT_TAGS, type ProjectMetadata } from "$lib/types";

    export let data: { projects: ProjectMetadata[], query: string, tags: string[] };

    let filteredProjects: ProjectMetadata[] = [];
    let selectedTags: string[] = data.tags;
    filterProjects();
    
    function onSearchInput() {
        updateSearchParam("q", data.query);
        filterProjects();
    }

    function onResetClick() {
        updateSearchParam("q", "");
        data.query = "";
        updateMultiSearchParam("t", []);
        for (const searchTag of document.getElementsByClassName("search-tag")) {
            searchTag.classList.remove("selected");
        }
        selectedTags = [];
        filterProjects();
    }

    function onTagClick(this: HTMLButtonElement) {
        if (selectedTags.includes(this.name)) {
            selectedTags = selectedTags.filter(tag => tag !== this.name);
            this.classList.remove("selected");
        } else {
            selectedTags.push(this.name);
            this.classList.add("selected");
        }
        updateMultiSearchParam("t", selectedTags);
        filterProjects();
    }

    function filterProjects() {
        if (!!data.query || selectedTags.length > 0) {
            const lowerQuery = data.query.toLowerCase();
            filteredProjects = data.projects.filter(project => {
                const tags = project.tags?.map(tag => tag.toLowerCase()) ?? [];
                for (const selectedTag of selectedTags) {
                    if (!tags.includes(selectedTag)) {
                        return false;
                    }
                }

                const title = project.title.toLowerCase();
                const description = project.description.toLowerCase();

                return title.includes(lowerQuery) || description.includes(lowerQuery);
            });
        } else {
            filteredProjects = data.projects;
        }
    }

    function updateSearchParam(key: string, value: string) {
        const url = new URL(location.href);
        if (!!value) {
            url.searchParams.set(encodeURIComponent(key), encodeURIComponent(value.trim()));
        } else {
            url.searchParams.delete(encodeURIComponent(key));
        }
        history.replaceState(null, "", url.toString());
    }

    function updateMultiSearchParam(key: string, value: string[]) {
        const url = new URL(location.href);
        url.searchParams.delete(encodeURIComponent(key));
        if (value.length > 0) {
            for (const val of value) {
                url.searchParams.append(encodeURIComponent(key), encodeURIComponent(val.trim()));
            }
        }
        history.replaceState(null, "", url.toString());
    }

    function countProjectsByTag(tag: string) {
        return data.projects.filter(project => project.tags?.includes(tag)).length;
    }
</script>

<svelte:head>
    <title>Projects — Dion Tryban</title>
</svelte:head>

<section>
    <h1>Projects</h1>
    <div id="search-and-clear">
        <input type="text" id="search" placeholder="Search projects..." bind:value={data.query} on:input={onSearchInput}>
        <button id="reset" on:click={onResetClick}>Reset</button>
    </div>
    <div id="tags">
        {#each Object.keys(PROJECT_TAGS) as tag}
            {#if countProjectsByTag(tag) !== 0}
                <button name={tag} class="search-tag plain" class:selected={selectedTags.includes(tag)} on:click={onTagClick}>
                    {PROJECT_TAGS[tag] ?? tag} ({countProjectsByTag(tag)})
                </button>
            {/if}
        {/each}
    </div>
    <div id="project-list">
        <!-- <ProjectList projects={filteredProjects}/> -->
        {#each filteredProjects as project}
            <ProjectCard {project}></ProjectCard>
        {/each}
    </div>
</section>

<style lang="scss">
    #search-and-clear {
        display: flex;
        margin-bottom: 1rem;

        #search {
            flex-grow: 1;
            background-color: var(--rp-overlay);
            padding: 0.25rem 0.5rem;
            box-sizing: border-box;
            border: 1px solid var(--rp-highlight-high);
            border-radius: 12px;
            color: var(--rp-text);
            font-size: 1rem;

            transition:
                background-color var(--trans-speed) linear,
                border-color var(--trans-speed) linear,
                color var(--trans-speed) linear;

            &::placeholder {
                color: var(--rp-muted);
                transition: color var(--trans-speed) linear;
            }

            &:focus {
                outline: none;
                border-color: var(--rp-foam);
            }
        }

        #reset {
            background-color: var(--rp-overlay);
            border: 1px solid var(--rp-highlight-high);
            border-radius: 12px;
            padding: 0.25rem 0.5rem;
            font-size: 1rem;
            color: var(--rp-text);
            margin-left: 0.5rem;
            cursor: pointer;

            transition:
                background-color var(--trans-speed) linear,
                border-color var(--trans-speed) linear,
                color var(--trans-speed) linear;

            &:hover {
                color: var(--rp-foam);
            }
        }
    }

    #tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;

        .search-tag {
            background-color: var(--rp-overlay);
            border-radius: 12px;
            padding: 0.25rem 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
            border: none;
            color: var(--rp-text);

            transition:
                background-color var(--trans-speed) linear,
                color var(--trans-speed) linear;

            &.selected {
                background-color: var(--rp-foam);
                color: var(--rp-highlight-low);
            }
        }
    }

    #project-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>

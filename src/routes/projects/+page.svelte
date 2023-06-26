<script lang="ts">
    import { ProjectList } from "$lib/components";
    import type { ProjectMetadata } from "$lib/types";

    export let data: { projects: ProjectMetadata[], query: string };

    let filteredProjects = data.projects;
    filterProjects();

    function onSearchInput() {
        updateSearchParams({ q: data.query });
        filterProjects();
    }

    function onResetClick() {
        updateSearchParams({ q: "" });
        data.query = "";
        filterProjects();
    }

    function filterProjects() {
        if (!!data.query) {
            const lowerQuery = data.query.toLowerCase();
            filteredProjects = data.projects.filter(project => {
                const title = project.title.toLowerCase();
                const description = project.description.toLowerCase();
                return title.includes(lowerQuery) || description.includes(lowerQuery);
            });
        } else {
            filteredProjects = data.projects;
        }
    }

    function updateSearchParams(values: Record<string, string>) {
        const url = new URL(location.href);
        for (let [k, v] of Object.entries(values)) {
            if (!!v) {
                url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v.trim()));
            } else {
                url.searchParams.delete(encodeURIComponent(k));
            }
        }
        history.replaceState(null, "", url.toString());
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
    <section>
        <ProjectList projects={filteredProjects}/>
    </section>
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
        }

        #reset {
            background-color: var(--rp-overlay);
            border: 1px solid var(--rp-highlight-high);
            border-radius: 12px;
            padding: 0.25rem 0.5rem;
            font-size: 1rem;
            color: var(--rp-text);
            margin-left: 1rem;
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
</style>

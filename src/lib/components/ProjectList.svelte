<script lang="ts">
    import { PROJECT_TAGS, type ProjectMetadata } from "$lib/types";
    import { formatDate } from "$lib/utils";
    import { InfoCard } from ".";

    export let projects: ProjectMetadata[];
</script>

{#each projects as project}
    <InfoCard 
        name={project.title}
        dateRange="{formatDate(project.startDate)} — {project.endDate ? formatDate(project.endDate) : "Present"}"
        logo={project.logo || "/projects/default.svg"}
        url="/projects/{project.slug}"
    >
        <span slot="left-info">
            {project.description}
            {#if project.tags}
                <div id="tags">
                    {#each project.tags as tag}
                        <a href="/projects?t={tag}" class="tag plain" target="_self">
                            #{PROJECT_TAGS[tag] ?? tag}
                        </a>
                    {/each}
                </div>
            {/if}
        </span>
    </InfoCard>
{/each}

<style lang="scss">
    #tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;

        .tag {
            background-color: var(--rp-base);
            border-radius: 12px;
            padding: 0.25rem 0.5rem;
            font-size: 0.8rem;

            transition:
                background-color var(--trans-speed) linear,
                color var(--trans-speed) linear;
        }
    }
</style>

<script lang="ts">
    import type { ProjectMetadata } from "$lib/types";
    import { formatDate } from "$lib/utils";
    import { InfoCard } from ".";
    import ProjectTag from "./ProjectTag.svelte";

    export let projects: ProjectMetadata[];
</script>

{#each projects as project}
    <InfoCard 
        name={project.title}
        dateRange="{formatDate(project.startDate)} — {project.endDate ? formatDate(project.endDate) : "Present"}"
        logo={project.logo || "/default.svg"}
        url="/projects/{project.slug}"
    >
        <span slot="left-info">
            {project.description}
            {#if project.tags}
                <div id="tags">
                    {#each project.tags as tag}
                        <ProjectTag {tag}/>
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
    }
</style>

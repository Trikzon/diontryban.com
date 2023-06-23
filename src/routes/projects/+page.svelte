<script lang="ts">
    import InfoCard from "$lib/components/InfoCard.svelte";
    import { formatDate } from "$lib/utils";
    import type { ProjectMetadata } from "$lib/types";

    export let data: { projects: ProjectMetadata[] };
</script>

<svelte:head>
    <title>Projects — Dion Tryban</title>
</svelte:head>

<section>
    <h1>Projects</h1>
    {#each data.projects as project}
        <InfoCard 
            name={project.title}
            dateRange="{formatDate(project.startDate)} — {project.endDate ? formatDate(project.endDate) : "Present"}"
            logo={project.logo || "/default.svg"}
            url="/projects/{project.slug}"
        >
            <span slot="left-info">
                {project.description}
            </span>
        </InfoCard>
    {/each}
</section>

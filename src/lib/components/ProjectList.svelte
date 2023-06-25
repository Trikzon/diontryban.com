<script lang="ts">
    import type { ProjectMetadata } from "$lib/types";
    import { formatDate } from "$lib/utils";
    import { InfoCard } from ".";

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
        </span>
    </InfoCard>
{/each}

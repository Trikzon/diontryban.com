<script lang="ts">
    import ProjectList from "$lib/components/ProjectList.svelte";
import type { ProjectMetadata } from "$lib/types";

    export let data: { projects: ProjectMetadata[] };
</script>

<svelte:head>
    <title>Projects — Dion Tryban</title>
</svelte:head>

<section>
    <h1>Projects</h1>
    <ProjectList projects={data.projects}/>
</section>

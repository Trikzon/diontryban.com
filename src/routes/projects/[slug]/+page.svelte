<script lang="ts">
    import type { ProjectMetadata } from "$lib/types";

    export let data: { content: any, meta: ProjectMetadata };
</script>

<svelte:head>
    <title>{data.meta.title} • Dion Tryban</title>
    <!-- TODO: Put more Open Graph properties. -->
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="{data.meta.title}"/>
</svelte:head>

<article>
    <h1>{data.meta.title}</h1>
    <div id="markdown-body">
        <svelte:component this={data.content}/>
    </div>
</article>

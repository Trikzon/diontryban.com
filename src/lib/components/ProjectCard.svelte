<script lang="ts">
    import type { ProjectMetadata } from "$lib/types";
    import { Card, LinkBubble } from ".";

    export let project: ProjectMetadata;
</script>

<div id="project-card">
    <div id="badge-container">
        {#if project.type}
            {#if project.type === "game-jam"}
                <div id="badge">
                    <i class="fa-solid fa-jar"></i>Game Jam
                </div>
            {:else if project.type === "mc-mod"}
                <div id="badge">
                    <i class="fa-solid fa-cube"></i>MC Mod
                </div>
            {:else if project.type === "website"}
                <div id="badge">
                    <i class="fa-solid fa-desktop"></i>Website
                </div>
            {/if}
        {/if}
    </div>
    <Card title={project.title} url="/projects/{project.slug}" logo={project.logo} promoImage={project.promoImage}>
        <p>{project.description}</p>
        <div id="project-links">
            {#if project.article}
                <LinkBubble><i class="fa-solid fa-file"></i>Article</LinkBubble>
            {/if}
            {#if project.demo}
                <LinkBubble><i class="fa-solid fa-gamepad"></i>Demo</LinkBubble>
            {/if}
            {#if project.source}
                <LinkBubble><i class="fa-brands fa-github"></i>Source</LinkBubble>
            {/if}
        </div>
    </Card>
</div>

<style lang="scss">
    #project-card {
        flex-grow: 1;
        display: flex;

        #badge-container {
            order: 2;
            transform: translate(-1rem, 1rem);
            margin-left: -10rem;
            display: flex;
            width: 10rem;

            #badge {
                display: block;
                background-color: var(--rp-overlay);
                padding: 0.5rem;
                border-radius: 12px;
                height: 1rem;
                white-space: nowrap;
                margin-left: auto;

                i {
                    margin: 0 0.25rem;
                }
            }
        }

        #project-links {
            display: flex;
        }
    }
</style>

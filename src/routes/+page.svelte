<script lang="ts">
    import Card from "$lib/components/Card.svelte";
import ProjectCard from "$lib/components/ProjectCard.svelte";
import type { ProjectMetadata } from "$lib/types";

    export let data: { projects: ProjectMetadata[] };
</script>

<svelte:head>
    <title>Dion Tryban</title>
</svelte:head>

<section id="about">
    <img src="/profile.jpeg" alt="Me"/>
    <div class="text">
        <h1>Dion Tryban</h1>
        <p id="bio">
            Hello, I am a Computer Science major studying at <a href="https://www.cs.fsu.edu">Florida State University</a> who is interested in video game development.
            <br/><br/>
            I am the Vice President of <a href="https://fsu.devlup.org">DevLUp FSU</a> where I help teach students game programming via workshops, lectures, and projects.
            <br/><br/>
            Thank you for visiting! Learn more <a href="/about">about me</a> or <a href="/projects">my projects</a>.
        </p>
    </div>
</section>
<section id="projects">
    <h2>Featured Projects</h2>
    <div id="project-list">
        {#if data.projects}
            {#each data.projects as project}
                <ProjectCard {project}></ProjectCard>
            {/each}
        {/if}
        <Card title="Even More Projects" url="/projects">
            <p>View more projects on the <a href="/projects" target="_self">Projects</a> page.</p>
        </Card>
    </div>
</section>

<style lang="scss">
    #about {
        display: flex;
        padding: 1rem 0;

        @media (max-width: 810px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        h1 {
            margin: 0;
        }

        #bio {
            margin: 8px 0;
            line-height: 1.5rem;
        }

        img {
            --image-size: 14rem;
            min-width: var(--image-size);
            width: var(--image-size);
            min-height: var(--image-size);
            height: var(--image-size);
            border-radius: 10%;
            box-shadow: var(--shadow);
            margin-right: 1rem;
        }
    }
    #projects {
        #project-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;


        }
    }
</style>

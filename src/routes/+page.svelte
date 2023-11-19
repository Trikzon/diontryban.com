<script lang="ts">
    import { ProjectList } from "$lib/components";
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
            <a href="/about">Learn more...</a>
        </p>
    </div>
</section>
<section id="projects">
    <h2>My Projects</h2>
    <ProjectList projects={data.projects}/>
    <p><a href="/projects">View more</a></p>
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
</style>

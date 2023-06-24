<svelte:head>
    <title>Dion Tryban</title>
</svelte:head>

<section id="about">
    <img src="/profile.jpeg" alt="Me"/>
    <div class="text">
        <h1>Dion Tryban</h1>
        <h2>Computer Science Student</h2>
        <p>
            Hello! I am a Computer Science major studying at <a href="https://www.cs.fsu.edu">Florida State University</a>.<br/>
            I develop applications, video games, and Minecraft mods.<br/>
            I am searching for a 2024 summer internship.
        </p>
    </div>
</section>
<section id="projects">
    <h1>Latest Projects</h1>
    <p><a href="/projects">View more</a></p>
</section>
<section id="blog">
    <h1>Latest Blog Posts</h1>
    <p><a href="/blog">Read more</a></p>
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

        h1, h2 {
            margin: 0;
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

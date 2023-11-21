<script lang="ts">
    import { InfoCard, LinkBubble } from "$lib/components"
</script>

<svelte:head>
    <title>About — Dion Tryban</title>
</svelte:head>

<section id="about">
    <img src="/profile.jpeg" alt="Me"/>
    <div class="text">
        <h1>About Me</h1>
        <p id="bio">
            Hello, I am a Computer Science major studying at <a href="https://www.cs.fsu.edu">Florida State University</a> who is interested in video game development.
            <br/><br/>
            I am the Vice President of <a href="fsu.devlup.org">DevLUp FSU</a> where I help teach students game programming via workshops, lectures, and projects.
            <br/><br/>
            <LinkBubble href=""><i class="fa-solid fa-file"></i>Resume</LinkBubble>
            <LinkBubble href="mailto:mail@diontryban.com"><i class="fa-solid fa-envelope"></i>Email</LinkBubble>
            <LinkBubble href="https://www.linkedin.com/in/diontryban/"><i class="fa-brands fa-linkedin"></i>LinkedIn</LinkBubble>
            <LinkBubble href="https://github.com/Trikzon"><i class="fa-brands fa-github"></i>GitHub</LinkBubble>
            <LinkBubble href="https://mastodon.gamedev.place/@diontryban"><i class="fa-brands fa-mastodon"></i>Mastodon</LinkBubble>
        </p>
    </div>
</section>
<section>
    <h2>Education</h2>
    <InfoCard name="Florida State University" logo="/resume/fsu_seal.png" dateRange="January 2023 — May 2025" url="https://www.fsu.edu" external>
        <span slot="left-info">
            <b>Bachelor of Science in Computer Science</b><br/>
            <em>Minor in Mathematics</em>
        </span>
        <span slot="right-info">
            GPA: 3.62
        </span>
    </InfoCard>
    <InfoCard name="University of South Florida" logo="/resume/usf_seal.png" dateRange="August 2021 — December 2022" url="https://www.usf.edu" external>
        <span slot="left-info">
            <b>Associate of Arts</b><br/>
            <em>Concentration in Computer Science</em>
        </span>
    </InfoCard>
</section>
<section>
    <h2>Leadership Experience</h2>
    <InfoCard name="DevLUp FSU" logo="/resume/devlup_fsu_logo.png" dateRange="April 2023 — May 2024" url="https://fsu.devlup.org" external>
        <span slot="left-info">
            <b>Vice President</b>
            <ul>
                <li>Design, organize, and teach hands-on workshops about game programming and design.</li>
                <li>Ensure that the club's weekly meetings go smoothly by writing announcements, helping with workshops, and advertising the club around campus.</li>
                <li>Provide support and resources to members to help them make their own games.</li>
                <li>Lead the development of a club game project to help members get past the hurdle of making their first project.</li>
            </ul>
        </span>
    </InfoCard>
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
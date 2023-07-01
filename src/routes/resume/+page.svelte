<script lang="ts">
    import { InfoCard } from "$lib/components"
</script>

<svelte:head>
    <title>Résumé — Dion Tryban</title>
</svelte:head>

<section>
    <h1>Résumé</h1>
    <section>
        <h2>Education</h2>
        <InfoCard name="Florida State University" logo="/resume/fsu_seal.png" dateRange="January 2023 — May 2025" url="https://www.fsu.edu" external>
            <span slot="left-info">
                <b>Bachelor of Science in Computer Science</b><br/>
                <em>Minor in Mathematics</em>
            </span>
            <span slot="right-info">
                GPA: 4.00<br/>
                Cumulative GPA: 3.58
            </span>
        </InfoCard>
        <InfoCard name="University of South Florida" logo="/resume/usf_seal.png" dateRange="August 2021 — December 2022" url="https://www.usf.edu" external>
            <span slot="left-info">
                <b>Associate of Arts</b><br/>
                <em>Concentration in Computer Science</em>
            </span>
            <span slot="right-info">
                GPA: 3.43
            </span>
        </InfoCard>
    </section>
    <section>
        <h2>Experience</h2>
        <InfoCard name="DevLUp FSU" logo="/resume/devlup_fsu_logo.png" dateRange="April 2023 — May 2024" url="https://devlup.org" external>
            <span slot="left-info">
                <b>Vice President</b>
                <ul>
                    <li>Plan, develop, and present workshops to teach video game development skills.</li>
                    <li>Aid the President in activities and organize communication between board members.</li>
                </ul>
            </span>
        </InfoCard>
    </section>
    <h2>Projects</h2>
    <h2>Technical Skills</h2>
    <section>
        <h2>Organizations</h2>
        <InfoCard name="ACM at FSU" logo="/resume/acm_logo.png" dateRange="January 2023 — Present" url="https://fsu.acm.org" external>
            <span slot="left-info">
                Florida State University's Association for Computing Machinery Student Chapter strives to promote computing as a science and profession.
            </span>
        </InfoCard>
        <InfoCard name="DevLUp FSU" logo="/resume/devlup_fsu_logo.png" dateRange="January 2023 — Present" url="https://devlup.org" external>
            <span slot="left-info">
                Florida State University's video game development club and branch of the state-wide DevLUp non-profit organization.
            </span>
        </InfoCard>
        <InfoCard name="IEEE at FAMU/FSU" logo="/resume/ieee_logo.png" dateRange="January 2023 — Present" url="https://web1.eng.famu.fsu.edu/ieee/index.html" external>
            <span slot="left-info">
                FAMU-FSU College of Engineering's Institute of Electrical and Electronics Engineers student branch.
            </span>
        </InfoCard>
    </section>
    <h2>Honors & Awards</h2>
    <h2>Certifications</h2>
</section>

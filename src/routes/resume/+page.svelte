<svelte:head>
    <title>Résumé — Dion Tryban</title>
</svelte:head>

<script lang="ts">
    import CompanyCard from "./CompanyCard.svelte";
</script>

<section>
    <h1>Résumé</h1>
    <section>
        <h2>Education</h2>
        <CompanyCard name="Florida State University" logo="/resume/fsu_seal.png" dateRange="January 2023 — May 2025" url="https://www.fsu.edu">
            <span slot="left-info">
                <p><b>Bachelor of Science in Computer Science</b></p>
                <p><em>Minor in Mathematics</em></p>
            </span>
            <span slot="right-info">
                <p>GPA: 4.00</p>
                <p>Cumulative GPA: 3.56</p>
            </span>
        </CompanyCard>
        <CompanyCard name="University of South Florida" logo="/resume/usf_seal.png" dateRange="August 2021 — December 2022" url="https://www.usf.edu">
            <span slot="left-info">
                <p><b>Associate of Arts</b></p>
                <p><em>Concentration in Computer Science</em></p>
            </span>
            <span slot="right-info">
                <p>GPA: 3.43</p>
            </span>
        </CompanyCard>
    </section>
    <section>
        <h2>Experience</h2>
        <CompanyCard name="DevLUp FSU" logo="/resume/devlup_fsu_logo.png" dateRange="April 2023 — May 2024" url="https://devlup.org">
            <span slot="left-info">
                <p><b>Vice President</b></p>
                <ul>
                    <li>Plan, develop, and present workshops to teach video game development skills.</li>
                    <li>Aid the President in activities and organize communication between board members.</li>
                </ul>
            </span>
        </CompanyCard>
    </section>
    <h2>Projects</h2>
    <h2>Technical Skills</h2>
    <section>
        <h2>Organizations</h2>
        <CompanyCard name="ACM at FSU" logo="/resume/acm_logo.png" dateRange="January 2023 — Present" url="https://fsu.acm.org">
            <span slot="left-info">
                <p>Florida State University's Association for Computing Machinery Student Chapter strives to promote computing as a science and profession.</p>
            </span>
        </CompanyCard>
        <CompanyCard name="DevLUp FSU" logo="/resume/devlup_fsu_logo.png" dateRange="January 2023 — Present" url="https://devlup.org">
            <span slot="left-info">
                <p>Florida State University's video game development club and branch of the state-wide DevLUp non-profit organization.</p>
            </span>
        </CompanyCard>
        <CompanyCard name="IEEE at FAMU/FSU" logo="/resume/ieee_logo.png" dateRange="January 2023 — Present" url="https://web1.eng.famu.fsu.edu/ieee/index.html">
            <span slot="left-info">
                <p>FAMU-FSU College of Engineering's Institute of Electrical and Electronics Engineers student branch.</p>
            </span>
        </CompanyCard>
    </section>
    <h2>Honors & Awards</h2>
    <h2>Certifications</h2>
</section>

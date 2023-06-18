<svelte:head>
    <script>
        const theme = localStorage.getItem("theme");
        if (theme && (theme === "theme-dark" || theme === "theme-light")) {
            document.documentElement.classList.add(theme);
        } else {
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("theme-dark");
            } else {
                document.documentElement.classList.add("theme-light");
            }
        }
    </script>
</svelte:head>

<script lang="ts">
    import "../global.scss";

    import { page } from "$app/stores";

    import Footer from "./Footer.svelte";
    import NavBar from "./NavBar.svelte";
</script>

<div>
    {#if $page.url.pathname !== "/"}
        <aside>
            <p>Contact Card</p>
        </aside>
    {/if}

    <div id="wrapper">
        <header>
            <NavBar/>
        </header>
        <main>
            <slot></slot>
        </main>
        <Footer/>
    </div>
</div>

<style lang="scss">
    #wrapper {
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 50rem;
        min-height: 100dvh;
        background-color: var(--rp-surface);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

        display: flex;
        flex-direction: column;

        transition: background-color var(--trans-speed) linear;

        header {
            flex-grow: 0;
        }

        main {
            flex-grow: 1;
        }
    }
</style>

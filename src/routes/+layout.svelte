<script lang="ts">
    import "../global.scss";

    import Footer from "./Footer.svelte";
    import InDevBanner from "./InDevBanner.svelte";
    import NavBar from "./NavBar.svelte";
</script>

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
    <meta name="google" content="notranslate">
</svelte:head>

<div>
    <InDevBanner/>
    <div id="wrapper">
        <header><NavBar/></header>
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
        box-shadow: var(--shadow);

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

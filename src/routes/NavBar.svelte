<script lang="ts">
    import ThemeToggle from "./ThemeToggle.svelte";
</script>

<nav>
    <div class="left">
        <a href="/" class="plain">Dion Tryban</a>
    </div>
    <div class="right">
        <span class="links">
            <a href="/blog" class="muted plain">Blog</a>
            <a href="/projects" class="muted plain">Projects</a>
            <a href="/resume" class="muted plain">Résumé</a>
        </span>
        <ThemeToggle></ThemeToggle>
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 3rem 0 1.5rem 0;
        border-bottom: 2px solid var(--rp-overlay);

        transition: border-color var(--trans-speed) linear;

        a {
            font-size: 1.25rem;
        }

        .right {
            a {
                margin-left: 0.5rem;
            }

            .links {
                margin-right: 0.75rem;
            }
        }
    }
</style>

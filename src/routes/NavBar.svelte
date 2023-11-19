<script lang="ts">
    import ThemeToggle from "./ThemeToggle.svelte";
</script>

<nav>
    <div class="left">
        <a href="/" class="plain">Dion Tryban</a>
    </div>
    <div class="right">
        <span class="links">
            <a href="/about" class="muted plain">About</a>
            <a href="/blog" class="muted plain">Blog</a>
            <a href="/projects" class="muted plain">Projects</a>
        </span>
        <ThemeToggle></ThemeToggle>
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 0 1.5rem 0;

        @media (max-width: 450px) {
            flex-direction: column;
            align-items: center;

            .left {
                margin-bottom: 1rem;
            }
        }

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

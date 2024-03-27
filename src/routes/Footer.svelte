<script lang="ts">
    import PageUrls from "$lib/data/PageUrls";
</script>

<footer>
    <ul>
        <li><a class="muted plain" href={PageUrls.contact()}>Contact</a></li>
        <li><a class="muted plain" href={PageUrls.external.maven()}>Maven</a></li>
        <li><a class="muted plain" href={PageUrls.privacy()}>Privacy</a></li>
        <li><a class="muted plain" href="https://github.com/Trikzon/diontryban.com">Source Code</a></li>
    </ul>
    <p id="wide" class="muted">
        &copy Dion Tryban 2023-2024 — Powered by
        <a class="muted" href="https://kit.svelte.dev">SvelteKit</a>, 
        <a class="muted" href="https://www.typescriptlang.org">TypeScript</a>, and 
        <a class="muted" href="https://mdsvex.com">mdsvex</a>
    </p>
    <div id="thin">
        <p class="muted">&copy Dion Tryban 2023-2024</p>
        <p class="muted">
            Powered by
            <a class="muted" href="https://kit.svelte.dev">SvelteKit</a>, 
            <a class="muted" href="https://www.typescriptlang.org">TypeScript</a>, and 
            <a class="muted" href="https://mdsvex.com">mdsvex</a>
        </p>
    </div>
</footer>

<style lang="scss">
    footer {
        flex-grow: 0;
        margin-top: 1rem;

        ul {
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 0;

            li {
                margin: 0 0.5rem;
            }
        }

        p {
            text-align: center;
        }

        @media (max-width: 540px) {
            #wide {
                display: none;
            }
        }
        @media (min-width: 541px) {
            #thin {
                display: none;
            }
        }
    }
</style>

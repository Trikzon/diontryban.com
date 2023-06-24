<footer>
    <ul>
        <li><a class="muted plain" href="/contact">Contact</a></li>
        <li><a class="muted plain" href="https://maven.diontryban.com/#">Maven</a></li>
        <li><a class="muted plain" href="/privacy">Privacy</a></li>
        <li><a class="muted plain" href="https://github.com/Trikzon/diontryban.com">Source Code</a></li>
    </ul>
    <p id="wide" class="muted">
        Dion Tryban &copy 2023 — Powered by
        <a class="muted" href="https://kit.svelte.dev">SvelteKit</a>, 
        <a class="muted" href="https://www.typescriptlang.org">TypeScript</a>, and 
        <a class="muted" href="https://mdsvex.com">mdsvex</a>
    </p>
    <div id="thin">
        <p class="muted">Dion Tryban &copy 2023</p>
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

<script lang="ts">
    import { dev } from "$app/environment";
</script>

{#if !dev}
    <div id="banner">
        This Webpage is still in development. Some info may be incorrect or missing. Please check back later.
    </div>
{/if}

<style lang="scss">
    #banner {
        position: fixed;
        width: 100%;
        padding: 0.5rem 0;
        background-color: orange;
        box-shadow: var(--shadow);
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        z-index: 1000;
        text-align: center;

        background-image: repeating-linear-gradient(
            -55deg,
            #000,
            #000 20px,
            #ffb101 20px,
            #ffb101 40px
        );
    }

    :global(#banner + #wrapper > header) {
        margin-top: 1rem;

        @media (max-width: 733px) {
            margin-top: 2rem;
        }

        @media (max-width: 379px) {
            margin-top: 3rem;
        }
    }

</style>

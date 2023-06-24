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
        z-index: 1000;
        text-align: center;
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

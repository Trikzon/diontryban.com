<script lang="ts">
    export let href: string = "";
    export let external: boolean = false;
</script>

<a class="plain" {href} target={external ? "_blank" : "_self"}><slot/></a>

<style lang="scss">
    a {
        background-color: var(--rp-base);
        border-radius: 12px;
        padding: 0.25rem 0.5rem;
        white-space: nowrap;
        margin-right: 0.25rem;

        transition:
            background-color var(--trans-speed) linear,
            color var(--trans-speed) linear;

        :global(i) {
            padding-right: 0.25rem;
        }
    }
</style>

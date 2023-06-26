<script lang="ts">
    import { PROJECT_TAGS } from "$lib/types";

    export let tag: string;
</script>

<a id="tag" class="plain">
    {PROJECT_TAGS[tag] ?? tag}
</a>

<style lang="scss">
    #tag {
        background-color: var(--rp-surface);
        border-radius: 12px;
        padding: 0.25rem 0.5rem;
        font-size: 0.8rem;
    }
</style>

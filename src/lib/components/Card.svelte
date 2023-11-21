<script lang="ts">
    export let title: string
    export let url: string | undefined = undefined;
    export let external: boolean = false;
    export let logo: string | undefined = undefined;
    export let promoImage: string | undefined = undefined;
    export let promoColor: string = seededRandomThemeColor(title);


    function seededRandomThemeColor(seed: string): string {
        const COLORS = [
            "var(--rp-love)",
            "var(--rp-gold)",
            "var(--rp-rose)",
            "var(--rp-pine)",
            "var(--rp-foam)",
            "var(--rp-iris)"
        ];
        return COLORS[seed.length % COLORS.length];
    }
</script>

<div id="card">
    <div id="top">
        {#if url && promoImage}
            <a id="promo-image" href={url} target={external ? "_blank" : "_self"}>
                <img id="promo-image" src={promoImage} alt="{title} Promo Image">
            </a>
        {:else if promoImage}
            <img id="promo-image" src={promoImage} alt="{title} Promo Image">
        {:else if url}
            <a id="promo-image" href={url} target={external ? "_blank" : "_self"}>
                <div id="promo-image" style="background-color: {promoColor}"></div>
            </a>
        {:else}
            <div id="promo-image" style="background-color: {promoColor}"></div>
        {/if}
    </div>
    <div id="bottom">
        <div id="title">
            {#if url && logo}
                <a id="logo" href={url} target={external ? "_blank" : "_self"}>
                    <img src={logo} alt="{title} Logo">
                </a>
            {:else if logo}
                <div id="logo">
                    <img src={logo} alt="{title} Logo">
                </div>
            {/if}
            {#if url}
                <a class="plain" href={url} target={external ? "_blank" : "_self"}>
                    <h3>{title}</h3>
                </a>
            {:else}
                <h3>{title}</h3>
            {/if}
        </div>
        <slot/>
    </div>
</div>

<style lang="scss">
    #card {
        display: flex;
        flex-direction: column;
        width: 384px;
        max-width: 384px;
        flex-grow: 1;
        margin: 0.5rem;
        min-height: 267px;

        @media (max-width: 840px) {
            max-width: none;
        }

        #top {
            width: 100%;
            height: 8rem;

            #promo-image {
                width: 100%;
                height: 8rem;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                object-fit: cover;
            }
        }
        #bottom {
            display: flex;
            flex-direction: column;
            background-color: var(--rp-overlay);
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            padding: 0.25rem 1rem 1rem 1rem;
            height: 100%;

            #title {
                display: flex;

                #logo {
                    --logo-size: 5rem;
                    min-width: var(--logo-size);
                    width: var(--logo-size);
                    min-height: var(--logo-size);
                    height: var(--logo-size);
                    margin-top: -3.5rem;
                    margin-right: 1rem;
                    box-shadow: -2px -2px 0 2px var(--rp-overlay), 2px -2px 0 2px var(--rp-overlay);
                    background-color: var(--rp-overlay);
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                    padding: 0.15rem;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                h3 {
                    margin: 0;
                }
            }
        }
    }
</style>
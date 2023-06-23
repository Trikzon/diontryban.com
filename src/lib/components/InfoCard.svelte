<script lang="ts">
    export let name: string;
    export let dateRange: string;
    export let logo: string;
    export let url: string | undefined = undefined;
    export let external: boolean = false;
</script>

<div id="card">
    {#if url}
        <a id="logo" href={url} target={external ? "_blank" : "_self"}>
            <img src={logo} alt="{name} Logo">
        </a>
    {:else}
        <div id="logo">
            <img src={logo} alt="{name} Logo">
        </div>
    {/if}
    <div id="info">
        <div id="info-title">
            {#if url}
                <a class="plain" href={url} target={external ? "_blank" : "_self"}>
                    <h3>{name}</h3>
                </a>
            {:else}
                <h3>{name}</h3>
            {/if}
            <p id="date-range" class="muted">{dateRange}</p>
        </div>
        <div id="info-columns">
            <div>
                <slot name="left-info"></slot>
            </div>
            <div id="right-column">
                <slot name="right-info"></slot>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    #card {
        display: flex;
        background-color: var(--rp-overlay);
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 12px;

        transition: background-color var(--trans-speed) linear;

        #logo {
            --card-size: 5rem;
            min-width: var(--card-size);
            width: var(--card-size);
            min-height: var(--card-size);
            height: var(--card-size);

            margin-right: 1rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        #info-title {
            display: flex;
            justify-content: space-between;

            #date-range {
                margin: 0.5rem 0;
            }
        }

        #info {
            flex-grow: 1;

            #info-columns {
                display: flex;
                justify-content: space-between;

                #right-column {
                    flex-shrink: 0;
                    text-align: right;
                }
            }
        }
    }
</style>

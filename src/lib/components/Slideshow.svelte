<script lang="ts">
    export let slideUrls: string[] = [];
    export let slideDelay: number = 5000;

    let currentSlide = 0

    function showSlide(n: number) {
        currentSlide = (n) % slideUrls.length;
        currentSlide = currentSlide < 0 ? slideUrls.length + n : currentSlide;
    }

    function showNextSlide(direction: number = 1) {
        showSlide(currentSlide + direction);
    }

    if (slideDelay > 0) {
        setInterval(showNextSlide, slideDelay);
    }
</script>

<div>
    <div id="slides" class="theme-dark">
        {#each slideUrls as slideUrl, i}
            <img class="slide" class:active={currentSlide === i} src={slideUrl} alt="Slideshow"/>
        {/each}

        {#if slideUrls.length > 1}
            <button class="prev" on:click={() => showNextSlide(-1)}>&#10094</button>
            <button class="next" on:click={() => showNextSlide()}>&#10095</button>

            <div id="dots-container">
                <div id="dots">
                    {#each slideUrls as _, i}
                        <button class="dot" class:active={currentSlide === i} on:click={() => showSlide(i)}></button>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    #slides {
        background-color: var(--rp-base);
        overflow: hidden;
        position: relative;
        border-radius: 1rem;

        .slide {
            width: 100%;
            max-height: 450px;
            object-fit: contain;

            display: block;
            height: 0;
            opacity: 0.25;
            transition: opacity 1.5s;

            &.active {
                height: auto;
                opacity: 1;
            }
        }

        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            margin-top: -1.5rem;
            width: auto;
            padding: 1rem;
            color: var(--rp-subtle);
            font-size: 1.5rem;
            transition: 0.6s ease;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 0 1rem 1rem 0;

            &:hover {
                background-color: rgba(0, 0, 0, 0.7);
                text-decoration: underline;
                color: var(--rp-iris);
            }
        }

        .next {
            right: 0;
            border-radius: 1rem 0 0 1rem;
        }

        #dots-container {
            position: absolute;
            bottom: 5%;
            left: 50%;

            #dots {
                display: flex;
                position: relative;
                left: -50%;
                text-align: center;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 1rem;
                padding: 0 0.5rem;

                .dot {
                    cursor: pointer;
                    height: 1rem;
                    width: 1rem;
                    margin: 0.5rem 0.5rem;
                    background-color: var(--rp-subtle);
                    border-radius: 50%;
                    display: inline-block;
                    transition: background-color 0.6s ease;

                    &.active {
                        background-color: var(--rp-text);
                    }

                    &:hover {
                        background-color: var(--rp-iris);
                    }
                }
            }
        }
    }

    button {
        border: none;
        outline: none;
    }
</style>

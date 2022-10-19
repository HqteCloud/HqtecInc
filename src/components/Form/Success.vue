<script setup>
</script>

<template>
    <div class="container">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="121.572" height="121.572" viewBox="0 0 121.572 121.572">
                <g id="eb97e6dea4cc1011114a3d55ce22a7ba" transform="matrix(1, 0.017, -0.017, 1, -7.738, -10.173)">
                    <path id="Path_233" data-name="Path 233" d="M69.752,129.5A59.752,59.752,0,1,1,129.5,69.752,59.755,59.755,0,0,1,69.752,129.5Zm0-117.517a57.765,57.765,0,1,0,57.765,57.765A57.767,57.767,0,0,0,69.752,11.988ZM65.375,85.227a1.538,1.538,0,0,1-1.1.439,1.516,1.516,0,0,1-1.11-.439L52.241,74.3a1.509,1.509,0,0,1,2.134-2.134l9.865,9.865L90.117,54.241a1.5,1.5,0,0,1,2.122,2.122L65.375,85.227Z"/>
                </g>
            </svg>
            <h2>Form submitted successfully</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
        max-width: 320px;
        min-height: 20em;

        border-radius: 3em;
        border: 1px solid var(--base);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em;

        background: var(--background);
        margin: 2em;
        div { display: grid; grid-row-gap: 2em; place-items: center;}
        h2 { max-width: 12em; text-align: center;}
        svg { fill: var(--base); }
    }
</style>
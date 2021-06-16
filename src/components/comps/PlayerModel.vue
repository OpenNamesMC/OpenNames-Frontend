<template>
    <div id="SkinContainer"/>
</template>


<script> 
// https://docs.minerender.org/class/src/renderBase.js~Render.html
import SkinRender from 'minerender/src/skin/index.js'

export default {
    props: ["name"],

    created() {
        // Render.addToScene()
        const render = new SkinRender({/* options */}, document.getElementById("SkinContainer"));
        render.render(this.name);
    },

 }
</script>

<style scoped>


</style>
<template>
    <div class="mt-3 mb-3">
        <canvas id="skin_container"></canvas>
        <div class="cursor-pointer">
            <button v-on:click="toggleAnimation()">{{ currentAnimation }}</button>
        </div>

        <!-- <div class="grid py-2 m-2 grid-cols-1 bg-red-400 text-center  dark:bg-red-500 text-white hover:bg-red-300 rounded-md shadow w-10">
            <button v-on:click="toggleAnimation()">{{ currentAnimation }}</button>
        </div> -->
    </div>
</template>

<script>
var skinview3d = require("skinview3d")

export default {
    props: ["name"],
    methods: {
        toggleAnimation: function() {
            if (this.currentAnimation == "Walk") {
                try {
                    this.rotate.resetAndRemove()
                } catch {
                    console.log()
                }
                this.walk = this.skinViewer.animations.add(skinview3d.WalkingAnimation)
                this.currentAnimation = "No animation"
                return
            } else if (this.currentAnimation == "No animation") {
                this.walk.resetAndRemove()
                // this.walk.speed = 1;
                this.currentAnimation = "Rotate"
                return
            } else if (this.currentAnimation == "Rotate") {
                this.rotate = this.skinViewer.animations.add(skinview3d.RotatingAnimation)
                // this.walk.speed = 1
                this.currentAnimation = "Walk"
                return
            }
        }
    },
    data: function() {
        return {
            skinViewer: "",
            rotate: "",
            walk: "",
            currentAnimation: "Rotate"
        }
    },
    mounted() {
        let settings = {
            canvas: document.getElementById("skin_container"),
            width: 300,
            height: 400,
            alpha: true,
            skin: "https://crafatar.com/skins/" + this.name
        }
        this.skinViewer = new skinview3d.FXAASkinViewer(settings);
        let control = skinview3d.createOrbitControls(this.skinViewer);
        control.enableRotate = true;
        control.enableZoom = false;
        control.enablePan = false;
    },
 }
</script>
<style scoped>
</style>
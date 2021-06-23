<template>
    <div class="">
        <canvas id="skin_container"></canvas>
        <div class="grid py-2 m-2 grid-cols-1 bg-red-400  dark:bg-red-500 text-white hover:bg-red-300 rounded-md shadow">
            <button v-on:click="toggleAnimation()">{{ currentAnimation }}</button>

        </div>
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
                this.currentAnimation = "Rotate"
                return
            } else if (this.currentAnimation == "Rotate") {
                this.rotate = this.skinViewer.animations.add(skinview3d.RotatingAnimation)
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

        // this.skinViewer.animations.add(skinview3d.RotatingAnimation);
        // let walk = 

        // control.enableZoom = false;
        // control.enablePan = false;
        // // Change viewer size
        // skinViewer.width = 600;
        // skinViewer.height = 800;

        // // Load another skin
        // skinViewer.loadSkin(null);

        // // Load a cape
        // skinViewer.loadCape("img/cape.png");

        // // Load a elytra (from a cape texture)
        // skinViewer.loadCape("img/cape.png", { backEquipment: "elytra" });

        // // Unload(hide) the cape / elytra
        // skinViewer.loadCape(null);

        // // Control objects with your mouse!


        // // Add an animation
        // // Add another animation
        // let rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
        // // Remove an animation, stop walking dude
        // walk.remove();
        // // Remove the rotating animation, and make the player face forward
        // rotate.resetAndRemove();
        // // And run for now!
        // let run = skinViewer.animations.add(skinview3d.RunningAnimation);

        // // Set the speed of an animation
        // run.speed = 3;
        // // Pause single animation
        // run.paused = true;
        // // Pause all animations!
        // skinViewer.animations.paused = true;
    },

 }
</script>

<style scoped>
</style>
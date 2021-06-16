<template>
<!-- https://tailwindtemplates.io/search/ -->
    <div class="bg-white p-4 flex">
        <input :value="value" @input="onInput" class="w-full p-1" type="text" placeholder="Notch">
        <button v-on:click="onClick" @keyup.enter="onClick()" class="bg-blue-400 shadow-md hover:bg-blue-300 text-white m-2 p-2 pl-4 pr-4">
            <p class="font-semibold text-xs">Search</p>
        </button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            input: "",
            value: "",
        }
    },

    created() {
        this.value = ""
    },

    methods: {
        onInput(event) {
            // console.log(event.target.value)
            this.$emit("input", event.target.value)
            this.input = event.target.value
        },
        onClick() {
            console.log(this.input)
            if (this.input.length > 2) {
                this.$router.push({
                    name: "user",
                    params: {"id": this.input}
                })
                this.value = ""
            }
        }
    }
}
</script>

<style>

</style>
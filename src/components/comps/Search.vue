<template>
<!-- https://tailwindtemplates.io/search/ -->
    <div class="bg-white dark:bg-gray-900 text-center flex">
        <label class="searchLabel">
            <input @keyup.enter="onClick()" :value="value" @input="onInput" class="dark:text-white search w-full p-3 rounded shadow-md bg-gradient-to-r from-red-100 to-blue-100 dark:from-red-500 dark:to-blue-500 dark:placeholder-gray-300" type="text" placeholder="Notch">
    </label>
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
            // if we would add a check to prevent invalid names to be searched  - it would be here!
                this.$router.push({
                    name: "user",
                    params: {"id": this.input}
                })
                this.value = ""
                this.input = ""
            }
    }
}
</script>

<style scoped>

.searchLabel {
  position: relative;
}

.searchLabel:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

.search {
    padding-left: 35px;
}

/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;" xml:space="preserve"><g><g><path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/></g></g></svg> */
</style>
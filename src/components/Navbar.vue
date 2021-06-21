<template>
  <div>
    <div class="bg-white dark:bg-gray-900 shadow grid grid-cols-3">
        <div class=" place-items-left p-4 flex">
            <button v-on:click="home" class="shadow-md rounded bg-red-400  dark:bg-red-500 
              hover:bg-red-300 text-white m-2 p-2 pl-4 pr-4 justify-start">
                <p class="font-semibold text-xs">Home</p>
            </button>
        </div>

        <div class="m-auto items-center text-center justify-center">
         <search />
        </div>
        
        <div class="bg-white dark:bg-gray-900 justify-end p-4 flex">
          <button v-on:click="switchScheme" class="shadow-md rounded dark:bg-white bg-black hover:bg-grey-900 text-white dark:text-gray-700 m-2 p-2 pl-4 pr-4">
            <p class="font-semibold text-xs">{{ otherMode }}</p>
          </button>
        </div>

    </div>
  </div>
</template>

<script>
import Search from './comps/Search.vue'
export default {
  components: { Search },
  methods: {
    home: function() {
      this.$router.push('/')
    },
    switchScheme: function() {
      let doc = document.getElementsByTagName("body")[0]

      if (this.otherMode == "dark") {
        doc.className = "dark bg-gray-800";
        this.otherMode = "light"
        
      } else {
        doc.className = "light bg-white";
        this.otherMode = "dark"
      }
    }
  },
  data: function() {
    return {
      otherMode: "dark",
    }
  },

}
// document.getElementsByTagName("body")[0].className = "dark";  
</script>

<style>

</style>



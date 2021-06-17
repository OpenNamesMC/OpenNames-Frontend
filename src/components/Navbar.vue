<template>
  <div>
    <div class="bg-white dark:bg-gray-900 shadow p-3 grid grid-cols-3">
        <div class=" place-items-left p-4 flex">
            <button v-on:click="home" class="shadow-md rounded bg-red-400  dark:bg-red-500 
              hover:bg-red-300 text-white m-2 p-2 pl-4 pr-4">
                <p class="font-semibold text-xs">Home</p>
            </button>
        </div>

        <search />
        
        <div class="bg-white dark:bg-gray-900 p-4 flex">
          <button />
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
    }
  }
}
// document.getElementsByTagName("body")[0]).className = "dark";  
</script>

<style>

</style>



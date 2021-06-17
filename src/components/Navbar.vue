<template>
  <div>
    <div class="bg-white shadow p-3 grid grid-cols-3">
        <div class=" place-items-left p-4 flex">
            <button v-on:click="$router.push('/')" class="bg-red-400 shadow-md hover:bg-red-300 text-white m-2 p-2 pl-4 pr-4">
                <p class="font-semibold text-xs">Home</p>
            </button>
        </div>

        <search />
        
        <div class="bg-white p-4 flex">
        </div>

    </div>
  </div>
</template>

<script>
import Search from './comps/Search.vue'
export default {
  components: { Search },

}
</script>

<style>

</style>



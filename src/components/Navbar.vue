<template>
  <div>
    <div class="bg-white shadow p-4 grid grid-cols-3">
        <div class="bg-white place-items-left p-4 flex">
            <button v-on:click="$router.push('/')" class="bg-red-400 shadow-md hover:bg-red-300 text-white m-2 p-2 pl-4 pr-4">
                <p class="font-semibold text-xs">Home</p>
            </button>
            <!-- <router-link to="/">Home</router-link> -->
        </div>

        <search />
        
        <div class="bg-white p-4 flex">
            <!-- <router-link to="/">Home</router-link> -->
        </div>

    </div>
    <!-- <router-link to="/name/flimmerkraft/">Test name</router-link> -->
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
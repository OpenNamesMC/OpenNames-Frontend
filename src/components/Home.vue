<template>
  <div class="dark:bg-gray-800 dark:text-white">
      <!-- Title -->
      <div class="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-500 dark:to-blue-500 text-center p-10">
          <p class="text-3xl w-full font-semibold ">OpenNam.es - Everything minecraft names</p>
      </div>

      <div class="text-center">
        <p class="text-3xl w-full font-sans p-4 ">Popular names</p>
      </div>

      <!-- List of popular accounts -->
      <div class="grid gap-4 md:grid-cols-3 grid-cols-1 p-4">
        <div v-for="index in 9" v-bind:key="index">
          <div v-on:click="pushUser('notch')" class="bg-gradient-to-r from-red-100 to-blue-100 dark:from-black dark:to-black shadow cursor-pointer p-5 rounded-md">
            <div class="grid grid-cols-2 gap-4">
                <img src="https://crafatar.com/avatars/069a79f4-44e9-4726-a5be-fca90e38aaf5?size=50" alt="Head of Notch">
                <div>
                    <p>Notch</p>
                    <!-- <hr class="divider"> -->
                    <p>100 Searches</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import copy from './comps/Copy.vue'
export default {
    // components: { }
    methods: {
      pushUser: function(id) {
        this.$router.push({
            name: "user",
            params: {"id": id}
        })
      }
    }
}
</script>

<style> 

</style>
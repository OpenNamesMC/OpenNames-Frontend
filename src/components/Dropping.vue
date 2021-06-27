<template>
  <div class="p-3">
    <div class="text-center">
        <p class="text-4xl w-full font-sans p-4 text-gray-800 dark:text-gray-300">Names dropping soon</p>
    </div>


    <div class="grid grid-cols-1 lg:grid-cols-2 dark:text-white">


      <!-- Names -->
      <div class="bg-blue-200 dark:bg-gray-900 p-4 m-4 shadow rounded">
        <p class="text-2xl">Results</p>
        <hr class="mb-2 mt-2 border-gray-700 dark:border-gray-300">

        <div v-for="(result, index) in names" v-bind:key="index">
          <div class="grid grid-cols-2">
            <span class="text-md"><b>{{ result.name }}</b></span>
            <p class="text-md"><b>{{ result.searches }}</b> Views/month</p>
            <span>Dropping at <b>{{ result.droptime }}</b></span>
          </div>
          <!-- {{ result }} -->
          <hr class="mb-2 mt-2 border-white dark:border-gray-600">
        </div>  
      </div>

            <!-- Filters -->
      <div class="bg-blue-200 dark:bg-gray-900 p-4 m-4 shadow rounded order-first lg:order-last max-h-48">
        <p class="text-2xl">Filter your search</p>
        <hr class="mb-2 mt-2 border-gray-700 dark:border-gray-300">

        <div class="p-4 lg:p-2  m-1">
          <span class="p-4 lg:p-2 text-md">Views</span>
          <input type="number" min="0" class="dark:bg-gray-600 rounded shadow w-20 p-1 focus:outline-none focus:ring dark:focus:ring-blue-200" v-model="searchParams.views">

          <br>
          <button v-on:click="searchNames" class="m-2 p-2 mt-8 px-4 dark:bg-gray-500 bg-gray-300 color-white rounded shadow hover:outline-none hover:ring dark:hover:ring-blue-200">
              Search
          </button>
        </div>

        
      </div>
    </div>


  </div>
</template>

<script>
import api from '../apiHandler.js'

export default {
  created() {
    document.title = "OpenNames - dropping soon"
    // this.getDroppingSoon()
  },
  data: function() {
    return {
      names: [],
      searchParams: {views: 0}
    }
  },
  methods: {
    getDroppingSoon() {
      this.names = api.getDroppingSoon()
    },
    searchNames() {
      console.log(`Searches: ${this.searchParams.views}\n`)
    }
  }
}
</script>

<style>

</style>
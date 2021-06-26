<template>
  <div class="dark:bg-gray-800 dark:text-white">
      <!-- Title -->
      <div class=" text-center p-10">
          <div class="text-6xl w-full font-semibold ">
            <div>OpenNames</div>
          </div>
      </div>

      <div class="text-center">
        <p class="text-3xl w-full font-sans p-4 text-gray-800 dark:text-gray-300">Popular names this month</p>
      </div>


      <!-- List of popular accounts -->
      <div>
        <div v-if="showPopular" class="text-center">
          <div class="grid gap-4 md:grid-cols-3 grid-cols-1 p-4 ">
            <div v-for="index in getPopularUserCount()" v-bind:key="index">
              <div v-on:click="pushUser(popular.popular[index-1].name)" class="shadow-md rounded-md bg-gradient-to-r from-red-100 to-blue-100 dark:from-gray-900 dark:to-gray-900 cursor-pointer p-3 m-auto h-32">
                <!-- If name is taken -->
                <div v-if="popular.popular[index-1].uuid" class="grid grid-cols-2 gap-4 items-center justify-center">
                  <img :src="`https://crafatar.com/renders/head/${popular.popular[index-1].uuid}?size=50 `" alt="">
                  <div class="m-auto">  
                    <p class="font-bold text-md">{{ popular.popular[index-1].name }}</p>
                    <p class="text-sm">Searches: {{ popular.popular[index-1].monthlyViews }}</p>
                  </div>
                </div>
                <!-- If name is dropping soon / free -->
                <div v-else class="py-3">
                  <p class="font-bold text-xl">{{ popular.popular[index-1].name }}</p>
                  <p class="text-md">Searches: {{ popular.popular[index-1].monthlyViews }} (monthly)</p>
                  <!-- If name is free -->
                  <div v-if="!popular.popular[index-1].unixDropTime">
                    <p class="text-md">Name available</p>
                  </div>
                  <!-- If name is dropping soon -->
                  <div v-else>
                    <p class="text-md">Dropping {{ toTimestamp(popular.popular[index-1].unixDropTime) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="bg-red-400 hover:bg-red-300 dark:bg-red-500 dark:hover:bg-red-400 text-white p-4 px-7 m-4 rounded shadow-md" v-on:click="$router.push('popular')">
            <b>Top 10</b>
          </button>
        </div>

        <!-- If loading names -->
        <div v-else class="flex items-center text-center justify-center">
          {{ popular }}
          <div class="py-52">
            <div v-if="!popular.err">
              <div class="lds-ripple text-center border-green-900 "><div></div><div></div></div>
              <p>Loading popular users...</p> 
            </div>
          </div>
        </div>
      </div>

      <br>
      <div class="text-center">
        <p class="text-3xl w-full font-sans p-4 text-gray-800 dark:text-gray-300">Names dropping soon</p>
      </div>
      <br>

      <!-- Show names that are dropping soon -->
      <div>
        <div v-if="showPopular"  class="text-center">
          <div class="grid gap-4 md:grid-cols-3 grid-cols-1 p-4 ">
            <div v-for="index in getPopularUserCount()" v-bind:key="index">
              <div v-on:click="pushUser(popular.popular[index-1].name)" class="shadow-md rounded-md bg-gradient-to-r from-red-100 to-blue-100 dark:from-gray-900 dark:to-gray-900 cursor-pointer p-3 m-auto h-32">
                <div class="flex gap-4 items-center justify-center py-3">
                    <div class="m-auto">
                        <p class="font-bold text-xl">{{ popular.popular[index-1].name }}</p>
                        <p class="text-md">Searches: {{ popular.popular[index-1].monthlyViews }} (monthly)</p>
                        <p class="text-md">soon dropping</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
            <button class="bg-red-400 hover:bg-red-300 dark:bg-red-500 dark:hover:bg-red-400 text-white p-4 px-7 m-4 rounded shadow-md" v-on:click="$router.push('dropping')">
              <b>More</b>
            </button>
        </div>

        <!-- If loading names -->
        <div v-else class="flex items-center text-center justify-center">
          {{ popular }}
          <div class="py-52">
            <div v-if="!popular.err">
              <div class="lds-ripple text-center border-green-900 "><div></div><div></div></div>
              <p>Loading popular users...</p> 
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
// import copy from './comps/Copy.vue'
import api from '../apiHandler.js'

export default {
    data: function() {
      return {
        popularUserCount: 6,
        popular: {popular: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], err: ""},
        showPopular: false,
      }
    },
    created() {
      this.getPopularUsers().then( () => {
        document.title = "OpenNames"
        this.showPopular = true
      })
    },
    // components: { }
    methods: {
      pushUser: function(id) {
        this.$router.push({
            name: "user",
            params: {"id": id}
        })
      },
    
      getPopularUserCount: function() {
        if (window.innerWidth > 768) {
          return 6
        }
        return 3
      },

      getPopularUsers: async function() {
        api.getPopularUsers().then( data => {
          // console.log(data)
          if (!data.err) {
            this.popular.popular = data.popular
            this.popular.err = data.err.message
            this.popular.done = true
            // console.log(this.popular)
            return true
          } else {
            this.popular.err = data.err.message
            console.error("Couln't load popular users")
            return false
          }
        }
        )
      }
    },

}
</script>

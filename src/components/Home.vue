<template>
  <div class="dark:bg-gray-800 dark:text-white">
      <!-- Title -->
      <div class=" text-center p-10">
          <p class="text-4xl w-full font-semibold ">OpenNam.es - Everything minecraft names</p>
      </div>

      <div class="text-center">
        <p class="text-3xl w-full font-sans p-4 ">Popular names this month</p>
      </div>

      <!-- List of popular accounts -->
      <div v-if="showPopular">
        <div class="grid gap-4 md:grid-cols-3 grid-cols-1 p-4 ">
          <div v-for="index in getPopularUserCount()" v-bind:key="index">
            <div v-on:click="pushUser(popular.popular[index].name)" class="bg-gradient-to-r from-red-100 to-blue-100 dark:from-black dark:to-black shadow cursor-pointer p-5 m-auto rounded-md h-36">
              <div class="grid grid-cols-2 gap-4 items-center justify-center m-auto">
                <img :src="`https://crafatar.com/renders/head/${popular.popular[index].UUID}?size=50`" alt="">
                  <div class="m-auto">
                      <p class="font-bold text-md">{{ popular.popular[index].name }}</p>
                      <!-- <hr class="divider"> -->
                      <p class="text-sm">Searches: {{ popular.popular[index].monthlyViews }}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
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
</template>

<script>
// import copy from './comps/Copy.vue'
import api from '../apiHandler.js'

export default {
    data: function() {
      return {
        popularUserCount: 9,
        popular: {popular: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], err: ""},
        showPopular: false,
      }
    },
    created() {
      this.getPopularUsers().then( () => {
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
          return 9
        }
        return 3
      },

      getPopularUsers: async function() {
        api.getPopularUsers().then( data => {
          console.log(data)
          if (!data.err) {
            this.popular.popular = data.popular
            this.popular.err = data.err.message
            this.popular.done = true
            console.log(this.popular)
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

<style> 

</style>
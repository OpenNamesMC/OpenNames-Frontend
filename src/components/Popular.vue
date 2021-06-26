<template>
  <div class="main">
    <div class="text-center">
        <p class="text-4xl w-full font-sans p-4 text-gray-800 dark:text-gray-300">Top 10 most popular names</p>
    </div>
    <div v-if="show">
        <div v-for="(user, index) in popular.popular" v-bind:key="index">
            
            <div v-on:click="toUser(user.name)" class="bg-blue-200 dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2 p-6 m-4 rounded-md shadow-md cursor-pointer items-center">
                <img v-if="innerWidth > 768" :src="`https://crafatar.com/renders/body/${user.uuid}`" class="mx-auto pb-3"/>
                <img v-else :src="`https://crafatar.com/renders/head/${user.uuid}`" class="mx-auto pb-3"/>
                <div class="mx-auto w-full overscroll-contain overflow-hidden ">
                    <div class="userdata rounded-md bg-blue-100 dark:bg-gray-700 dark:text-white shadow p-4 text-left">
                        <p class="text-lg">User information</p>
                        <hr class="mb-2 mt-2 border-gray-400 dark:border-gray-300">
                        <p><b>Username</b></p>
                        <p>{{ user.name }}</p>
                        <p><b>Searches (month)</b></p>
                        <p>{{ user.monthlyViews }}</p>
                        <p><b>Searches (all)</b></p>
                        <p>{{ user.lifetimeViews }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import api from '../apiHandler.js'
import userModule from './User.vue'

export default {
    data: function() {
        return {
            show: false,
            popular: {},
            innerWidth: window.innerWidth,
        }
    },

    created() {
        this.getPopularUsers().then( (res) => {
            console.log(res)
            document.title = "OpenNames - Popular"
            this.show = true
        })
    },
    
    methods: {
      getPopularUsers: async function() {
        api.getPopularUsers().then( data => {
            if (!data.err) {
                this.popular.popular = data.popular
                console.log(this.popular.popular)
                this.popular.err = data.err.message
                this.popular.done = true
                return true
            } else {
                this.popular.err = data.err.message
                console.error("Couln't load popular users")
                return false
            }
        }
        )
      },
      toTimestamp: function(inp) {
          return userModule.methods.toTimestamp(inp)
      },
      toUser: function(inp) {
      this.$router.push({
          name: "user",
          params: {"id": inp}
      })
      }
    }
}
</script>

<style>

</style>
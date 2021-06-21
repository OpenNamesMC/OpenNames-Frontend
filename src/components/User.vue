<template>
  <div class="main dark:bg-gray-800 dark:text-white">
    <br>
    <!-- Show loading spinner while loading -->
    <div v-if="!show" class="py-52">
      <div class="lds-ripple border-green-900 "><div></div><div></div></div>
      <p>Loading...</p> 
    </div>

    <!--When name is loaded -->

    <div v-else>
      <!-- If the name is "illegal" -->
        <div v-if="isIllegal() && (userData.name == undefined)" class="bg-red-600 p-4 rounded shadow-md grid gap-4 grid-cols-1 md:grid-cols-2"> 
          <p class="text-3xl p-5  text-white">{{ $route.params.id }} is invalid</p>
          <!-- <p class="text-2xl p-5 text-white">{{ userData.views + '' }} Searches</p> -->
          <p class="text-2xl p-5 text-white">{{ userData.monthlyViews }} Searches (monthly)</p>
        </div>

      <!-- If name is avaible -->
      <div v-else-if="userData.error == 'Name is avaible'">
        <div class="bg-green-600 p-4 rounded shadow-md grid gap-4 grid-cols-1 md:grid-cols-2"> 
          <p class="text-3xl p-5  text-white">{{ $route.params.id }} is avaible*</p>
          <!-- <p class="text-2xl p-5 text-white">{{ userData.views + '' }} Searches</p> -->
          <p class="text-2xl p-5 text-white">{{ (userData.monthlyViews || '1' ) }} Searches (monthly)</p>

        </div>
        <div style="text-align: left;">
          <p class="text-md">*Unless the name is banned by microsoft, or dropping soon and not cached.</p>
        </div>
      </div>

      <!-- If name is dropping soon -->
      <div v-else-if="userData.dropping" class="bg-yellow-600 p-4 rounded shadow-md grid gap-4 grid-cols-1 md:grid-cols-2 items-center justify-center"> 
        <p class="text-3xl p-5  text-white row-span-2">{{ $route.params.id }} is dropping soon</p>
      
        <div class="p-5 items-center justify-center">
          <p class="text-1xl text-white">{{ userData.monthlyViews }} Searches (monthly)</p>
          <p class="text-1xl text-white">Dropping at {{ toTimestamp(userData.unixDropTime) }}</p>
        </div>
      </div>

    <!-- If name is taken -->
    <div v-else class="grid gap-4 md:grid-cols-2 grid-cols-1">

      <!-- Skin rendering -->
      <div class="dark:bg-gray-900 rounded-md bg-gray-200 row-span-2 align-middle">
        <div class="flex items-center justify-center">
          <renderer :name=userData.uuid />
          <!-- <img style="position: relative;" :src="`https://crafatar.com/renders/body/${userData.uuid}`" alt="Skin render" /> -->
          <!-- Skin: WIP -->
        </div>
      </div>

      <!-- User information -->
      <div class="userdata rounded-md bg-green-50 dark:bg-gray-700 shadow p-5">
        <p class="text-lg">User information</p>
        <hr class="mb-2 mt-2">
        <p><b>Username</b></p>
        <p>{{ userData.name }}</p>
        <p><b>UUID</b></p>
        <p>{{ userData.uuid }}</p>
        <p><b>Searches (month)</b></p>
        <p>{{ userData.monthlyViews }}</p>
        <p><b>Searches (all)</b></p>
        <p>{{ userData.lifetimeViews }}</p>
      </div>

      <div class="userdata rounded-md bg-green-50 dark:bg-gray-700 shadow p-5 h-40 overflow-auto">
        <p class="text-lg"> Name history</p>
        <hr class="mb-2 mt-2">
          <div v-for="(value, index) in userData.name_history.reverse()" v-bind:key="index">
            <p v-on:click="toUser(value.name)" class="cursor-pointer" ><b>{{ userData.name_history.length - index}}. {{ value.name }}</b></p>
            <p>{{ toTimestamp(value.changedToAt) }}</p>
            <!-- <p v-if="value.changedToAt == undefined">Dropping soon</p> -->
          </div>
      </div>

    <div class="userdata rounded-md p-5 bg-blue-100 dark:bg-gray-700 ">
        <p class="text-lg">Heads</p>
        <hr class="mb-2 mt-2">
        WIP
    </div>
    <!-- <div /> -->

      <div class="userdata rounded-md bg-green-50 dark:bg-gray-700 shadow p-5">
        <p class="text-lg">Hypixel stats</p>
        <hr class="mb-2 mt-2">
        <p><b>WIP</b></p>

      </div>

    </div>
    </div>
  </div>
</template>

<script>
import '../index.css'
import api from '../apiHandler.js'
import renderer from "./comps/PlayerModel"

export default {
  // name: 'User',
  components: {
    renderer
  },

  created() {
    console.log(this.$route.params.id)
    api.getUserData(this.$route.params.id).then( userData => {
      this.userData = userData
      // userData.views = userData.views.toString()
      this.show = true
      // if (userData.error == undefined || userData.error == "") {
      //   this.show = true
      // }
    })
  },
  
  watch: {
    $route: function(to) {
      this.show = false
      this.userData = {
        "name": "--",
        "uuid": "--",
        "name_history": [],
        "views": "--"
      }
      api.getUserData(to.params.id).then( userData => {
        this.userData = userData
        
        // if (userData.error == undefined || userData.error == "") {
        //   this.show = true
        // }
        this.show = true
      })
    }
  },

  methods: {
    toTimestamp: function(unix) {
      if (unix == undefined) {
        return
      }
      var date_ob = new Date(unix)
      var year = date_ob.getFullYear()
      var month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
      var date = ("0" + date_ob.getDate()).slice(-2)
      var hours = ("0" + date_ob.getHours()).slice(-2)
      var minutes = ("0" + date_ob.getMinutes()).slice(-2)
      var seconds = ("0" + date_ob.getSeconds()).slice(-2)
      return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    },
    toUser: function(user) {
      console.log(user)
      this.$router.push({
          name: "user",
          params: {"id": user}
      })
    },
    isIllegal() {
      if (this.userData.name == undefined) {
        if (this.$route.params.id < 30) {
          // not a UUID
          return this.userData.name.length > 16 || this.userData.name.length < 3
        } else {
          return false
        }
      } 
      // if (this.userData.name != "--") {
      //   return /^\w{3,16}$/.test(this.userData.name)
      // } 
      return this.userData.name.length > 16 || this.userData.name.length < 3
      // return "invalid"
    }
  },

  data: function() {
    return {
      userData: {
        "name": "--",
        "uuid": "--",
        "name_history": [],
        "views": "--"
      },
      show: false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.userdata {
  text-align: left;
}

img {
  /* width: 80%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>

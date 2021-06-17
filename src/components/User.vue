<template>
  <div class="main">
    <br>
    {{ userData.error }}

    <div v-if="show">
    <!-- <p v-if="userData.error != undefined">
      {{ userData.error }}
    </p> -->
    <div class="grid gap-4 grid-cols-2">

      
      <!-- Skin rendering -->
      <div class="row-span-2 rounded-md bg-gray-50">
        <!-- <renderer :name=userData.uuid /> -->
        Skin: WIP
      </div>

      <!-- User information -->
      <div class="userdata rounded-md bg-green-50 shadow p-5">
        <p class="text-lg">User information</p>
        <hr>
        <p><b>Username</b></p>
        <p>{{ userData.name }}</p>
        <p><b>UUID</b></p>
        <p>{{ userData.uuid }}</p>
        <p><b>Views</b></p>
        <p>{{ userData.views }}</p>
      </div>

      <div class="userdata rounded-md bg-green-50 shadow p-5 h-40 overflow-auto">
        <p class="text-lg"> Name history</p>
        <hr>
          <div v-for="(value, index) in userData.name_history.reverse()" v-bind:key="index">
            <p v-on:click="toUser(value.name)" class="cursor-pointer" ><b>{{ userData.name_history.length - index}}. {{ value.name }}</b></p>
            <p>{{ toTimestamp(value.changedToAt) }}</p>
            <!-- <p v-if="value.changedToAt == undefined">Dropping soon</p> -->
          </div>
      </div>

    <div class="rounded-md bg-blue-50">
      Heads: WIP
    </div>

      <div class="userdata rounded-md bg-green-50 shadow p-5">
        <p class="text-lg">Hypixel stats</p>
        <hr>
        <p><b>WIP</b></p>
        <!-- <p><b>Level</b></p>
        <p>20.5</p>
        <p><b>Rank</b></p>
        <p>VIP</p>
        <p><b>First join</b></p>
        <p>20.06.1990</p> -->
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import '../index.css'
import getUserData from '../apiHandler.js'
// import renderer from "./comps/PlayerModel"

export default {
  // name: 'User',
  components: {
    // renderer
  },

  created() {
    console.log(this.$route.params.id)
    getUserData(this.$route.params.id).then( userData => {
      this.userData = userData
        if (userData.error == undefined || userData.error == "") {
          this.show = true
        }
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
      getUserData(to.params.id).then( userData => {
        this.userData = userData
        if (userData.error == undefined || userData.error == "") {
          this.show = true
        }
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

</style>

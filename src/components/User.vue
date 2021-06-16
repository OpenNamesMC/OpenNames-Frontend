<template>
  <div class="main">
    <br>
    <div class="grid gap-4 grid-cols-2">
      
      <!-- Skin rendering -->
      <div>
        <!-- <renderer :name=user.UUID /> -->
        Skin here soon
      </div>

      <!-- User information -->
      <div class="userdata bg-green-50 shadow p-5">
        <p class="text-lg">User information</p>
        <hr>
        <p><b>Username</b></p>
        <p>{{ user.name }}</p>
        <p><b>UUID</b></p>
        <p>{{ user.UUID }}</p>
        <p><b>Views</b></p>
        <p>{{ user.views }}</p>
      </div>

      <div />

      <div class="userdata bg-green-50 shadow p-5">
        <p class="text-lg"> Name history</p>
        <hr>
          <p><b>3. Flimmerkraft</b></p>
          <p>10.06.20 10:20:30</p>

          <p><b>2. Flimmerkraft</b></p>
          <p>10.06.20 10:20:30</p>

          <p><b>1. Flimmerkraft</b></p>
          <p>10.06.20 10:20:30</p>
      </div>

    </div>
  </div>
</template>

<script>
import '../index.css'
import getUserData from '../apiHandler.js'
// import renderer from "./comps/PlayerModel"

export default {
  name: 'User',
  components: {
    // renderer
  },

  created() {
    console.log(this.$route.params.id)
    getUserData("flimmerkraft").then( user => {
      this.user = user
    })
    console.log(this.user)
  },
  
  data: function() {
    return {
      user: {}
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

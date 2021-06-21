<template>
  <div class="dark:bg-gray-800 relative mx-auto">
    <div class="pb-32">
      <Navbar />
      <router-view />
    </div>
    <!-- <div class="absolute bottom-0 w-full">
      <Footer />
    </div> -->
  </div>
</template>

<script>
// import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

<template>
  <div class="dark:bg-gray-800 relative mx-auto overflow-auto h-full">
      <Navbar />
      <div class="flex-wrapper">
        <router-view />
        <Footer />
      </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}
</style>

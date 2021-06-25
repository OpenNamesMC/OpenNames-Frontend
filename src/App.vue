<template>
  <div class="dark:bg-gray-800 relative mx-auto overflow-auto h-full">
      <Navbar />

      <div class="flex-wrapper">
        <router-view />
        <Footer class="mt-5" />
      </div>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

if (location.hostname.includes('.tiiny.site')) {
  let r =  document.evaluate("/html/body/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
  r.singleNodeValue.parentNode.removeChild(r.singleNodeValue)
}



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

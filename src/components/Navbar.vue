<template>
  <div>
    <div class="bg-gray-200 dark:bg-gray-900 shadow grid grid-cols-3 p-2">
        <div class=" place-items-left p-4 flex">

            <div class="flex flex-cols-1 md:flex-cols-2 items-start cursor-pointer" v-on:click="$router.push('/')">
              <div>
                <img :src="'/LogoDark.png'" class="h-10 object-contain filter invert-0 dark:invert" />
              </div>
              <!-- <div v-else>
                <img src="/Logo.png" class="h-10 object-contain" />
              </div> -->

              <span v-if="showLogoText" class="dark:text-white top text-gray-800 left-0 p-2 font-semibold">
                <b>OpenNames</b>
              </span>
            </div>
        </div>

        <div class="m-auto items-center text-center justify-center">
         <search />
        </div>

      <div class="justify-end p-4 flex">
        <ThemeToggle @changeTheme="toggleLogo"/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './comps/Search.vue'
import ThemeToggle from './comps/ThemeToggle.vue'

export default {
  components: { Search, ThemeToggle },
  data: function() {
    return {
      logoPath: '/LogoDark.png',
      theme: '',
      showLogoText: true,
      windowWidth: window.innerWidth,
    }
  },
  watch: {
    windowWidth: function(newWidth) {
      // console.log(newWidth)
      this.showLogoText = newWidth > 768
    }
  },
  methods: {
    toggleLogo: function(val) {
      console.log(val)
    },

  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    this.showLogoText = window.innerWidth > 768
  },
}
</script>

<style>
.lightLogo {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
</style>



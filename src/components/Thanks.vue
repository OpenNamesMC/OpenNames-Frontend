<template>
  <div class="main">
      <br>
      <p class="text-6xl dark:text-white">
            Thanks!
      </p>
      <br>
      <p class="dark:text-white text-xl">
            This project didn't just magically come into existense. Lots of people worked on it, 
            and we'd like to thank them (sorted alphabetically)
      </p>
        <br>
      <p class="text-4xl dark:text-white">
            Contributors
      </p>
      <br>
      <ul class="dark:text-white">
          <li v-for="(val, index) in contributors" v-bind:key="index">
            <a :href="val.url">
                <b><p>{{ val.name }}</p></b>
            </a>
            <p>{{ val.desc }}</p>
            <br>
          </li>
      </ul>
      <br>
      <p class="text-4xl dark:text-white">
            Other people/projects we need to thank
      </p>
      <br>
      <ul class="dark:text-white">
          <li v-for="(val, index) in libs" v-bind:key="index">
            <a :href="val.url">
                <b><p>{{ val.name }}</p></b>
            </a>
            <p>{{ val.desc }}</p>
            <br>
          </li>
      </ul>


    
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            contributors: [
                {
                    name: "Danktrain",
                    desc: "Our man for cloudflare workers (boooring!). Also worked on the API.",
                    url: "https://github.com/surprise"
                },
                {
                    name: "Deposit",
                    desc: "Worked primarily on the API.",
                    url: "https://github.com/Dep0sit"
                },
                {
                    name: "Peet",
                    desc: "Build this very website, and is a very handsome young man. (Also writing this text)",
                    url: "https://peet.ws"
                }
            ],
            libs: [
                {
                    name: "Skinview3d",
                    desc: "An amazing library for rendering minecraft skins. Go star it on GitHub!",
                    url: "https://github.com/bs-community/skinview3d"
                },
                {
                    name: "WmeLuna",
                    desc: "A very cool person that designed our logo.",
                    url: "https://wmeluna.github.io/"
                },
                {
                    name: "Everyone else that gave tipps or helped",
                    desc: "Quite a few people gave us tipps on how to do things, recommended libraries, said which design looks better, etc. Notable people are Gobbo, Teun and jordan."
                }
            ]
        }
    }
}
</script>

<style scoped>
.main {
    margin-right: 10%;
    margin-left: 10%;
    text-align: left;
}
</style>
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes.js'

// console.log(router)
// App.use(router)
createApp(App).use(router).mount('#app')

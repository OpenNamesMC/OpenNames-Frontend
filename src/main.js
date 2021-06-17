import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes.js'
// import VueClipboard from 'vue-clipboard2'

let app = createApp(App)
app.use(router)
// app.use(VueClipboard)
app.mount('#app')

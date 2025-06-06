import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.min.css'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')

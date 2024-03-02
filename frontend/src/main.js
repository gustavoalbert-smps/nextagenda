import './assets/main.css'
import './axios'
import './index.css'
import 'boxicons/css/boxicons.min.css';

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios"

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
    // important! dont add a $router here
    store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.config.globalProperties.getToken = async function () {
    await axios.get("/sanctum/csrf-cookie");
}

app.mount('#app')

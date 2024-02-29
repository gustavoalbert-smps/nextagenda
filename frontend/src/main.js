import './assets/main.css'
import './axios'
import './index.css'
import 'boxicons/css/boxicons.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios"

const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
app.use(router)

app.config.globalProperties.getToken = async function () {
    await axios.get("/sanctum/csrf-cookie");
}

app.mount('#app')

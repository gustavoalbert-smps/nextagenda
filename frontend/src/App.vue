<script setup>
import Nav from "./components/Nav.vue";
import SideBar from "./components/SideBar.vue";
import Alert from "./components/Alert.vue";
import axios from "axios";

import { RouterView } from "vue-router";
import { useRoute, useRouter } from 'vue-router';

import { ref } from "vue";
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

const showSidebar = ref(true);
const showNavbar = ref(true);
const pathsToHideSideBarAndNav = ["/login","/cadastrar","/go-to-confirmation"];

onMounted(async () => {
    await router.isReady();

    if (pathsToHideSideBarAndNav.includes(route.path)) {
      showSidebar.value = false;
      showNavbar.value = false;
    }
    
    if (!pathsToHideSideBarAndNav.includes(route.path)) {
        try {                
            const login = await axios.get('/api/user');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                if (error.response.data.message == "Unauthenticated.") {
                    showSidebar.value = false;
                    showNavbar.value = false;
                    router.push('/login');
                }
            }
        }
    }     
})
</script>

<template>
  <main>
    <Alert v-if="showAlert" :icon="alertIcon" :type="alertType" :show="showAlert">
        <template #message>{{ alertMessage }}</template>
    </Alert>    
    <SideBar @sidebarToggled="adjustNavBar" v-if="showSidebar"/>
    <Nav v-if="showNavbar" />
    <RouterView @trigger-alert="displayAlert"/>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from "axios";

export default {
    data() {
        return {
            showAlert: false,
            alertMessage: '',
            alertIcon: '',
            alertType: ''
        }
    },
  methods: {
    displayAlert(show,message,alertIcon,alertType) {
        this.alertMessage = message;
        this.alertIcon = alertIcon;
        this.alertType = alertType;
        this.showAlert = show;
    },
    async adjustNavBar() {
      await this.$nextTick();
      let sidebar = document.querySelector('.sidebar'),
        navBar = document.querySelector('#system-nav');

      const screenWidth = window.innerWidth;
      const sidebarWidth = sidebar.classList.contains('open') ? 250 : 78;
      const navBarWidth = screenWidth - sidebarWidth;
      const navBarLeft = sidebarWidth;

      navBar.style.width = navBarWidth + 'px';
      navBar.style.left = navBarLeft + 'px';
      navBar.style.transition = 'all 0.5s ease';
    },
  },
  created() {
    this.adjustNavBar();
  },
};
</script>
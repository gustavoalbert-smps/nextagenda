<script setup>
import Nav from "./components/Nav.vue";
import SideBar from "./components/SideBar.vue";

import { RouterView } from "vue-router";
import { useRoute, useRouter } from 'vue-router';

import { ref } from "vue";
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

const showSidebar = ref(true);
const showNavbar = ref(true);

onMounted(async () => {
  await router.isReady();

  const pathsToHideSideBarAndNav = ["/login","/cadastrar"];
  
  if (pathsToHideSideBarAndNav.includes(route.path)) {
    showSidebar.value = false;
    showNavbar.value = false;
  }
})

</script>

<template>
  <main>
    <SideBar @sidebarToggled="adjustNavBar" v-if="showSidebar"/>
    <Nav v-if="showNavbar" />
    <RouterView />
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  methods: {
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
  mounted() {
    this.adjustNavBar();
  },
};
</script>
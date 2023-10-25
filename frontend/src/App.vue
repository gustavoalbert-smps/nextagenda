<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <main>
    <SideBar @sidebarToggled="adjustNavBar"/>
    <Nav />
    <RouterView />
  </main>
</template>

<script>

export default {
  methods: {
    async adjustNavBar() {
      await this.$nextTick();
      let sidebar = document.querySelector(".sidebar"),
        navBar = document.querySelector("#system-nav");

      const screenWidth = window.innerWidth;
      const sidebarWidth = sidebar.classList.contains("open") ? 250 : 78;
      const navBarWidth = screenWidth - sidebarWidth;
      const navBarLeft = sidebarWidth;

      navBar.style.width = navBarWidth + "px" ;
      navBar.style.left = navBarLeft + "px";
      navBar.style.transition = "all 0.5s ease";
    }
  },
  mounted() {
    this.adjustNavBar();
  },
};
</script>
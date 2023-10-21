<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <main>
    <SideBar />
    <Nav />
    <RouterView />
  </main>
</template>
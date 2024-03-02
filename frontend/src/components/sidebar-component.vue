<template>
  <div class="sidebar fixed left-0 top-0 h-full w-78-px bg-theme-dark-blue">
    <div class="logo-details flex relative items-center">
      <img
        src="../assets/nextagenda-icon.svg"
        alt="logo Image"
        class="icon"
        width="62px"
      />
      <div class="logo_name">NEXTAGENDA</div>
      <i class="bx bx-menu" id="sidebar-menu"></i>
    </div>
    <ul class="nav-list">
      <li>
        <RouterLink class="dashboard_link" :to="{name: 'home'}">
          <i class="bx bx-grid-alt"></i>
          <span class="sblink_name">Dashboard</span>
        </RouterLink>
        <span class="tooltip">Dashboard</span>
      </li>
      <!-- <li>
        <RouterLink class="dashboard_link" :to="{name: 'Agenda'}">
          <i class="bx bxs-calendar"></i>
          <span class="sblink_name">Agendas</span>
        </RouterLink>
        <span class="tooltip">Agendas</span>
      </li> -->
      <li class="profile">
        <div class="profile-details">
          <img src="" alt="Profile Image" />
          <div class="name_job">
            <div class="name"></div>
            <div class="job"></div>
          </div>
        </div>
        <a @click.prevent="userStore.logout"><i class="bx bx-log-out" id="log_out"></i></a>        
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue';

import { useUserStore } from '../stores/userStore';

export default defineComponent({
    name: 'sidebar-component',
    setup() {
        const userStore = useUserStore();
        
        return {
            userStore
        }
    },
    mounted() {
        let sidebar = document.querySelector(".sidebar"), closeBtn = document.querySelector("#sidebar-menu");
        closeBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            this.$emit("sidebarToggled");
            menuBtnChange();
        });
        function menuBtnChange() {
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            }
            else {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        }
    },
    components: { RouterLink }
});
</script>

<style>

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open {
  width: 250px;
}
.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .icon {
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}
.sidebar .logo-details #sidebar-menu {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details #sidebar-menu {
  text-align: right;
}
.sidebar i {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .nav-list {
  margin-top: 20px;
  height: 100%;
}
.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip {
  color: #11101d;
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}
.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip {
  display: none;
}
.sidebar input {
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #1d1b31;
}
.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #11101d;
}

.sidebar li a:hover {
  background: #fff;
}
.sidebar li a .sblink_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .sblink_name {
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .sblink_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: #11101d;
}
.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar li.profile {
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: #1d1b31;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.open li.profile {
  width: 250px;
}
.sidebar li .profile-details {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.sidebar li img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}
.sidebar li.profile .name,
.sidebar li.profile .job {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}
.sidebar li.profile .job {
  font-size: 12px;
}
.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1d1b31;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}
.sidebar.open .profile #log_out {
  width: 50px;
  background: none;
}
.home-section {
  position: relative;
  background: #e4e9f7;
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}
.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}
.home-section .text {
  display: inline-block;
  color: #11101d;
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
}
@media (max-width: 420px) {
  .sidebar li .tooltip {
    display: none;
  }
}
</style>

<style lang="scss">
$tod-tri: #ff00ff;

.dashboard_link:hover {
  filter: drop-shadow(0px 0px 10px $tod-tri) drop-shadow(-1px -1px 10px $tod-tri);
}
</style>
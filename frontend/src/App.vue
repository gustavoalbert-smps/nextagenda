

<template>
  <main>
    <AlertComponent v-if="showAlert" :icon="alertIcon" :type="alertType" :show="showAlert">
        <template #message>{{ alertMessage }}</template>
    </AlertComponent>    
    <SidebarComponent @sidebarToggled="adjustNavBar" v-if="showSidebar"/>
    <NavComponent v-if="showNavbar" :user="user" />
    <RouterView @trigger-alert="displayAlert" @sendUser="setUser" @adjustNavBar="adjustNavBar"/>
  </main>
</template>

<script>
import { ref, onMounted, provide, nextTick, watch } from 'vue';
import { RouterView } from "vue-router";
import { useRoute, useRouter } from 'vue-router';
import axios from "axios";

import { useUserStore } from './stores/userStore';

import AlertComponent from './components/alert-component.vue';
import SidebarComponent from './components/sidebar-component.vue';
import NavComponent from './components/nav-component.vue';

export default {
    setup() {
        const route = useRoute(),
            router = useRouter(),
            showSidebar = ref(true),
            showNavbar = ref(true),
            userStore = useUserStore(),
            pathsToHideSideBarAndNav = ["/login", "/cadastrar", "/go-to-confirmation"];

        let showAlert = ref(false), alertMessage = ref(''), alertIcon = ref(''), alertType = ref(''), user = ref(null);

        onMounted(async () => {
            await router.isReady();

            if (pathsToHideSideBarAndNav.includes(route.path)) {
                showSidebar.value = false;
                showNavbar.value = false;
            }
            else {
                adjustNavBar();
            }

            if (!pathsToHideSideBarAndNav.includes(route.path)) {
                try {
                    const login = await axios.get('/api/user');
                }
                catch (error) {
                    if (error.response && error.response.status === 401) {
                        if (error.response.data.message == "Unauthenticated.") {
                            showSidebar.value = false;
                            showNavbar.value = false;
                            router.push('/login');
                        }
                    }
                }
            }
        });

        watch(() => userStore.user, (user) => {
            if (user == null) {
                showSidebar.value = false;
                showNavbar.value = false;
            } else {
                showSidebar.value = true;
                showNavbar.value = true;
            }
        })

        const adjustNavBar = async () => {
            await nextTick();
            let sidebar = document.querySelector('.sidebar'),
                navBar = document.querySelector('#system-nav'),
                avoidSideBar = document.querySelectorAll('.avoid-sidebar');

            const screenWidth = window.innerWidth;
            const sidebarWidth = sidebar.classList.contains('open') ? 250 : 78;
            const navBarWidth = screenWidth - sidebarWidth;
            const navBarLeft = sidebarWidth;

            navBar.style.width = navBarWidth + 'px';
            navBar.style.left = navBarLeft + 'px';
            navBar.style.transition = 'all 0.5s ease';

            avoidSideBar.forEach(element => {
                let contentPadding = 40,
                    leftSpacing = navBarLeft + contentPadding,
                    widthSpacing = navBarWidth - (2*contentPadding);

                element.style.position = 'absolute';
                element.style.width = widthSpacing + 'px';
                element.style.left = leftSpacing + 'px';
                element.style.transition = 'all 0.5s ease';
            });
        };

        const displayAlert = (show, message, alertIcon, alertType) => {
            alertMessage.value = message;
            alertIcon.value = alertIcon;
            alertType.value = alertType;
            showAlert.value = show;
        };

        const setUser = (data) => {
            user.value = data;
        }

        provide('sidebar', showSidebar);
        provide('navbar', showNavbar);

        return {
            showSidebar,
            showNavbar,
            showAlert,
            alertMessage,
            alertIcon,
            alertType,
            user,
            adjustNavBar,
            displayAlert,
            setUser
        };
    },
    components: { AlertComponent, SidebarComponent, NavComponent }
};
</script>
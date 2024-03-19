

<template>
  <main>
    <AlertComponent v-if="showAlert" :icon="alertIcon" :type="alertType" :show="showAlert">
        <template #message>{{ alertMessage }}</template>
    </AlertComponent>    
    <SidebarComponent @sidebarToggled="adjustNavBar" v-if="showSidebar"/>
    <NavComponent v-if="showNavbar" :user="user" />
    <RouterView @trigger-alert="displayAlert" @displayAlert="displayAlert" @sendUser="setUser" @adjustNavBar="adjustNavBar"/>
  </main>
</template>

<script>
import { ref, onMounted, nextTick, watch } from 'vue';
import { RouterView } from "vue-router";
import { useRoute, useRouter } from 'vue-router';

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
            } else {
                adjustNavBar();
            }

            try {
                await userStore.getUser();
                
                if (pathsToHideSideBarAndNav.includes(route.path)) {
                    if (userStore.user) router.push('/');
                } else {
                    if (!userStore.user) router.push('/login');
                }
            } catch (error) {
                if (error.response && error.response.status === 401 && !pathsToHideSideBarAndNav.includes(route.path)) {
                    if (error.response.data.message == "Unauthenticated.") {
                        showSidebar.value = false;
                        showNavbar.value = false;
                        router.push('/login');
                    }
                }
            }            
        });

        watch(() => userStore.user, (user) => {
            if (user == null || user == '') {
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
                avoidSideBar = document.querySelectorAll('.avoid-sidebar'),
                boxMinHeight = document.querySelectorAll('.box-min-height');

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const sidebarWidth = sidebar.classList.contains('open') ? 250 : 78;
            const navBarWidth = screenWidth - sidebarWidth;
            const navBarHeight = navBar.offsetHeight;
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

            boxMinHeight.forEach(element => {
                let height = navBarHeight + 40;
                element.style.top =  height + 'px' ;
            });
        };

        const displayAlert = (show, message, icon, type) => {
            alertMessage.value = message;
            alertIcon.value = icon;
            alertType.value = type;
            showAlert.value = show;
        };

        const setUser = (data) => {
            user.value = data;
        }

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
    components: { AlertComponent, SidebarComponent, NavComponent, RouterView }
};
</script>
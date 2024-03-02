<script>
    import { defineComponent } from 'vue';
    import { useUserStore } from '../stores/userStore';

    export default defineComponent({
        name: 'nav-component',
        props: ['user'],
        setup() {
            const userStore = useUserStore();
            
            return {
                userStore
            }
        }
    })
</script>

<template>
    <nav id="system-nav" class="flex items-center bg-theme-dark-blue p-6 w-screen">
        <div class="flex flex-row justify-between w-full">
            <div class="lg:w-96 md:w-64 mx-auto">
                <div class="relative rounded-md shadow-sm w-full">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i class='bx bx-search text-zinc-900'></i>
                    </div>
                    <input type="text" name="nav-search" id="nav-search"
                        class="block w-full rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Pesquisar">
                </div>
            </div>
            <div class="w-44 flex items-center">
                <p class="w-80 text-white">{{user?.first_name}}</p>
                <button @click="userStore.logout"
                    type="submit" class="w-20 rounded bg-theme-light-blue px-1 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl hover:bg-theme-light-blue focus:outline-none focus:ring">
                    <i class="bx bx-log-out"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<style>
nav {
    position: absolute;
    top: 0;
    left: 78px;
}


</style>
<template>
    <div>
        <div class="overflow-auto w-3/4 max-w-4xl md:max-2xl:max-w-5xl -translate-y-1/2 -translate-x-1/2 p-6 bg-white rounded-3xl fixed z-10 mx-auto text-center md:top-0 md:right-0 md:left-auto md:translate-x-0 md:translate-y-0 md:m-0 md:h-full sm:max-md:w-3/4 lg:w-1/3 md:rounded-none">
            <p class="font-semibold text-base md:max-lg:text-3xl sm:max-md:text-xl lg:text-5xl text-gray-900">Cadastrar</p>
            <img class="sm:max-md:mb-0 md:mb-5 md:w-40 w-28 aspect-square object-cover mx-auto" src="../assets/nextagenda-icon.svg" alt="Nextagenda Icon">
            <form class="grid gap-5 place-items-center w-full m-0" @submit.prevent="submitForm">
                <div class="space-y-2 md:w-10/12 md:space-y-5">
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.login" type="text" name="login" placeholder="Login" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600">
                    </div>
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.password" type="password" name="password" placeholder="Senha" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600" placeholder:text-gray-600>
                    </div>
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.password_confirmation" type="password" name="password_confirmation" placeholder="Confirmar senha" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600" placeholder:text-gray-600>
                    </div>
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.name" type="text" name="name" placeholder="Nome" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600">
                    </div>
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.birth" type="date" name="birth" placeholder="Data de nascimento" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600">
                    </div>
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.email" type="text" name="email" placeholder="E-mail" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600">
                    </div>                
                </div>

                <button type="submit" class="inline-block w-9/12 md:static lg:bottom-8 lg:fixed rounded bg-theme-dark-blue px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl hover:bg-theme-light-blue focus:outline-none focus:ring">
                    Registrar-se
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import App from '../App.vue';
import axios from "axios";
import {useUserStore} from '../stores/userStore.js';

export default {
    components: {
        App
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                login: '',
                password: '',
                password_confirmation: '',
                birth: ''
            }
        };
    },
    methods: {        
        async submitForm() {
            try {
                await this.getToken();
                const response = await axios.post("/register", this.formData);

                useUserStore().setUser(response.data);

                this.$router.push('/go-to-confirmation');
            } catch (error) {
                console.error('Erro ao enviar dados:', error);
            }
        }
    }
};
</script>

<style scoped>
    input, button {
        height: 56px;
        /* width: 100%; */
        border-radius: 10px;
        outline: none;
    }
</style>
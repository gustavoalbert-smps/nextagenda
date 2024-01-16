<template>
    <div>
        <div class="max-w-3xl -translate-y-1/2 -translate-x-1/2 p-6 bg-white rounded-3xl fixed z-10 mx-auto text-center md:top-0 md:right-0 md:left-auto md:translate-x-0 md:translate-y-0 md:m-0 md:h-full md:w-1/3 md:rounded-none sm:w-2/3">
        <p class="font-semibold text-5xl text-gray-900 !important">Cadastrar</p>
        <img class="w-40 aspect-square object-cover mb-5 mx-auto" src="../assets/nextagenda-icon.svg" alt="Nextagenda Icon">
        <form id="login-form" class="grid gap-5 place-items-center w-full m-0">
            <div class="space-y-2">
                <div class="rounded-md sm:max-w-md">
                    <input type="text" name="login" placeholder="Login" class="bg-gray-300 text-gray-800 placeholder:text-gray-600">
                </div>
                <div class="rounded-md sm:max-w-md">
                    <input type="password" name="password" placeholder="Senha" class="bg-gray-300 text-gray-800 placeholder:text-gray-600" placeholder:text-gray-600>
                </div>
                <div class="rounded-md sm:max-w-md">
                    <input type="password" name="password_confirmation" placeholder="Confirmar senha" class="bg-gray-300 text-gray-800 placeholder:text-gray-600" placeholder:text-gray-600>
                </div>
                <div class="rounded-md sm:max-w-md">
                    <input type="date" name="birth" placeholder="Data de nascimento" class="bg-gray-300 text-gray-800 placeholder:text-gray-600">
                </div>
                <div class="rounded-md sm:max-w-md">
                    <input type="text" name="email" placeholder="E-mail" class="bg-gray-300 text-gray-800 placeholder:text-gray-600">
                </div>
            </div>
            <!-- <button></button> -->
        </form>
        </div>
    </div>
</template>

<script>
import App from '../App.vue';

export default {
    components: {
        App
    }
};
</script>

<style scoped>
    input, button {
        height: 56px;
        width: 100%;
        border-radius: 10px;
        outline: none;
    }
</style>
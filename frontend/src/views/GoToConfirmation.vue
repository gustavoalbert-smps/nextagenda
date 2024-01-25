<script setup>
    import {useUserStore} from '../stores/userStore.js';

    const userStore = useUserStore();
    const user = userStore.showPropiertys.data;
</script>

<template>
    <div>
        <section class="bg-stone-100 text-theme-dark-text rounded-md">
            <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-5/6 lg:items-center">
                <div class="mx-auto max-w-3xl text-center">
                <h1
                    class="bg-gradient-to-r from-theme-yellow via-theme-redwood to-theme-violet bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                    Olá, {{ user.name }}

                    <span class="sm:block"> Estamos quase lá. </span>
                </h1>

                <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    Agora você só precisar confirmar o seu cadastro para poder começar a usar o NextAgenda. Por favor, verifique a caixa de entrada do seu e-mail e realize a confirmação da sua conta.
                </p>

                <p class="text-center text-gray-700 text-sm font-medium mt-3">
                    Não recebeu o e-mail ? Clique para reenviar logo abaixo.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    class="block w-full rounded border border-theme-light-blue bg-theme-dark-blue px-12 py-3 text-sm font-medium text-white hover:bg-theme-light-blue hover:text-theme-dark-text focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="/get-started"
                    >
                    Reenviar e-mail
                    </a>

                    <a
                    class="block w-full rounded border border-theme-light-blue px-12 py-3 text-sm font-medium text-theme-dark-text hover:bg-theme-light-blue focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="/about" title="Já realizou a confirmação da sua conta?"
                    >
                    Conta verificada
                    </a>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <div class="max-w-3xl -translate-y-1/2 -translate-x-1/2 p-6 bg-white rounded-3xl fixed z-10 mx-auto text-center md:top-0 md:right-0 md:left-auto md:translate-x-0 md:translate-y-0 md:m-0 md:h-full md:w-1/3 md:rounded-none md:pt-60 sm:w-2/3">
      <img class="w-40 aspect-square object-cover mb-5 mx-auto" src="../assets/nextagenda-icon.svg" alt="Nextagenda Icon">
      <h3 class="mb-2 font-medium text-base text-gray-500">Bem vindo ao Nextagenda</h3>
      <h2 class="text-4xl font-semibold mb-8 text-gray-900">Nome</h2>
      <form id="login-form" class="grid gap-5 place-items-center w-full m-0">
        <div class="space-y-2">
          <div class="rounded-md sm:max-w-md">
            <input type="text" placeholder="Login" class="bg-gray-300 text-gray-800 placeholder:text-gray-600">
          </div>
          <div class="rounded-md sm:max-w-md">
            <input type="password" placeholder="Senha" class="bg-gray-300 text-gray-800 placeholder:text-gray-600" placeholder:text-gray-600>
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
  padding: 0;
  border-radius: 10px;
  outline: none;
}
</style>
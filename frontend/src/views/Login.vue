<template>
  <div>
    <div class="max-w-3xl -translate-y-1/2 -translate-x-1/2 p-6 bg-white rounded-3xl fixed z-10 mx-auto text-center md:top-0 md:right-0 md:left-auto md:translate-x-0 md:translate-y-0 md:m-0 md:h-full md:w-1/3 md:rounded-none md:pt-60 sm:w-2/3">
      <p class="font-semibold text-5xl text-gray-900 !important">Entrar</p>
      <img class="w-40 aspect-square object-cover mb-5 mx-auto" src="../assets/nextagenda-icon.svg" alt="Nextagenda Icon">
      <div class="login-welcome-box" :class="{hidden: hiddenElements}">
        <h3 class="mb-2 font-medium text-base text-gray-500">Bem vindo ao Nextagenda</h3>
        <h2 class="text-4xl font-semibold mb-8 text-gray-900">{{name}}</h2>
      </div>
      <form id="login-form" class="grid gap-5 place-items-center w-full m-0" @keydown.enter="submitForm">
        <div class="space-y-2">
          <div class="rounded-md sm:max-w-md">
            <input v-model="credentials.type" name="type" @change="searchUser(credentials.type)" type="text" placeholder="Login" class="bg-gray-300 text-gray-800 placeholder:text-gray-600">
          </div>
          <div class="rounded-md sm:max-w-md div-password" :class="{hidden: hiddenElements}">
            <input v-model="credentials.password" name="password" type="password" placeholder="Senha" class="bg-gray-300 text-gray-800 placeholder:text-gray-600" placeholder:text-gray-600>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import App from '../App.vue';
import axios from "axios";
import { defineComponent, ref, reactive, inject} from "vue";
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Login',
    components: {
        App
    },
    emits: ['displayAlert'],
    setup(_, { emit }) {
        const router = useRouter();

        let hiddenElements = ref(true),
            name = ref(''),
            credentials = reactive({
                type: '',
                password: ''
            });

        const submitForm = async () => {
            try {
                const response = await axios.post("/login", {
                    type: credentials.type,
                    password: credentials.password
                }, {headers: {
                    'Content-Type': 'application/json'
                }}).then(() => {
                    router.push('/');
                });
            } catch (error) {
                if (error.response.data != undefined && error.response.data.erros != undefined)
                    triggerAlert(true,error.response.data.errors.message[0],'bx bx-error','alert-danger');
                else
                    triggerAlert(true,'Ocorreu um erro ao logar/redirecionar na sua sessão.','bx bx-error','alert-danger');
            }
        }

        const searchUser = async () => {
            try {
                await axios.get("/sanctum/csrf-cookie").then(async () => {
                    const response = await axios.post("/api/search-user", credentials);
                    if (response.data.data != null) {
                        hiddenElements.value = false;
                        name.value = response.data.data;
                    } else {
                        hiddenElements.value = true;
                    }
                });
            } catch (error) {
                triggerAlert(true,error.response.data.message,'bx bx-error','alert-danger');
            }
        }

        const triggerAlert = function (status,message,icon,type) {
            emit('displayAlert',status,message,icon,type);
        }

        return {
            hiddenElements,
            name,
            credentials,
            submitForm,
            searchUser
        };
    }
});

</script>

<style scoped>
input, button {
  height: 56px;
  width: 100%;
  border-radius: 10px;
  outline: none;
}
</style>
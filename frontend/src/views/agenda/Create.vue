<template>
    <boxComponent :title="'Criar Agenda'" :titleIcon="'bx bxs-calendar'">
        <div class="overflow-auto w-2/4 p-6 bg-white rounded-3xl z-10 mx-auto text-center md:top-0 ">
            <form class="grid gap-5 place-items-center w-full m-0" @submit.prevent="submitForm">
                <div class="space-y-2 w-full md:space-y-5">                    
                    <div class="rounded-md sm:max-md:max-w-md">
                        <input v-model="formData.name" type="text" name="name" placeholder="Nome" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600">
                    </div>
                    <div class="rounded-md">
                        <label for="membros" class="block mb-2 text-sm font-medium text-gray-900 float-left">Selecione os membros</label>
                        <select multiple v-model="formData.membros" class="w-full bg-gray-300 text-gray-800 placeholder:text-gray-600">
                            <option v-for="option in options" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </div>
                </div>

                <button type="submit" class="w-9/12 rounded bg-theme-dark-blue px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl hover:bg-theme-light-blue focus:outline-none focus:ring">
                    Registrar-se
                </button>
            </form>
        </div>
    </boxComponent>
</template>

<script>
    import { onMounted, reactive, ref } from 'vue';

    import boxComponent from '../../components/box-component.vue';
    import { useAgendaStore } from '../../stores/agendaStore';

    export default {
        emits: ['adjustNavBar','displayAlert'],
        setup(_, { emit }) {
            const agendaStore = useAgendaStore();

            const formData = reactive({
                name: null,
                membros: []
            });

            const options = ref([]);

            const submitForm = async () => {
                await agendaStore.store({
                    name: formData.name,
                    membros: formData.membros
                });
            };

            onMounted(async () => {
                emit('adjustNavBar');

                try {
                    await agendaStore.getFormInfo();
                    options.value = agendaStore.membros.map(member => {
                        return { label: member.label, value: member.value };
                    });   
                } catch (error) {
                    if (error.response != undefined && error.response.data != undefined && error.response.data.message != undefined)
                        emit('displayAlert',true,error.response.data.message,'bx bx-error','alert-danger');
                    else
                        emit('displayAlert',true,'Ocorreu um erro ao carregar a página.','bx bx-error','alert-danger');
                }
            });

            return {
                formData,
                options,
                submitForm
            };
        },        
        components: {boxComponent}
    }
</script>

<style lang="scss" scoped>

</style>
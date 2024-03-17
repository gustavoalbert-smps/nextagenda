<script setup>
    import { ref, onMounted, defineEmits, reactive } from "vue";
    import { useUserStore } from '../stores/userStore';
    import { useAgendaStore } from "../stores/agendaStore";

    import boxComponent from "../components/box-component.vue";

    import cardAgenda from "../components/card-agenda.vue";

    const userStore = useUserStore();
    const agendaStore = useAgendaStore();
    const emit = defineEmits(['sendUser','adjustNavBar']);

    const agendas = ref([]);
    const sharedAgendas = ref([]);
    const links = reactive([
                {
                    route: {name: 'agenda-create'},
                    icon: 'bx bx-calendar-plus',
                    button: 'bg-button-green border-button-green-border text-white px-2 py-1 hover:text-theme-dark-text'
                }
            ]);

    onMounted(async () => {
        await userStore.getUser();

        emit('sendUser',userStore.user);
        emit('adjustNavBar');

        await agendaStore.getAgendas().then(() => {
            agendas.value = agendaStore.agendas;
            sharedAgendas.value = agendaStore.sharedAgendas;
        });
    })
</script>

<template>
    <boxComponent :title="'Suas Agendas'" :titleIcon="'bx bxs-calendar'" :links="links">
        <div v-for="(agenda, index) in agendas" :key="index" class="grid gap-4 grid-cols-4">
            <cardAgenda :agenda="agenda" />
        </div>
        <template #secondBox>
            <div class="mt-4">
                <div class="box-title flex justify-between items-center text-xl">
                    <h1 class="text-black font-bold my-4"><i class="bx bxs-calendar"></i> Agendas compartilhadas com você</h1>
                </div>
                <hr />
                <div v-for="(sharedAgenda, index) in sharedAgendas" :key="index" class="grid gap-4 grid-cols-4">
                    <cardAgenda :agenda="sharedAgenda" />
                </div>
                <div v-if="sharedAgendas.length == 0">
                    <h1 class="text-2xl text-gray-500 text-center mt-4">Você não possui nenhuma agenda compartilhada.</h1>
                </div>
            </div>
        </template>
        <div v-if="agendas.length == 0">
            <h1 class="text-2xl text-gray-500 text-center mt-4">Você ainda não cadastrou nenhuma agenda.</h1>
        </div>
    </boxComponent>
</template>
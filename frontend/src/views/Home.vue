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
    const links = reactive({
                0: {
                    route: {name: 'create-agenda'},
                    icon: 'bx bx-calendar-plus',
                    button: 'bg-button-green border-button-green-border text-white px-2 py-1 hover:text-theme-dark-text'
                }
            });

    onMounted(async () => {
        await userStore.getUser();

        emit('sendUser',userStore.user);
        emit('adjustNavBar');

        await agendaStore.getAgendas();

        if (agendaStore.agendas != null) {
            agendas.value = agendaStore.agendas;
        } else {
            agendas.value = [{
                lastEventTitle: "teste",
                lastEventDescription: "teste descricao",
                name: "Agenda 1",
                username: "Gustavo Albert"
            }];
        }
    })
</script>

<template>
    <boxComponent :title="'Suas Agendas'" :titleIcon="'bx bxs-calendar'" :links="links">
        <div v-for="(agenda, index) in agendas" :key="index" class="grid gap-4 grid-cols-4">
            <cardAgenda :lastEventTitle="agenda.lastEventTitle"
                         :lastEventDescription="agenda.lastEventDescription"
                         :name="agenda.name"
                         :username="agenda.username" />
        </div>
    </boxComponent>
</template>
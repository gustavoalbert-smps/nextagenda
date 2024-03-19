<template>
    <boxComponent class="mb-4" :title="agenda.value?.name" :titleIcon="'bx bxs-calendar-alt'" :links="links">
        <calendarComponent class="m-4"></calendarComponent>
    </boxComponent>
</template>

<script>
import boxComponent from '../../components/box-component.vue';
import calendarComponent from '../../components/calendar-component.vue';

import { useRoute } from 'vue-router';
import { ref, reactive, onMounted } from "vue";
import { useAgendaStore } from '../../stores/agendaStore';

export default {
    setup () {
        const route = useRoute();
        const agendaStore = useAgendaStore();
        
        const links = reactive([
                // {
                //     route: {name: 'agenda-delete'},
                //     icon: 'bx bx-calendar-plus',
                //     button: 'bg-button-red border-button-red-border text-white px-2 py-1 hover:text-theme-dark-text'
                // }
            ]);
        const agenda = reactive({});

        onMounted(async () => {

            await agendaStore.getAgenda(route.params.id)
            .then(() => {
                agenda.value = agendaStore.agenda;
            });

        })

        return {
            links,
            agenda
        }
    },
    components: {
        boxComponent, calendarComponent
    }
}
</script>

<style lang="scss" scoped>

</style>
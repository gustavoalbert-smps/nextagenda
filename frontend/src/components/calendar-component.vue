<template>
    <div>
        <FullCalendar :options="calendarOptions" >
            <template v-slot:eventContent='arg'>
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
            </template>
        </FullCalendar>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                locale: 'pt-br',
                plugins: [dayGridPlugin, interactionPlugin,timeGridPlugin],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                initialEvents: [
                    { id: 1, title: 'event 1', date: new Date().toISOString().replace(/T.*$/, '') },
                    { id: 2, title: 'event 2', date: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00' }
                ],
                editable: true,
                selectable: true,
                selectMirror: true,
                views: {
                    
                },
                buttonText: {
                    today: 'Hoje',
                    month: 'Mês',
                    week:  'Semana',
                    day:   'Dia',
                    allDay: 'Dia Inteiro'
                }
            }
        }
    },
    methods: {
        handleDateClick: function (arg) {
            alert('date click! ' + arg.dateStr)
        }
    },
})
</script>

<style lang="css">
    .fc-toolbar-title {
        color: #000;
    }

    .fc-view-harness {
        color: #000;
    }
</style>
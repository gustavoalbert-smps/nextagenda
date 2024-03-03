import { defineStore } from "pinia";
import axios from "axios";

export const useAgendaStore = defineStore('agenda', {
    state() {
        return {
            agendas: null,
            sharedAgendas: null
        }
    },
    actions: {
        setAgendas(data) {
            this.agendas = data.agendas;
            this.sharedAgendas = data.sharedAgendas;
        },
        async getAgendas() {
            const response = await axios.get('/agenda',{headers: {'Content-Type': 'application/json'}});
            this.setAgendas(response.data);
        }
    }
});
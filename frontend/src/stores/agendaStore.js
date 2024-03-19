import { defineStore } from "pinia";
import axios from "axios";

export const useAgendaStore = defineStore('agenda', {
    state() {
        return {
            agendas: null,
            sharedAgendas: null,
            membros: null,
            agenda: null
        }
    },
    actions: {
        setAgendas(data) {
            this.agendas = data.agendas;
            this.sharedAgendas = data.sharedAgendas;
        },
        setFormInfo(data) {
            this.membros = data.membros;
        },
        setAgenda(data) {
            this.agenda = data;
        },
        async getAgendas() {
            const response = await axios.get('/api/agenda',{headers: {'Content-Type': 'application/json'}});
            this.setAgendas(response.data.data);
        },
        async getFormInfo() {
            const formInfo = await axios.get('/api/agenda/form-info',{headers: {'Content-Type': 'application/json'}});
            this.setFormInfo(formInfo.data.data);
        },
        async getAgenda(id) {
            await axios.get(`/api/agenda/${id}`,{headers: {'Content-Type': 'application/json'}}).then((response) => {
                this.setAgenda(response.data.data);
            });
        },
        async store(data) {
            await axios.post("/api/agenda", {
                name: data.name,
                membros: data.membros
            }, {headers: {'Content-Type': 'application/json'}})
            .then((response) => {
                this.router.push('/');
            });
        }
    }
});
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: null
        }
    },
    actions: {
        setUser(data) {
            this.user = data;
        },
        async getUser() {
            const login = await axios.get('/api/user',{headers: {'Content-Type': 'application/json'}});
            this.user = login.data;
        }
    },
    getters: {
        showPropiertys() {
            return this.user;
        }
    }
})
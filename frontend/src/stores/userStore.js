import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: {}
        }
    },
    actions: {
        setUser(data) {
            this.user = data;
        }
    },
    getters: {
        showPropiertys() {
            return this.user;
        }
    }
})
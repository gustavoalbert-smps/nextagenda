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
        },
        async logout() {
            await axios.post('/logout');
            this.user = null;
            this.router.push({name: "login"});

            // const navigationResult = await this.router.push('/')

            // if (navigationResult) {
            //     console.log('erro de redirecionamento: ' + navigationResult)
            // }
        }
    },
    getters: {
        showPropiertys() {
            return this.user;
        }
    }
})
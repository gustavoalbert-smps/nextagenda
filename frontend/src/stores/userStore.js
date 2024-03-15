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
        async login(credentials) {
            await axios.post("/login", {
                type: credentials.type,
                password: credentials.password
            }, {headers: {
                'Content-Type': 'application/json'
            }}).then(() => {
                this.router.push('/');
            });
        },
        async logout() {
            await axios.post('/logout');
            this.user = null;
            this.router.push({name: "login"});
        }
    },
    getters: {
        showPropiertys() {
            return this.user;
        }
    }
})
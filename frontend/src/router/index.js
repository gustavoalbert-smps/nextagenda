import { createRouter, createWebHistory} from "vue-router"

import Home from "../views/Home.vue";

const routes = [
    { path: '/', name: "home", component: Home},
    { path: '/login', name: "login", component: () => import("../views/Login.vue")},
    { path: '/cadastrar', name: "cadastrar", component: () => import("../views/Register.vue")},
    { path: '/go-to-confirmation', name: "goToConfirmation", component: () => import("../views/GoToConfirmation.vue")},
    { path: '/agenda/create', name: "agenda-create", component: () => import("../views/agenda/Create.vue")},
    { path: '/agenda/show/:id', name: "agenda-show", component: () => import("../views/agenda/Show.vue")},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // Converta o caminho da rota para minúsculas
    to.path = to.path.toLowerCase();
    next();
});

export default router;
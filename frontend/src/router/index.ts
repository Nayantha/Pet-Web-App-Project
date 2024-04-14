import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "",
        name: "Home Page",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/login",
        name: "Login Page",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/register",
        name: "Register Page",
        component: () => import("@/views/Register.vue")
    },
];
const route = createRouter({
    history: createWebHistory(),
    routes
});
export default route
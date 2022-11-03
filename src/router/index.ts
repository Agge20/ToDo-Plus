import { createRouter, createWebHistory } from "vue-router";

// views
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import BoardView from "../views/BoardView.vue";
import CreateTodo from "../views/CreateTodoView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "boardView",
            component: BoardView,
        },
        {
            path: "/login",
            name: "loginView",
            component: LoginView,
        },
        {
            path: "/register",
            name: "registerView",
            component: RegisterView,
        },
        {
            path: "/create-todo",
            name: "createTodoView",
            component: CreateTodo,
        },
    ],
});

export default router;

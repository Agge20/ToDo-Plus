import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";

// Tailwind import
import "./assets/css/tailwind.css";

createApp(App).use(router).use(store).mount("#app");

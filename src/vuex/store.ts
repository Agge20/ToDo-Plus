import { ref, watchEffect } from "vue";
import { createStore } from "vuex";

// firebase imports

const store = createStore({
    // global state
    state: {
        user: null,
        authIsReady: false,
        test: "Hello World",
    },
    // to change/update/mutate state
    mutations: {},
    // to run async-functions code, (here we destructure the payload)
    actions: {},
});

// export store
export default store;

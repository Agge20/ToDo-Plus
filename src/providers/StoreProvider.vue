<template>
    <slot v-if="authIsReady" />
</template>

<script lang="ts">
    import { defineComponent, provide, ref } from "vue";
    import StoreKey from "../symbols/StoreSymbol";

    // firebase
    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "../firebase/firebase";

    // types and interfaces
    import type Store from "../interfaces/Store";

    export default defineComponent({
        setup() {
            const store = ref<Store>({
                user: {},
            });

            const authIsReady = ref<boolean>(false);

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    store.value.user = user;
                    authIsReady.value = true;
                } else {
                    store.value.user = null;
                    authIsReady.value = true;
                }
            });
            provide(StoreKey, store);

            const lorem = () => {
                console.log("lorem...");
            };

            return {
                authIsReady,
                lorem,
            };
        },
    });
</script>

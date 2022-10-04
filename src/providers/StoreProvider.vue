<template>
    <slot />
</template>

<script lang="ts">
    import { defineComponent, provide, ref, watchEffect } from "vue";
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

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    store.value.user = user;
                    console.log("here is the new user: ", store.value.user.currentUser);
                }
            });
            provide(StoreKey, store);

            watchEffect(() => {
                console.log("Store value changed: ", store.value.user);
            });
        },
    });
</script>

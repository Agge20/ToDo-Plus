<template>
    <section>
        <welcome :username="username" />
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";

    // firebase imports
    import { auth } from "../firebase/firebase";
    import type { Auth } from "firebase/auth";

    // composables
    import injectStrict from "../composables/injectStrict";

    // types and interfaces
    import StoreKey from "../symbols/StoreSymbol";

    // components
    import Welcome from "../components/board/Welcome.vue";

    export default defineComponent({
        components: { Welcome },
        setup() {
            const store = injectStrict(StoreKey);

            const user = ref<Auth>(auth);
            let username = ref<string>("");

            if (user.value.currentUser?.displayName) {
                username.value = user.value.currentUser?.displayName;
            }

            return {
                username,
            };
        },
    });
</script>

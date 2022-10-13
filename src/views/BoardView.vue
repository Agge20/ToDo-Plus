<template>
    <section :class="[sectionClass]">
        <welcome :username="username" :show-welcome="showWelcome" />
        <todos v-if="showTodos" />
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref, watchEffect, onUnmounted } from "vue";

    // firebase imports
    import { auth } from "../firebase/firebase";
    import type { Auth } from "firebase/auth";

    // composables
    import injectStrict from "../composables/injectStrict";

    // types and interfaces
    import StoreKey from "../symbols/StoreSymbol";

    // components
    import Welcome from "../components/board/Welcome.vue";
    import Todos from "../components/board/Todos.vue";

    export default defineComponent({
        components: { Welcome, Todos },
        setup() {
            const store = injectStrict(StoreKey);

            const user = ref<Auth>(auth);
            const sectionClass = ref<string>(store.value.classes.sectionClass);
            let username = ref<string>("");

            // animation varibales
            let showWelcome = ref<boolean>(true);
            let showTodos = ref<boolean>(false);

            if (user.value.currentUser?.displayName) {
                username.value = user.value.currentUser?.displayName;
            }

            const stopWatching = watchEffect(() => {
                if (!showWelcome.value === true) {
                    setTimeout(() => {
                        showTodos.value = true;
                    }, 2000);
                } else {
                    console.log("else rann...");
                    setTimeout(() => {
                        showWelcome.value = false;
                    }, 2000);
                }
            });

            // stop watching
            onUnmounted(() => {
                stopWatching();
            });

            return {
                username,
                store,
                showWelcome,
                showTodos,
                sectionClass,
            };
        },
    });
</script>

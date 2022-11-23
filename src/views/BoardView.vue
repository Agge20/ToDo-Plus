<template>
    <content-section>
        <welcome :username="username" :show-welcome="showWelcome" />
        <todos v-if="showTodos" />
    </content-section>
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
    import ContentSection from "../components/slots/ContentSection.vue";
    import Welcome from "../components/board/Welcome.vue";
    import Todos from "../components/board/Todos.vue";

    export default defineComponent({
        components: { ContentSection, Welcome, Todos },
        setup() {
            const store = injectStrict(StoreKey);

            const user = ref<Auth>(auth);
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
            };
        },
    });
</script>

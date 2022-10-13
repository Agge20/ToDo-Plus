<template>
    <div class="mx-auto max-w-5xl">
        <logout-button v-if="user" />
        <router-view class="relative" />
    </div>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref, watchEffect } from "vue";

    // composables
    import injectStrict from "../composables/injectStrict";

    // types and interfaces
    import StoreKey from "../symbols/StoreSymbol";

    // components
    import LogoutButton from "../components/buttons/LogoutButton.vue";

    export default defineComponent({
        components: {
            LogoutButton,
        },
        setup() {
            const store = injectStrict(StoreKey);
            let user = ref<object | null>(null);

            watchEffect(() => {
                if (store.value.user) {
                    user.value = { ...store.value.user };
                } else {
                    user.value = null;
                }
            });
            return {
                user,
            };
        },
    });
</script>

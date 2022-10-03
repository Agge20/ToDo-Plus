<template>
    <slot />
</template>

<script lang="ts">
    import { defineComponent, provide, ref, watchEffect } from "vue";
    import StoreKey from "../symbols/StoreSymbol";

    // types and interfaces
    import type Store from "../interfaces/Store";

    export default defineComponent({
        setup() {
            const store = ref<Store>({
                user: {},
            });

            provide(StoreKey, store);

            watchEffect(() => {
                console.log("Store value changed: ", store);
            });
        },
    });
</script>

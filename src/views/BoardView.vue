<template>
    <section>
        <welcome />
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

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

            if (store.value.user) {
                console.log(store.value.user.uid);
            }
        },
    });
</script>

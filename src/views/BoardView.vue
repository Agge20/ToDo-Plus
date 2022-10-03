<template>
    <section>
        <welcome />
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

    // components
    import Welcome from "../components/board/Welcome.vue";

    export default defineComponent({
        components: { Welcome },
        setup() {},
    });
</script>

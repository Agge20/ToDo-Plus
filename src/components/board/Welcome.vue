<template>
    <heading :text="'Welcome August'" :size="'h2'" :colorLight="true" />
    <heading :text="'This is your board'" :size="'h3'" :colorLight="true" />
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

    // components
    import Heading from "../headings/Heading.vue";
    export default defineComponent({
        components: {
            Heading,
        },
        setup() {},
    });
</script>

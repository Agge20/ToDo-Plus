<template>
    <form>
        <heading :text="'Create todo'" :size="'h2'" :color-light="true" />
        <form-label :forId="'create-todo-title'" :text="'Title'" />
        <form-input :input-type="'text'" id="create-todo-title" />
    </form>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

    // components
    import Heading from "../headings/Heading.vue";
    import FormInput from "../form/FormInput.vue";
    import FormLabel from "../form/FormLabel.vue";

    export default defineComponent({
        components: {
            Heading,
            FormInput,
            FormLabel,
        },
        setup() {},
    });
</script>

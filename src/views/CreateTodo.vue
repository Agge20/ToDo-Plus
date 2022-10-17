<template>
    <content-section>
        <create-todo />
    </content-section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

    // components
    import ContentSection from "../components/ContentSection.vue";
    import CreateTodo from "../components/board/CreateTodo.vue";

    export default defineComponent({
        components: {
            ContentSection,
            CreateTodo,
        },
        setup() {},
    });
</script>

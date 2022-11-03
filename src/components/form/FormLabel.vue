<template>
    <!-- form label  -->
    <label :for="forId" class="mt-4 block font-inter text-xl font-light">{{ text }}</label>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import type { PropType } from "vue";

    export default defineComponent({
        props: {
            text: {
                required: true,
                type: String as PropType<string>,
            },
            forId: {
                required: true,
                type: String as PropType<string>,
            },
        },
    });
</script>

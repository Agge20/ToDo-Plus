<template>
    <button
        class="flex items-center rounded-lg bg-ct-yellow p-4 text-xl text-ct-white opacity-90 shadow-lg"
    >
        <arrow-left-icon class="mr-2" />
        {{ text }}
    </button>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";
    import type { PropType } from "vue";

    // components
    import ArrowLeftIcon from "../icons/ArrowLeftIcon.vue";
    export default defineComponent({
        props: {
            text: {
                required: true,
                type: String as PropType<string>,
            },
        },
        components: {
            ArrowLeftIcon,
        },
    });
</script>

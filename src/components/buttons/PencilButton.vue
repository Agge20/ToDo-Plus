<template>
    <button
        class="rounded-xl bg-ct-white p-2 opacity-80 hover:animate-grow hover:opacity-60 hover:shadow-lg"
    >
        <pencil-square-icon />
    </button>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

    // svg
    import PencilSquareIcon from "../icons/PencilSquareIcon.vue";

    export default defineComponent({
        components: {
            PencilSquareIcon,
        },
    });
</script>

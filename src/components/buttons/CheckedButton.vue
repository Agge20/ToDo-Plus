<template>
    <button
        class="rounded-xl bg-ct-green p-2 opacity-80 hover:animate-grow hover:opacity-60 hover:shadow-lg"
    >
        <checked-circle-icon />
    </button>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

    // svg
    import CheckedCircleIcon from "../../components/icons/CheckCircleIcon.vue";

    export default defineComponent({
        components: {
            CheckedCircleIcon,
        },
    });
</script>

<template>
    <!-- error popup component -->
    <div class="absolute top-2 flex items-center justify-center p-8">
        <p class="animate-expand rounded-2xl bg-ct-red p-8 text-ct-white">{{ message }}</p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import type { PropType } from "vue";

    export default defineComponent({
        props: {
            message: {
                required: true,
                type: String as PropType<string>,
            },
        },
    });
</script>

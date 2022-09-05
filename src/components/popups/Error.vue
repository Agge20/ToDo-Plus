<template>
    <!-- Error popup component -->
    <div class="flex items-center justify-center p-8">
        <p class="bg-ct-red p-8 text-ct-white rounded-2xl animate-expand">{{ message }}</p>
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
    setup() {},
});
</script>

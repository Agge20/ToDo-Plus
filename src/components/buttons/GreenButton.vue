<template>
    <button
        class="mt-8 w-80 max-w-full rounded-lg bg-ct-green p-3 text-xl text-white hover:animate-grow hover:shadow-lg"
    >
        {{ text }}
    </button>
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
        },
        setup() {},
    });
</script>

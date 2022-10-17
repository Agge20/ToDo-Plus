<template>
    <!-- form textarea  -->
    <textarea name="" id=""></textarea>
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

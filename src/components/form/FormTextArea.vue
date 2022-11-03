<template>
    <!-- form textarea  -->
    <textarea
        :id="id"
        :name="name"
        class="w-80 max-w-full rounded-lg border-2 bg-ct-light-gray p-2 focus:outline-none"
        rows="5"
        v-model="textareaValue"
        @change="$emit('inputValueChange', textareaValue)"
    ></textarea>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import type { PropType } from "vue";

    export default defineComponent({
        props: {
            id: {
                required: true,
                type: String as PropType<string>,
            },
            name: {
                required: true,
                type: String as PropType<string>,
            },
        },
        setup() {
            const textareaValue = ref<string>("");

            return {
                textareaValue,
            };
        },
    });
</script>

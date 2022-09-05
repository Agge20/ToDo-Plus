<template>
    <!-- Header three component -->
    <h2 class="text-ct-white" :class="[headingSize]">
        {{ text }}
    </h2>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";

// type
import type Heading from "../../types/Heading";

export default defineComponent({
    props: {
        text: {
            required: true,
            type: String as PropType<string>,
        },
        size: {
            required: true,
            type: String as PropType<Heading>,
        },
    },
    setup(props) {
        let headingSize = ref();

        switch (props.size) {
            case "h1":
                headingSize.value = "text-9xl";
                break;
            case "h2":
                headingSize.value = "text-8xl";
                break;
            case "h3":
                headingSize.value = "text-6xl";
                break;
            case "h4":
                headingSize.value = "text-4xl";
                break;
            case "h5":
                headingSize.value = "text-3xl";
                break;
            case "h6":
                headingSize.value = "text-3xl";
                break;
        }

        return {
            headingSize,
        };
    },
});
</script>

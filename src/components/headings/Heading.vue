<template>
    <!-- Heading component -->
    <h1 v-if="size === 'h1'" class="m-4 ml-0 text-ct-white" :class="[headingClasses]">
        {{ text }}
    </h1>
    <h2 v-else-if="size === 'h2'" class="m-4 ml-0 text-ct-white" :class="[headingClasses]">
        {{ text }}
    </h2>
    <h3
        v-else-if="size === 'h3'"
        class="m-4 ml-0 font-semibold text-ct-white"
        :class="[headingClasses]"
    >
        {{ text }}
    </h3>
    <h4 v-else-if="size === 'h4'" class="m-4 ml-0 text-ct-white" :class="[headingClasses]">
        {{ text }}
    </h4>
    <h5 v-else-if="size === 'h5'" class="m-4 ml-0 text-ct-white" :class="[headingClasses]">
        {{ text }}
    </h5>
    <h6 v-else-if="size === 'h6'" class="m-4 ml-0 text-ct-white" :class="[headingClasses]">
        {{ text }}
    </h6>
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
            colorLight: {
                required: true,
                type: Boolean as PropType<boolean>,
            },
        },
        setup(props) {
            let headingSize = ref<string>();
            let headingClasses = ref<object>();

            switch (props.size) {
                case "h1":
                    headingSize.value = "md:text-9xl text-6xl font-semibold";
                    break;
                case "h2":
                    headingSize.value = "md:text-8xl text-4xl font-semibold";
                    break;
                case "h3":
                    headingSize.value = "md:text-6xl text-3xl";
                    break;
                case "h4":
                    headingSize.value = "md:text-4xl font-medium text-2xl";
                    break;
                case "h5":
                    headingSize.value = "md:text-3xl text-1xl";
                    break;
                case "h6":
                    headingSize.value = "md:text-3xl text-lg";
                    break;
            }

            let headingColor = props.colorLight ? "text-ct-white" : "text-ct-black";

            headingClasses.value = [headingSize.value, headingColor];

            return {
                headingClasses,
            };
        },
    });
</script>

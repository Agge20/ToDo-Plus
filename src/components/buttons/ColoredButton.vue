<template>
    <button
        class="my-8 w-full max-w-full rounded-lg py-4 text-2xl hover:animate-grow hover:shadow-lg lg:w-80"
        :class="[buttonColor]"
    >
        {{ text }}
    </button>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import type { PropType } from "vue";

    // Types
    import type ButtonColors from "../../types/ButtonColors";

    export default defineComponent({
        props: {
            text: {
                required: true,
                type: String as PropType<string>,
            },
            color: {
                required: true,
                type: String as PropType<ButtonColors>,
            },
        },
        setup(props) {
            const buttonColor = ref<string>("");

            switch (props.color) {
                case "blue":
                    buttonColor.value = "bg-ct-blue text-white";
                    break;
                case "green":
                    buttonColor.value = "bg-ct-green text-white";
                    break;
                case "red":
                    buttonColor.value = "bg-ct-red text-white";
                    break;
                case "yellow":
                    buttonColor.value = "bg-ct-yellow text-white";
                    break;
            }

            return {
                buttonColor,
            };
        },
    });
</script>

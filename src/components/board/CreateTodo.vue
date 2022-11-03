<template>
    <heading :text="'What to do?'" :size="'h3'" :color-light="true" />
    <form class="my-8 max-w-90vw rounded-2xl bg-ct-white p-8">
        <heading :text="'Create todo'" :size="'h4'" :color-light="false" />
        <form-label :forId="'create-todo-title'" :text="'Title'" />
        <form-input
            @input-value-change="(val) => inputValueChange(val, 'todo-title')"
            :input-type="'text'"
            :id="'create-todo-title'"
        />
        <form-label :forId="'create-todo-description'" :text="'Description'" />
        <form-text-area
            @input-value-change="(val) => inputValueChange(val, 'todo-desc')"
            :id="'create-todo-description'"
            :name="'create-todo-description'"
        />
    </form>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";

    // components
    import Heading from "../headings/Heading.vue";
    import FormInput from "../form/FormInput.vue";
    import FormLabel from "../form/FormLabel.vue";
    import FormTextArea from "../form/FormTextArea.vue";

    export default defineComponent({
        components: {
            Heading,
            FormInput,
            FormLabel,
            FormTextArea,
        },
        setup() {
            const todoTitle = ref<string>("");
            const todoDesc = ref<string>("");

            // handle input value changes
            const inputValueChange = (
                val: string,
                valToChange: "todo-title" | "todo-desc"
            ): void => {
                switch (valToChange) {
                    case "todo-title":
                        todoTitle.value = val;
                        break;
                    case "todo-desc":
                        todoDesc.value = val;
                        break;
                }
            };

            return {
                inputValueChange,
            };
        },
    });
</script>

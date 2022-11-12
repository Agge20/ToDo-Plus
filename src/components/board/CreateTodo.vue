<template>
    <heading :text="'What to do?'" :size="'h2'" :color-light="true" class="mt-12" />
    <div class="m-4 my-8">
        <arrow-left-button @click="() => router.push('/')" :text="'Go back'" />
        <form class="my-4 max-w-90vw rounded-2xl bg-ct-white p-4 sm:p-8">
            <heading :text="'Create todo'" :size="'h4'" :color-light="false" class="ml-0" />
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
            <datepicker v-model="todoDate" class="mt-4" />
            <colored-button
                v-if="todoTitle.length > 1"
                @click.prevent="createTodo"
                :text="'Create todo'"
                :color="'green'"
            />
        </form>
    </div>

    <error v-if="errorMessage" :message="`${errorMessage}`" />
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import { useRouter } from "vue-router";

    // firebase imports
    import { doc, setDoc } from "firebase/firestore";
    import { auth, db } from "../../firebase/firebase";

    // module imports
    import Datepicker from "@vuepic/vue-datepicker";
    import "@vuepic/vue-datepicker/dist/main.css";

    // types
    import type Todo from "../../interfaces/Todo";

    // components
    import Heading from "../headings/Heading.vue";
    import FormInput from "../form/FormInput.vue";
    import FormLabel from "../form/FormLabel.vue";
    import FormTextArea from "../form/FormTextArea.vue";
    import ColoredButton from "../buttons/ColoredButton.vue";
    import Error from "../popups/Error.vue";
    import ArrowLeftButton from "../buttons/ArrowLeftButton.vue";

    export default defineComponent({
        components: {
            Heading,
            FormInput,
            FormLabel,
            FormTextArea,
            Datepicker,
            ColoredButton,
            Error,
            ArrowLeftButton,
        },
        setup() {
            const router = useRouter();

            const todoTitle = ref<string>("");
            const todoDesc = ref<string>("");
            const todoDate = ref<Date>();

            const errorMessage = ref<String>("");

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

            const createTodo = async () => {
                if (auth.currentUser?.uid.length) {
                    try {
                        await setDoc(doc(db, auth.currentUser.uid, todoTitle.value), {
                            authorId: auth.currentUser.uid,
                            title: todoTitle.value,
                            description: todoDesc.value,
                            expires: todoDate.value,
                        } as Todo);

                        router.push("/");
                    } catch (err: any) {
                        console.log("err: ", err);
                        errorMessage.value = err;
                    }
                }
            };

            return {
                inputValueChange,
                todoTitle,
                todoDesc,
                todoDate,
                createTodo,
                errorMessage,
                router,
            };
        },
    });
</script>

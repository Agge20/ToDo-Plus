<template>
    <transition name="fade-out">
        <div class="w-full duration-700 animate-in zoom-in slide-in-from-bottom">
            <header class="flex w-full flex-wrap items-end justify-between">
                <heading :text="'To Do.'" :size="'h2'" :colorLight="true" />
                <div>
                    <checked-button class="mx-2 mb-4" />
                    <pencil-button class="mb-4" @click="() => router.push('/create-todo')" />
                </div>
            </header>
            <div v-if="todos">
                <p v-for="todo in todos">
                    {{ todo.title }}
                </p>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, onBeforeMount, onUnmounted, ref } from "vue";
    import { useRouter } from "vue-router";

    // firebase
    import { collection, query, onSnapshot } from "firebase/firestore";
    import { db, auth } from "../../firebase/firebase";

    // interfaces
    import type Todo from "../../interfaces/Todo";

    // components
    import Heading from "../headings/Heading.vue";
    import CheckedButton from "../buttons/CheckedButton.vue";
    import PencilButton from "../buttons/PencilButton.vue";

    export default defineComponent({
        components: {
            Heading,
            CheckedButton,
            PencilButton,
        },
        setup() {
            const router = useRouter();
            const todos = ref<Array<Todo>>([]);
            let unsubscribeTodos: Function;

            // fetch todos before component is mounted
            onBeforeMount(() => {
                // if user is logged in
                if (auth.currentUser && auth.currentUser.uid) {
                    const q = query(collection(db, auth.currentUser.uid));
                    unsubscribeTodos = onSnapshot(q, (querySnapshot) => {
                        todos.value = [];
                        querySnapshot.forEach((doc) => {
                            todos.value.push(doc.data() as Todo);
                        });
                    });
                }
            });

            onUnmounted(() => {
                unsubscribeTodos();
            });

            return {
                router,
                todos,
            };
        },
    });
</script>

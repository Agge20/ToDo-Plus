<template>
    <transition name="fade-out">
        <div class="w-full duration-700 animate-in zoom-in slide-in-from-bottom">
            <header class="flex w-full flex-wrap items-end justify-between">
                <heading :text="'To Do.'" :size="'h2'" :colorLight="true" />
                <div>
                    <checked-button class="mx-2 mb-4" />
                    <pencil-button class="mb-4" />
                </div>
            </header>
            <div></div>
        </div>
    </transition>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";

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
    });
</script>

<template>
    <transition name="welcome">
        <header v-if="showWelcome" class="duration-1000 animate-in fade-in zoom-in">
            <heading :text="username" :size="'h2'" :colorLight="true" />
            <heading :text="'This is your board.'" :size="'h3'" :colorLight="true" />
        </header>
    </transition>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import type { PropType } from "vue";

    // components
    import Heading from "../headings/Heading.vue";
    export default defineComponent({
        props: {
            username: {
                required: true,
                type: String as PropType<string>,
            },
            showWelcome: {
                requried: true,
                type: Boolean as PropType<Boolean>,
            },
        },
        components: {
            Heading,
        },
        setup(props) {
            const username = ref(`Welcome ${props.username}`);

            return {
                username,
            };
        },
    });
</script>

<style>
    @import url("../../assets/css/tailwind.css");

    .welcome-leave-active {
        @apply opacity-0 transition delay-150 ease-in-out;
    }
</style>

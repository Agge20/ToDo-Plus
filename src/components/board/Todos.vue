<template>
    <transition name="fade-out">
        <div class="duration-700 animate-in zoom-in slide-in-from-bottom">
            <header>
                <heading :text="'To Do.'" :size="'h2'" :colorLight="true" />
                <p>Completed</p>
            </header>
            <div></div>
        </div>
    </transition>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import type { PropType } from "vue";

    // components
    import Heading from "../headings/Heading.vue";
    export default defineComponent({
        components: {
            Heading,
        },
    });
</script>

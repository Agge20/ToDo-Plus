<template>
    <heading :text="username" :size="'h2'" :colorLight="true" />
    <heading :text="'This is your board'" :size="'h3'" :colorLight="true" />
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

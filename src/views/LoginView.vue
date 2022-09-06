<template>
    <!-- Login view -->
    <section>
        <heading :text="'Hello'" :size="'h2'" />
    </section>
</template>

<script lang="ts">
// vue imports
import { ref, computed, defineComponent } from "vue";

// components
import Heading from "../components/headings/Heading.vue";

export default defineComponent({
    components: {
        Heading,
    },
});
</script>

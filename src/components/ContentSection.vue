<template>
    <section class="flex min-h-screen max-w-90vw flex-col items-center rounded-2xl py-16">
        <slot />
    </section>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        setup() {},
    });
</script>

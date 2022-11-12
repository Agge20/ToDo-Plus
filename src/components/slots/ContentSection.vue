<template>
    <section class="flex min-h-screen flex-col items-center justify-center rounded-2xl py-16">
        <slot />
    </section>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        setup() {},
    });
</script>

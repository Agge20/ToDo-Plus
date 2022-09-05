<template>
    <div class="vld-parent">
        <loading v-model:active="isLoading" />
    </div>
</template>

<script lang="ts">
// vue imports
import { defineComponent } from "vue";
import type { PropType } from "vue";

// library imports
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default defineComponent({
    props: {
        isLoading: {
            required: true,
            type: Boolean as PropType<boolean>,
        },
    },

    components: {
        Loading,
    },
});
</script>

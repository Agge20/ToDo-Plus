<template>
    <!-- login view -->
    <section class="flex min-h-screen flex-col items-center justify-center">
        <header>
            <heading :text="'Welcome'" :size="'h2'" :colorLight="true" />
            <heading
                :text="'Please register a new account below'"
                :size="'h4'"
                :colorLight="true"
            />
        </header>
        <register />
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";

    // firebase imports
    import { auth } from "../firebase/firebase";

    // components
    import Heading from "../components/headings/Heading.vue";
    import Register from "../components/login-and-register/Register.vue";

    export default defineComponent({
        components: {
            Heading,
            Register,
        },
        setup() {
            const email = ref<string>("");
            const password = ref<string>("");

            return {
                email,
                password,
            };
        },
    });
</script>

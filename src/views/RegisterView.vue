<template>
    <!-- register view -->
    <section
        class="duration-750 flex min-h-screen flex-col items-center justify-center p-6 lg:items-start"
    >
        <header class="duration-750 animate-in zoom-in">
            <heading :text="'Welcome'" :size="'h2'" :colorLight="true" />
            <heading
                :text="'Please register a new account below'"
                :size="'h3'"
                :colorLight="true"
            />
        </header>
        <div class="flex flex-col animate-in fade-in-75 slide-in-from-left lg:flex-row-reverse">
            <register />
            <div
                class="max-w-screen flex min-h-full w-full max-w-md items-center justify-center rounded-2xl bg-white bg-opacity-20 px-4 drop-shadow-lg backdrop-blur-lg lg:my-8 lg:w-96 lg:rounded-br-none lg:rounded-tr-none"
            >
                <colored-button :text="'Login'" :color="'blue'" @click="goToLogin" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import { useRouter } from "vue-router";

    // components
    import Heading from "../components/headings/Heading.vue";
    import Register from "../components/login-and-register/Register.vue";
    import ColoredButton from "../components/buttons/ColoredButton.vue";

    export default defineComponent({
        components: {
            Heading,
            Register,
            ColoredButton,
        },
        setup() {
            const router = useRouter();

            const email = ref<string>("");
            const password = ref<string>("");

            const goToLogin = (): void => {
                router.push("/login");
            };

            return {
                email,
                password,
                goToLogin,
            };
        },
    });
</script>

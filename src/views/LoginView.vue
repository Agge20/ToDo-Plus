<template>
    <!-- Login view -->
    <content-section>
        <header class="duration-750 animate-in zoom-in">
            <heading :text="'Hello.'" :size="'h2'" :color-light="true" />
            <heading :text="'Please sign in to see your board.'" :size="'h3'" :colorLight="true" />
        </header>

        <div class="flex flex-col animate-in fade-in-75 slide-in-from-right lg:flex-row">
            <login />
            <div
                class="max-w-screen flex min-h-full w-full max-w-md items-center justify-center rounded-2xl bg-white bg-opacity-20 px-4 drop-shadow-lg backdrop-blur-lg lg:my-8 lg:w-full lg:rounded-tl-none lg:rounded-bl-none"
            >
                <colored-button :text="'Register'" :color="'blue'" @click="goToRegister" />
            </div>
        </div>
    </content-section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import { useRouter } from "vue-router";

    // firebase imports
    import { provider, signInWithPopup, auth } from "../firebase/firebase";

    // components
    import Heading from "../components/headings/Heading.vue";
    import Login from "../components/login-and-register/Login.vue";
    import ColoredButton from "../components/buttons/ColoredButton.vue";
    import ContentSection from "../components/slots/ContentSection.vue";

    // composables
    import injectStrict from "../composables/injectStrict";

    // types and interfaces
    import StoreKey from "../symbols/StoreSymbol";

    export default defineComponent({
        components: {
            Heading,
            Login,
            ColoredButton,
            ContentSection,
        },
        setup() {
            const router = useRouter();
            const store = injectStrict(StoreKey);

            const email = ref<string>("");
            const password = ref<string>("");

            const goToRegister = (): void => {
                router.push("/register");
            };

            const googleSignIn = (): void => {
                signInWithPopup(auth, provider)
                    .then((result) => {
                        console.log("user", result.user);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };

            return {
                email,
                password,
                googleSignIn,
                goToRegister,
            };
        },
    });
</script>

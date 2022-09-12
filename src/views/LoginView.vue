<template>
    <!-- Login view -->
    <section>
        <heading :text="'Register'" :size="'h2'" />
        <input v-model="email" />
        <input v-model="password" />
        <button @click="googleSignIn">Login</button>
    </section>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";

    // firebase imports
    import { provider, signInWithPopup, auth } from "../firebase/firebase";

    // components
    import Heading from "../components/headings/Heading.vue";

    export default defineComponent({
        components: {
            Heading,
        },
        setup() {
            const email = ref<string>("");
            const password = ref<string>("");

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
            };
        },
    });
</script>

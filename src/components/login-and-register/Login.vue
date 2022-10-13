<template>
    <!-- login -->
    <div class="my-8 max-w-90vw rounded-2xl bg-ct-white p-8 lg:rounded-tr-none lg:rounded-br-none">
        <heading :text="'Login'" :size="'h4'" :colorLight="false" />
        <form class="flex flex-col" @submit.prevent="loginUser">
            <form-label :text="'Email'" :forId="'login-email'" />
            <form-input
                :inputType="'email'"
                :icon="'email'"
                :errorMessage="loginErrorMsg"
                id="login-email"
                @input-value-change="(val) => inputValueChange(val, 'email')"
            />
            <form-label :text="'Password'" :forId="'login-password'" />
            <form-input
                :inputType="'password'"
                :icon="'lock'"
                id="login-password"
                @input-value-change="(val) => inputValueChange(val, 'password')"
            />
            <colored-button
                :text="'Login'"
                :color="'green'"
                :disabled="!correctValuesInputed"
                :class="{
                    'opacity-50': !correctValuesInputed,
                    'cursor-pointer': correctValuesInputed,
                }"
                type="submit"
            />
        </form>
    </div>
</template>

<script lang="ts">
    // firebase imports
    import { signInWithEmailAndPassword } from "firebase/auth";
    import type { User } from "firebase/auth";

    import { auth } from "../../firebase/firebase";

    // vue imports
    import { defineComponent, ref, watchEffect, computed } from "vue";
    import { useRouter } from "vue-router";

    // composables
    import injectStrict from "../../composables/injectStrict";

    // types and interfaces
    import StoreKey from "../../symbols/StoreSymbol";

    // components
    import FormLabel from "../form/FormLabel.vue";
    import FormInput from "../form/FormInput.vue";
    import Heading from "../headings/Heading.vue";
    import ColoredButton from "../buttons/ColoredButton.vue";

    export default defineComponent({
        components: {
            FormLabel,
            FormInput,
            Heading,
            ColoredButton,
        },
        setup() {
            // vue router
            const router = useRouter();
            const store = injectStrict(StoreKey);

            const email = ref<string>("");
            const password = ref<string>("");
            const correctValuesInputed = ref<boolean>(false);
            const loginErrorMsg = ref<string>("");

            const checkInputedValues = computed(() => {
                if (email.value) {
                    return (
                        email.value.includes("@") &&
                        email.value.length > 2 &&
                        password.value.length > 1
                    );
                }
                return false;
            });

            watchEffect(() => {
                if (checkInputedValues.value) {
                    correctValuesInputed.value = true;
                } else {
                    correctValuesInputed.value = false;
                }
            });

            // handle input value changes
            const inputValueChange = (
                val: string,
                valToChange: "email" | "password" | "repeated-password" | "username"
            ): void => {
                switch (valToChange) {
                    case "email":
                        email.value = val;
                        break;
                    case "password":
                        password.value = val;
                        break;
                }
            };

            const loginUser = async () => {
                signInWithEmailAndPassword(auth, email.value, password.value)
                    .then((userCredential) => {
                        // Signed in
                        store.value.user = userCredential.user;
                        router.push("/");
                    })
                    .catch((error) => {
                        loginErrorMsg.value = error;
                    });
            };

            return {
                inputValueChange,
                correctValuesInputed,
                loginUser,
                loginErrorMsg,
            };
        },
    });
</script>

<template>
    <!-- register -->
    <div class="my-8 max-w-90vw rounded-2xl bg-ct-white p-8">
        <heading :text="'Register'" :size="'h4'" :colorLight="false" />
        <form class="flex flex-col" @submit.prevent="registerUser">
            <form-label :text="'Email'" :forId="'register-email'" />
            <form-input
                :inputType="'email'"
                :icon="'email'"
                :errorMessage="registerErrorMsg"
                id="register-email"
                @input-value-change="(val) => inputValueChange(val, 'email')"
            />
            <form-label :text="'Password'" :forId="'register-password'" />
            <form-input
                :inputType="'password'"
                :icon="'lock'"
                id="register-password"
                @input-value-change="(val) => inputValueChange(val, 'password')"
            />
            <form-label :text="'Repeat Password'" :forId="'register-repeat-password'" />
            <form-input
                :inputType="'password'"
                :icon="'lock'"
                :errorMessage="passwordNotMatchingMsg"
                id="register-repeat-password"
                @input-value-change="(val) => inputValueChange(val, 'repeated-password')"
            />
            <green-button
                :text="'Register'"
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
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../../firebase/firebase";

    // vue imports
    import { defineComponent, ref, watchEffect, computed } from "vue";

    // components
    import FormLabel from "../form/FormLabel.vue";
    import FormInput from "../form/FormInput.vue";
    import Heading from "../headings/Heading.vue";
    import GreenButton from "../buttons/GreenButton.vue";

    export default defineComponent({
        components: {
            FormLabel,
            FormInput,
            Heading,
            GreenButton,
        },
        setup() {
            const email = ref<string>("");
            const password = ref<string>("");
            const repeatedPassword = ref<string>("");
            const passwordNotMatchingMsg = ref<string>("");
            const correctValuesInputed = ref<boolean>(false);
            const registerErrorMsg = ref<string>("");

            const passwordsAreMatching = computed(() => {
                return (
                    repeatedPassword.value === password.value &&
                    repeatedPassword.value.length > 0 &&
                    password.value.length > 0
                );
            });

            const checkInputedValues = computed(() => {
                if (passwordsAreMatching.value) {
                    return email.value.includes("@") && email.value.length > 2;
                }
                return false;
            });

            watchEffect(() => {
                if (!passwordsAreMatching.value && repeatedPassword.value.length > 0) {
                    passwordNotMatchingMsg.value = "Password not matching";
                    correctValuesInputed.value = false;
                } else if (checkInputedValues.value) {
                    passwordNotMatchingMsg.value = "";
                    correctValuesInputed.value = true;
                } else {
                    passwordNotMatchingMsg.value = "";
                    correctValuesInputed.value = false;
                }
            });

            // handle input value changes
            const inputValueChange = (
                val: string,
                valToChange: "email" | "password" | "repeated-password"
            ): void => {
                switch (valToChange) {
                    case "email":
                        email.value = val;
                        break;
                    case "password":
                        password.value = val;
                        break;
                    case "repeated-password":
                        repeatedPassword.value = val;
                        break;
                }
            };

            const registerUser = (): boolean => {
                let success: boolean = false;

                createUserWithEmailAndPassword(auth, email.value, password.value)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        // ...
                        console.log("registered: ", user);
                        success = true;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        console.log(errorCode);
                        registerErrorMsg.value = error.message;
                        success = false;
                    });

                return success;
            };

            return {
                passwordNotMatchingMsg,
                inputValueChange,
                correctValuesInputed,
                registerUser,
                registerErrorMsg,
            };
        },
    });
</script>

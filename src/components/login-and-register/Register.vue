<template>
    <!-- register -->
    <div class="my-8 max-w-90vw rounded-2xl bg-ct-white p-8">
        <heading :text="'Register'" :size="'h4'" :colorLight="false" />
        <form class="flex flex-col">
            <form-label :text="'Email'" :forId="'register-email'" />
            <form-input
                :inputType="'email'"
                :icon="'email'"
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
            />
        </form>
    </div>
</template>

<script lang="ts">
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

            return {
                passwordNotMatchingMsg,
                inputValueChange,
                correctValuesInputed,
            };
        },
    });
</script>

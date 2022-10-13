<template>
    <!-- register -->
    <div class="my-8 max-w-90vw rounded-2xl bg-ct-white p-8 lg:rounded-tl-none lg:rounded-bl-none">
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
            <form-label :text="'Username'" :forId="'register-username'" />
            <form-input
                :inputType="'user'"
                :icon="'user'"
                :errorMessage="registerErrorMsg"
                id="register-username"
                @input-value-change="(val) => inputValueChange(val, 'username')"
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
            <colored-button
                :text="'Register'"
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
    import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
            const username = ref<string>("");
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
                valToChange: "email" | "password" | "repeated-password" | "username"
            ): void => {
                switch (valToChange) {
                    case "email":
                        email.value = val;
                        break;
                    case "username":
                        username.value = val;
                        break;
                    case "password":
                        password.value = val;
                        break;
                    case "repeated-password":
                        repeatedPassword.value = val;
                        break;
                }
            };

            const registerUser = async () => {
                try {
                    let errorOccured = false;
                    await createUserWithEmailAndPassword(auth, email.value, password.value).catch(
                        (err: any) => {
                            errorOccured = true;
                            registerErrorMsg.value = err;
                        }
                    );

                    await updateProfile(auth.currentUser as User, {
                        displayName: username.value,
                    }).catch((err: any) => {
                        errorOccured = true;
                        registerErrorMsg.value = err;
                    });

                    if (!errorOccured) {
                        store.value.user = auth.currentUser;
                        router.push("/");
                    }
                } catch (err: any) {
                    registerErrorMsg.value = err;
                }
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

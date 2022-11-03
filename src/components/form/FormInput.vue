<template>
    <!-- form input -->
    <div>
        <div class="relative flex items-center">
            <lock-icon v-if="icon === 'lock'" class="absolute left-2" />
            <email-icon v-if="icon === 'email'" class="absolute left-2" />
            <user-icon v-if="icon === 'user'" class="absolute left-2" />
            <input
                :type="inputType"
                :id="id"
                class="w-80 max-w-full rounded-lg border-2 bg-ct-light-gray p-2 focus:outline-none"
                :class="{
                    'indent-7': icon,
                    'border-2 border-ct-red': errorMessage,
                }"
                v-model="inputValue"
                @change="$emit('inputValueChange', inputValue)"
            />
        </div>
        <p v-if="errorMessage" class="text-sm text-ct-red">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref } from "vue";
    import type { PropType } from "vue";

    // type imports
    import type FormInputIcon from "../../types/FormInputIcon";

    // icons
    import LockIcon from "../icons/LockIcon.vue";
    import EmailIcon from "../icons/EmailIcon.vue";
    import UserIcon from "../icons/UserIcon.vue";

    export default defineComponent({
        props: {
            id: {
                required: true,
                type: String as PropType<string>,
            },
            errorMessage: {
                type: String as PropType<string>,
            },
            icon: {
                type: String as PropType<FormInputIcon>,
            },
            inputType: {
                required: true,
                type: String as PropType<string>,
            },
        },
        components: {
            LockIcon,
            EmailIcon,
            UserIcon,
        },
        setup() {
            const inputValue = ref<string>("");

            return {
                inputValue,
            };
        },
    });
</script>

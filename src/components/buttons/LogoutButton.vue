<template>
    <button
        @click="logout"
        class="absolute right-4 top-4 flex items-center rounded-lg bg-ct-yellow p-4 text-xl text-ct-white shadow-lg"
        aria-label="logout"
    >
        Logout
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="ml-2 h-6 w-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
        </svg>
    </button>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent } from "vue";
    import { useRouter } from "vue-router";

    // types and interfaces
    import StoreKey from "../../symbols/StoreSymbol";

    // composables
    import injectStrict from "../../composables/injectStrict";

    // firebase imports
    import { signOut } from "firebase/auth";
    import { auth } from "../../firebase/firebase";

    export default defineComponent({
        setup() {
            const router = useRouter();

            const store = injectStrict(StoreKey);

            const logout = () => {
                signOut(auth)
                    .then(() => {
                        store.value.user = null;
                        router.push("/login");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };

            return {
                logout,
            };
        },
    });
</script>

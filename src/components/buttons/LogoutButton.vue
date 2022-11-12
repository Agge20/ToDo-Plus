<template>
    <button
        @click="logout"
        class="absolute right-4 top-4 z-10 flex items-center rounded-lg bg-ct-yellow p-4 text-xl text-ct-white opacity-90 shadow-lg"
        aria-label="logout"
    >
        Logout
        <door-icon />
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

    // icon
    import DoorIcon from "../icons/DoorIcon.vue";

    export default defineComponent({
        components: {
            DoorIcon,
        },
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

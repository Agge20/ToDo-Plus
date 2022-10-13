<template>
    <!-- App -->
    <loading v-if="isLoading" :isLoading="isLoading" />
    <main
        v-if="!isLoading"
        class="min-h-screen animate-expand bg-ct-black bg-cover bg-no-repeat"
        ref="mainWrapper"
    >
        <gradient />

        <error v-if="natureImage.errorMessage" :message="natureImage.errorMessage" />
        <store-provider>
            <app-content-view />
        </store-provider>
    </main>
</template>

<script lang="ts">
    // vue imports
    import { defineComponent, ref, onMounted, watchEffect } from "vue";

    // types and interfaces
    import type NatureImage from "./interfaces/NatureImage";

    // providers
    import StoreProvider from "./providers/StoreProvider.vue";

    // components
    import Error from "./components/popups/Error.vue";
    import Loading from "./components/loaders/Loading.vue";
    import Gradient from "./components/Gradient.vue";

    // views
    import LoginView from "./views/LoginView.vue";
    import AppContentView from "./views/AppContentView.vue";

    export default defineComponent({
        name: "App",
        components: {
            Error,
            Loading,
            LoginView,
            Gradient,
            StoreProvider,
            AppContentView,
        },
        setup() {
            // refs
            let natureImage = ref<NatureImage>({
                errorMessage: null,
                imageUrl: "",
            });

            const mainWrapper = ref<HTMLElement>();
            const isLoading = ref<boolean>(true);

            // when component is mounted fetch and store the nature image url
            onMounted(() => {
                const getNatureImage = async function (): Promise<NatureImage> {
                    // fetch random nature image for unsplash
                    let data: NatureImage = {
                        errorMessage: null,
                        imageUrl: " ",
                    };

                    try {
                        const res = await fetch(import.meta.env.VITE_UNSPLASH_2K_NATURE_ENDPOINT);

                        if (res.ok) {
                            data = {
                                ...data,
                                imageUrl: res.url,
                            };
                        }
                    } catch (err) {
                        data = {
                            ...data,
                            errorMessage: "Unfortunately could not fetch background image...",
                        };
                    }

                    isLoading.value = false;
                    return (natureImage.value = data);
                };

                getNatureImage();
            });

            watchEffect(() => {
                if (natureImage.value.imageUrl.length && mainWrapper.value) {
                    mainWrapper.value.style.backgroundImage = `url('${natureImage.value.imageUrl}')`;
                }
            });

            return { natureImage, mainWrapper, isLoading };
        },
    });
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            @apply font-inter;
        }
    }
</style>

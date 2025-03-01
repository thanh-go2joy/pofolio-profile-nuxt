<template>
    <div class="flex flex-col min-h-screen">
        <!-- Header sticky full-width -->
        <PpHeader />

        <!-- Nội dung chính -->
        <main class="flex-grow p-4 max-w-7xl mx-auto w-full">
            <slot />
        </main>

        <!-- Footer full-width -->
        <PpFooter />
    </div>
</template>

<script setup>
const navigateTo = (path) => {
    useRouter().push(path);
};
</script>

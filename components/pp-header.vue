<template>
    <header
        class="sticky top-0 w-full shadow-sm z-50 p-4"
        :class="
            colorMode.preference === 'light' ||
            colorMode.preference === 'system'
                ? 'bg-white'
                : 'bg-black'
        "
    >
        <div class="max-w-7xl mx-auto">
            <nav class="md:flex items-center justify-between">
                <!-- Logo bên trái -->
                <div class="flex items-center space-x-2">
                    <!-- <img src="/logo.svg" alt="Logo" class="h-10 w-auto" /> -->
                    <NuxtLink to="/home">
                        <h1
                            class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse"
                        >
                            Nguyễn Thanh Thảo
                        </h1>
                    </NuxtLink>
                </div>

                <!-- Links bên phải -->
                <div class="md:flex items-center space-x-4 md:space-x-6">
                    <NuxtLink to="/my-cv" class="hover:text-blue-600"
                        >CV của tôi</NuxtLink
                    >
                    <NuxtLink to="/my-story" class="hover:text-blue-600"
                        >Câu chuyện</NuxtLink
                    >
                    <NuxtLink to="/blog" class="hover:text-blue-600"
                        >Blog</NuxtLink
                    >
                    <span class="border-l border-gray-400 h-5"></span>
                    <UButton
                        @click="
                            colorMode.preference =
                                colorMode.preference === 'dark'
                                    ? 'light'
                                    : 'dark'
                        "
                    >
                        <span v-if="colorMode.preference === 'dark'"
                            >🌙 Tối</span
                        >
                        <span v-else>☀️ Sáng</span>
                    </UButton>
                    <span class="border-l border-gray-400 h-5"></span>

                    <div class="max-w-[160px] ml-auto">
                        <USelect
                            v-model="selectedLanguage"
                            :options="languages"
                            option-attribute="label"
                        >
                            <template #leading>
                                <UIcon
                                    name="i-heroicons-flag"
                                    class="w-5 h-5"
                                />
                            </template>
                        </USelect>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const navItems = [
    { label: "CV của tôi", to: "/" },
    { label: "Story", to: "/about" },
    { label: "Blog", to: "/services" },
    { label: "Liên hệ", to: "/contact" },
];

const languages = ref([
    { label: "Tiếng Việt", value: "vi" },
    { label: "English", value: "en" },
]);
const selectedLanguage = ref("vi"); // Ngôn ngữ mặc định
</script>


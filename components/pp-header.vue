<template>
  <header class="sticky top-0 w-full bg-white shadow-md z-50 p-4">
    <div class="max-w-7xl mx-auto">
      <nav class="flex items-center justify-between">
        <!-- Logo bên trái -->
        <div class="flex items-center space-x-2">
          <!-- <img src="/logo.svg" alt="Logo" class="h-10 w-auto" /> -->
          <span class="text-lg font-semibold">N.T.T</span>
        </div>

        <!-- Links bên phải -->
        <div class="flex items-center space-x-6">
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-600"
            >My CV</NuxtLink
          >
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-600"
            >Story</NuxtLink
          >
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600"
            >Blog</NuxtLink
          >
          <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600"
            >Contact</NuxtLink
          >

          <!-- Nút đăng xuất -->
          <!-- <button class="flex items-center text-red-500 hover:text-red-600">
            <Icon name="heroicons-outline:logout" class="w-5 h-5" />
            <span class="ml-2">Đăng xuất</span>
          </button> -->
          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton
              color="white"
              label="Profile"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            />
          </UDropdown>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: "CV của tôi", to: "/" },
  { label: "Story", to: "/about" },
  { label: "Blog", to: "/services" },
  { label: "Liên hệ", to: "/contact" },
];
const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      shortcuts: ["⌘", "D"],
    },
  ],
];
</script>


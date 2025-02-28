<template>
  <div>
    <UContainer>
      <UCard class="my-4">
        <div class="flex items-center justify-between">
          <!-- Logo bên trái -->
          <div class="space-x-2">
            <h1 class="text-2xl font-bold">Chào mừng đến với N.T.T 🎉</h1>
            <p class="text-gray-600">
              Đây là một phiên bản thử nghiệm với Nuxt UI
            </p>
            <UButton color="primary" @click="count++"
              >Click Me {{ count }}</UButton
            >

            <div v-for="item in 3" :key="item">
              <h1>Danh sách người dùng</h1>
              <ul>
                <li><NuxtLink to="/blog">Người dùng 1</NuxtLink></li>
                <li><NuxtLink to="/my-cv">Người dùng 2</NuxtLink></li>
              </ul>
            </div>
          </div>

          <!-- Links bên phải -->
          <div class="flex items-center space-x-6">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
              <UButton
                color="white"
                label="Profile"
                trailing-icon="i-heroicons-chevron-down-20-solid"
              />
            </UDropdown>
          </div>
        </div>
      </UCard>

      <UCard class="my-4">
        <h1 class="text-2xl font-bold">Hành trình</h1>
        <p class="text-gray-600">Đây là một phiên bản thử nghiệm với Nuxt UI</p>
        <UButton color="primary" @click="count++">Click Me {{ count }}</UButton>

        <div v-for="item in 10" :key="item">
          <h1>Danh sách người dùng</h1>
          <ul>
            <li><NuxtLink to="/blog">Người dùng 1</NuxtLink></li>
            <li><NuxtLink to="/my-cv">Người dùng 2</NuxtLink></li>
          </ul>
        </div>
      </UCard>

      <UCard class="my-4">
        <h1 class="text-2xl font-bold">Dự án</h1>
        <p class="text-gray-600">Đây là một phiên bản thử nghiệm với Nuxt UI</p>
        <UButton color="primary" @click="count++">Click Me {{ count }}</UButton>

        <div v-for="item in 10" :key="item">
          <h1>Danh sách người dùng</h1>
          <ul>
            <li><NuxtLink to="/blog">Người dùng 1</NuxtLink></li>
            <li><NuxtLink to="/my-cv">Người dùng 2</NuxtLink></li>
          </ul>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>


<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

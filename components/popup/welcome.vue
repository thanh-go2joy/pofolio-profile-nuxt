<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(false);

onMounted(() => {
  isOpen.value = true;
});
</script>

<template>
  <UModal v-model="isOpen">
    <div class="p-6">
      <h2 class="text-xl font-bold">
        Chào mừng đến với Blog Nguyễn Thanh Thảo
      </h2>
      <p class="mt-2">Website hiển thị các thông tin về Profile của Tôi.</p>
      <div class="mt-4 text-right">
        <UButton color="gray" @click="isOpen = false">Đóng</UButton>
      </div>
    </div>
  </UModal>
</template>

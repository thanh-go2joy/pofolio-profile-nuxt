<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const toggleVisibility = () => {
    isVisible.value = window.scrollY > 200;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
    window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
    window.removeEventListener("scroll", toggleVisibility);
});
</script>

<template>
    <button
        v-show="isVisible"
        @click="scrollToTop"
        class="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
    >
        ⬆️
    </button>
</template>

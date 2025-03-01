<template>
    <div>
        <!-- <NuxtRouteAnnouncer /> -->
        <NuxtLayout>
            <NuxtPage />
            <ScrollToTop />
        </NuxtLayout>
    </div>
</template>

<script setup>
import ScrollToTop from "@/components/scroll-to-top.vue";
</script>
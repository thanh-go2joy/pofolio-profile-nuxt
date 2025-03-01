<template>
    <div class="flex justify-center items-center">
        <img
            :src="sellerImage"
            alt="Card Image"
            class="rounded-lg object-cover"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMeta } from "./useMeta";
import sellerImage from "@/assets/images/seller.webp";

useMeta();
</script>
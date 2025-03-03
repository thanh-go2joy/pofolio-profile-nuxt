<template>
    <div>
        <h1 class="text-2xl font-bold">Danh sách Blog</h1>
        <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-8 mt-[46px]"
        >
            <UCard v-for="item in 5" :key="item">
                <div class="flex items-center justify-between space-x-6">
                    <div>
                        <img
                            :src="jobImage"
                            alt="Card Image"
                            class="w-44 h-44 rounded-lg object-cover"
                        />
                    </div>

                    <!-- Nội dung -->
                    <div class="space-y-4">
                        <p class="text-gray-500">01/03/2025</p>
                        <h3 class="text-lg font-semibold">
                            30 câu hỏi phỏng vấn Sales
                        </h3>
                        <p class="text-sm">
                            Việc chuẩn bị kỹ lưỡng cho buổi phỏng vấn vị trí
                            Saler là chìa khóa để...
                        </p>
                        <div>
                            <NuxtLink to="/blog" class="text-red-600"
                                >Xem thêm</NuxtLink
                            >
                        </div>
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMeta } from "./useMeta";
import jobImage from "@/assets/images/job.png";

useMeta();
</script>
<template>
    <div>
        <h1>Câu chuyện của tôi</h1>

        <div
            class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 mt-8 mt-[46px]"
        >
            <div v-for="item in items" :key="item">
                <UCard>
                    <img :src="item.image" alt="Ảnh lớn" class="object-cover" />
                    <div class="space-y-4 mt-3">
                        <p>{{ item.description }}</p>
                        <p>Công cụ: {{ item.toolkit }}</p>
                    </div>

                    <template #footer>
                        <p>Năm: {{ item.finishTime }}</p>
                    </template>
                </UCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMeta } from "./useMeta";
import jobImage from "@/assets/images/job.png";

useMeta();

const items = [
    {
        image: jobImage,
        title: "Dự án Website Kỷ Nguyên Land",
        description:
            "Hỗ trợ khách hàng tìm kiếm thông tin đất đai, và bật động sản khác..",
        toolkit: "GitHub, JS",
        finishTime: "2022",
    },
    {
        image: jobImage,
        title: "Dự án Website Trọ đây rồi",
        description:
            "Hỗ trợ Công chức, Viên chức quản lý được thành tích theo thời gian thực,...",
        toolkit: "GitHub, JS",
        finishTime: "2023",
    },
    {
        image: jobImage,
        title: "Dự án Website Nghe nhạc",
        description:
            "Nâng cấp đam mê và sở thích nghe nhạc của khách hàng miễn phí,...",
        toolkit: "GitHub, JS",
        finishTime: "2023",
    },
    {
        image: jobImage,
        title: "Dự án QL Thi đua Khen thưởng",
        description:
            "Hỗ trợ Công chức, Viên chức quản lý được thành tích theo thời gian thực,...",
        toolkit: "GitHub, JS",
        finishTime: "2024",
    },
    {
        image: jobImage,
        title: "Dự án App Play Music",
        description:
            "Đang trong quá trình Demo, Sẽ được triển khai trong thời gian sắp tới,...",
        toolkit: "GitHub, Flutter",
        finishTime: "2024",
    },
];
</script>
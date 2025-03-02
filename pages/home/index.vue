<template>
    <div>
        <UContainer>
            <div class="my-4">
                <div class="flex items-center justify-between">
                    <!-- Logo bên trái -->
                    <div class="flex-1">
                        <div class="space-y-4">
                            <h1 class="text-2xl font-bold">
                                {{ t("welcome_to_me") }}
                            </h1>
                            <p>
                                là người có kỹ năng, kiến thức và chiến lược bán
                                hàng bài bản. Họ hiểu rõ sản phẩm, khách hàng,
                                thị trường và sử dụng các kỹ thuật như đàm phán,
                                chăm sóc khách hàng, xây dựng thương hiệu cá
                                nhân để gia tăng doanh số và duy trì mối quan hệ
                                lâu dài với khách hàng.
                            </p>
                        </div>

                        <div class="my-[30px] space-y-4">
                            <p>Tôi thành thạo các công nghệ, công cụ:</p>
                            <div class="flex items-center space-x-6 mt-[16px]">
                                <img
                                    src="/assets/images/word.png"
                                    alt="Ảnh lớn"
                                    class="w-12 h-12 shadow-lg object-cover"
                                />
                                <img
                                    src="/assets/images/excel.png"
                                    alt="Ảnh lớn"
                                    class="w-12 h-12 shadow-lg object-cover"
                                />
                                <img
                                    src="/assets/images/powerpoint.png"
                                    alt="Ảnh lớn"
                                    class="w-12 h-12 shadow-lg object-cover"
                                />
                            </div>
                            <div class="flex items-start gap-16">
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            Bán hàng (Sales) - 99%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-blue-500 h-3 rounded-full"
                                                style="width: 99%"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            Giao tiếp (Communication) - 70%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-green-500 h-3 rounded-full"
                                                style="width: 70%"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            TOEIC (Communication) - 90%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-orange-500 h-3 rounded-full"
                                                style="width: 90%"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            HSK (Communication) - Đang cập nhật
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-fuchsia-500 h-3 rounded-full"
                                                style="width: 0%"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1>
                                Xin chào! Mình là một seller chuyên cung cấp
                                [sản phẩm/dịch vụ bạn bán]. Cam kết chất lượng,
                                giá tốt và hỗ trợ tận tâm.
                            </h1>
                            <p>Liên hệ ngay để được tư vấn nhé!</p>
                        </div>
                    </div>

                    <!-- Links bên phải -->
                    <div class="text-center">
                        <img
                            src="/assets/images/avatar.jpg"
                            alt="Ảnh lớn"
                            class="w-60 h-60 rounded-full shadow-lg object-cover"
                        />

                        <div class="mt-[16px] space-x-4">
                            <UTooltip text="Email">
                                <UIcon
                                    name="i-heroicons-envelope"
                                    class="w-6 h-6 cursor-pointer hover:text-red-600"
                                    @click="count++"
                                />
                            </UTooltip>

                            <UTooltip text="Share">
                                <UIcon
                                    name="i-heroicons-share"
                                    class="w-6 h-6 cursor-pointer hover:text-red-600"
                                />
                            </UTooltip>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-24">
                <div class="space-y-4">
                    <h1 class="text-5xl font-bold text-center">Hành trình</h1>
                    <p class="text-center">
                        Các bước phát triển của bản thân qua từng thời kỳ!
                    </p>
                </div>

                <div
                    class="md:flex items-center justify-between space-y-6 md:space-x-6"
                >
                    <div
                        class="max-w-xl mx-auto flex flex-col space-y-6 mt-[46px]"
                    >
                        <div class="relative flex items-start">
                            <div
                                class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"
                            >
                                2022
                            </div>
                            <div
                                class="h-full w-1 bg-gray-300 absolute top-12 left-5"
                            ></div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold">
                                    Front end Developer
                                </h3>
                                <p class="text-gray-500">
                                    Công ty CP Go2Joy Việt Nam
                                </p>
                                <p class="text-gray-500">
                                    5a/2, Trần Phú, phường 4, quận 5, TP.HCM
                                </p>
                            </div>
                        </div>

                        <div class="relative flex items-start">
                            <div
                                class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                            >
                                2021
                            </div>
                            <div
                                class="h-full w-1 bg-gray-300 absolute top-12 left-5"
                            ></div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold">
                                    Tham gia dự án QL Thi Đua Khen Thưởng
                                </h3>
                                <p class="text-gray-500">
                                    Đại học Cảnh Sát Nhân dân
                                </p>
                                <p class="text-gray-500">
                                    36 Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Hồ Chí
                                    Minh, Vietnam
                                </p>
                            </div>
                        </div>

                        <div class="relative flex items-start">
                            <div
                                class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                            >
                                2020
                            </div>
                            <div
                                class="h-full w-1 bg-gray-300 absolute top-12 left-5"
                            ></div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold">
                                    Tốt nghiệp Kỹ sư ngành CNTT
                                </h3>
                                <p class="text-gray-500">Đại học Thủ Dầu Một</p>
                                <p class="text-gray-500">
                                    06 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình
                                    Dương, Vietnam
                                </p>
                            </div>
                        </div>

                        <div class="relative flex items-start">
                            <div
                                class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                            >
                                2019
                            </div>
                            <div
                                class="h-full w-1 bg-gray-300 absolute top-12 left-5"
                            ></div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold">
                                    Giải 3 cấp trường Dự án QL Thi Đua Khen
                                    Thưởng
                                </h3>
                                <p class="text-gray-500">Đại học Thủ Dầu Một</p>
                                <p class="text-gray-500">
                                    06 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình
                                    Dương, Vietnam
                                </p>
                            </div>
                        </div>

                        <div class="relative flex items-start">
                            <div
                                class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white"
                            >
                                2016
                            </div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold">
                                    Nhập học ngành Hệ Thống Thông Tin
                                </h3>
                                <p class="text-gray-500">Đại học Thủ Dầu Một</p>
                                <p class="text-gray-500">
                                    06 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình
                                    Dương, Vietnam
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="border overflow-x-auto">
                        <UTable :columns="columns" :rows="people" />
                    </div>
                </div>
            </div>

            <div class="my-4">
                <div class="space-y-4">
                    <h1 class="text-5xl font-bold text-center">Dự án</h1>
                    <p class="text-center">Kinh nghiệm giải quyết các dự án!</p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 mt-[46px]"
                >
                    <div v-for="item in items" :key="item">
                        <UCard>
                            <template #header>
                                <p class="text-1xl font-bold text-center">
                                    {{ item.title }}
                                </p>
                            </template>

                            <img
                                :src="item.image"
                                alt="Ảnh lớn"
                                class="object-cover"
                            />
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
        </UContainer>

        <!-- ==== POPUP MODAL ==== -->
        <!-- <PopupModalWelcome /> -->
        <!-- ==== POPUP MODAL ==== -->
    </div>
</template>

<script setup>
import { ref } from "vue";
import jobImage from "@/assets/images/job.png";
import { useMeta } from "./useMeta";
// import PopupModalWelcome from "@/components/popup/welcome.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useMeta();
const count = ref(0);

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
        description: "Hỗ trợ khách hàng tìm thuê trợ ở vị trí gần nhất,...",
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

const columns = [
    {
        key: "id",
        label: "ID",
    },
    {
        key: "name",
        label: "User name",
    },
    {
        key: "title",
        label: "Job position",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "role",
        label: "Role",
    },
];
const people = [
    {
        id: 1,
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        id: 2,
        name: "Courtney Henry",
        title: "Designer",
        email: "courtney.henry@example.com",
        role: "Admin",
    },
    {
        id: 3,
        name: "Tom Cook",
        title: "Director of Product",
        email: "tom.cook@example.com",
        role: "Member",
    },
];
</script>
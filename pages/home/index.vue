<template>
    <div>
        <UContainer>
            <div class="my-4">
                <div class="grid md:grid-cols-10 gap-6">
                    <!-- Logo bên trái -->
                    <div class="col-span-7">
                        <div class="space-y-4">
                            <h1 class="text-2xl font-bold">
                                {{ t("welcome_to_me") }}
                            </h1>
                            <p>
                                {{ t("introduction") }}
                            </p>
                        </div>

                        <div class="my-[30px] space-y-4">
                            <p>
                                {{
                                    t("technologies_tools_i_am_proficient_in")
                                }}:
                            </p>
                            <div class="flex items-center space-x-6 mt-[16px]">
                                <UTooltip class="space-x-2" text="Word">
                                    <img
                                        src="/assets/images/word.png"
                                        alt="Ảnh lớn"
                                        class="w-12 h-12 shadow-lg object-cover"
                                    />
                                </UTooltip>
                                <UTooltip class="space-x-2" text="Excel">
                                    <img
                                        src="/assets/images/excel.png"
                                        alt="Ảnh lớn"
                                        class="w-12 h-12 shadow-lg object-cover"
                                    />
                                </UTooltip>

                                <UTooltip class="space-x-2" text="Power Point">
                                    <img
                                        src="/assets/images/powerpoint.png"
                                        alt="Ảnh lớn"
                                        class="w-12 h-12 shadow-lg object-cover"
                                    />
                                </UTooltip>

                                <UTooltip class="space-x-2" text="ERP">
                                    <img
                                        src="/assets/images/erp.png"
                                        alt="Ảnh lớn"
                                        class="w-12 h-12 shadow-lg object-cover"
                                    />
                                </UTooltip>
                            </div>
                            <div class="flex items-start gap-16">
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            {{ t("sales") }} - 90%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-blue-500 h-3 rounded-full"
                                                style="width: 90%"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            {{ t("communication") }} - 90%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-green-500 h-3 rounded-full"
                                                style="width: 90%"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            TOEIC ({{ t("4_skills") }}) - 80%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-orange-500 h-3 rounded-full"
                                                style="width: 80%"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <p class="mb-1 text-sm font-medium">
                                            HSK ({{ t("4_skills") }}) - 50%
                                        </p>
                                        <div
                                            class="w-full bg-gray-200 rounded-full h-3"
                                        >
                                            <div
                                                class="bg-fuchsia-500 h-3 rounded-full"
                                                style="width: 50%"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1>
                                {{ t("introduction_production") }}
                            </h1>
                            <p>{{ t("contact_us_now_for_consultation") }}</p>
                        </div>
                    </div>
                    <!-- Links bên phải -->
                    <div
                        class="col-span-3 text-center border p-[24px] shadow-sm"
                    >
                        <img
                            src="/assets/images/avatar.jpg"
                            alt="Ảnh lớn"
                            class="rounded-full object-cover"
                        />

                        <div class="mt-[16px] space-y-2 text-left">
                            <div>
                                <UTooltip class="space-x-2" text="Email">
                                    <UIcon
                                        name="i-heroicons-envelope"
                                        class="w-5 h-5"
                                    />
                                    <p class="text-md">
                                        thanhthao051220@gmail.com
                                    </p>
                                </UTooltip>
                            </div>

                            <div>
                                <UTooltip
                                    class="space-x-2"
                                    :text="t('phone_zalo')"
                                >
                                    <UIcon
                                        name="i-heroicons-share"
                                        class="w-5 h-5"
                                    />
                                    <p class="text-md">(84+) 0908377163</p>
                                </UTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-24">
                <div class="space-y-4">
                    <h1 class="text-2xl md:text-5xl font-bold text-center">
                        {{ t("personal_journey") }}
                    </h1>
                    <p class="text-center">
                        {{ t("personal_development_steps_over_time") }}
                    </p>
                </div>

                <!-- <div class="md:flex items-center justify-between md:space-x-6"> -->
                <!-- <div
                    class="grid grid-cols-1 md:grid-cols-10 gap-4 md:space-x-6 space-y-12"
                > -->
                <div class="gap-4 md:space-x-6 space-y-12">
                    <div class="col-span-6 space-y-6 mt-[46px]">
                        <!-- ===================================== -->
                        <div
                            class="relative flex items-start"
                            v-for="(item, index) in personalJourneys"
                            :key="index"
                        >
                            <div
                                class="w-10 h-10 text-center rounded-full flex items-center justify-center text-white"
                                :class="item.bgColor"
                            >
                                <p class="p-1">{{ item.year }}</p>
                            </div>
                            <div
                                class="h-full w-1 bg-gray-300 absolute top-10 left-5 md:left-5"
                            ></div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold">
                                    {{ setLangTitlePersonalJourneys(index) }}
                                </h3>
                                <p class="text-gray-500">
                                    {{ setLangCompanyPersonalJourneys(index) }}
                                </p>
                                <p class="text-gray-500">
                                    {{ setLangAddressPersonalJourneys(index) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-4">
                <div class="space-y-4">
                    <h1 class="text-2xl md:text-5xl font-bold text-center">
                        {{ t("Projects") }}
                    </h1>
                    <p class="text-center">
                        {{ t("project_handling_experience") }}
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 mt-[46px]"
                >
                    <div v-for="item in projects" :key="item">
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
                                <UTooltip :text="item.description">
                                    <p class="line-clamp-2">
                                        {{ item.description }}
                                    </p>
                                </UTooltip>
                            </div>

                            <template #footer>
                                <p>{{ t("year") }}: {{ item.finishTime }}</p>
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
import { computed } from "vue";
import jobImage from "@/assets/images/job.png";
import { useMeta } from "./useMeta";
// import PopupModalWelcome from "@/components/popup/welcome.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

useMeta();

const projects = computed(() => [
    {
        image: jobImage,
        title: setLangTitleProjects(0),
        description: setLangDescriptionProjects(0),
        finishTime: "2023",
    },
]);

const personalJourneys = [
    {
        title: "Sales Staff",
        company: "Far Eastern Polytex (Viet Nam) Limited",
        address:
            "Land lot B_5B_CN, Road DC, Bau Bang Industrial Park, Lai Uyen Town, Bau Bang District, Binh Duong Province, Vietnam.",
        year: "2023",
        bgColor: "bg-purple-500",
    },
    {
        title: "GraduationThu Dau Mot University",
        company: "Thu Dau Mot University",
        address: "06 Tran Van On, Phu Hoa, Thu Dau Mot, Binh Duong, Vietnam",
        year: "2023",
        bgColor: "bg-red-500",
    },
    {
        title: "English teacher & Reception",
        company: "Than Dong Language School",
        address: "394 Hung Vuong, An Dien, Ben Cat, Binh Duong",
        year: "2021",
        bgColor: "bg-green-500",
    },
    {
        title: "Student & Part Time Staff",
        company: "Wall Street English Binh Duong",
        address: "736 August Revolution, Chanh Nghia, Thu Dau Mot, Binh Duong",
        year: "2019",
        bgColor: "bg-blue-500",
    },
];

const setLangTitlePersonalJourneys = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "Sales Staff";
            } else if (locale.value === "zh") {
                return "销售员";
            }
            return "Nhân viên kinh doanh";
        case 1:
            if (locale.value === "en") {
                return "GraduationThu Dau Mot University";
            } else if (locale.value === "zh") {
                return "毕业于首油一大学";
            }
            return "Tốt nghiệp Trường Đại học Thủ Dầu Một";
        case 2:
            if (locale.value === "en") {
                return "English teacher & Reception";
            } else if (locale.value === "zh") {
                return "英语老师 & 前台接待";
            }
            return "Giáo viên tiếng Anh & Lễ tân";
        case 3:
            if (locale.value === "en") {
                return "Student & Part Time Staff";
            } else if (locale.value === "zh") {
                return "学生 & 兼职员工";
            }
            return "Học viên & Nhân viên bán thời gian";
        default:
            return "";
    }
};

const setLangCompanyPersonalJourneys = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "Far Eastern Polytex (Viet Nam) Limited";
            } else if (locale.value === "zh") {
                return "远东新世纪（越南）有限公司";
            }
            return "Công ty TNHH Far Eastern Polytex (Việt Nam)";
        case 1:
            if (locale.value === "en") {
                return "GraduationThu Dau Mot University";
            } else if (locale.value === "zh") {
                return "毕业于首油一大学";
            }
            return "Tốt nghiệp Trường Đại học Thủ Dầu Một";
        case 2:
            if (locale.value === "en") {
                return "Than Dong Language School";
            } else if (locale.value === "zh") {
                return "神童语言学校";
            }
            return "Trung tâm anh ngữ Thần Đồng";
        case 3:
            if (locale.value === "en") {
                return "Wall Street English Binh Duong";
            } else if (locale.value === "zh") {
                return "华尔街英语平阳";
            }
            return "Wall Street English Bình Dương";
        default:
            return "";
    }
};

const setLangAddressPersonalJourneys = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "Land lot B_5B_CN, Road DC, Bau Bang Industrial Park, Lai Uyen Town, Bau Bang District, Binh Duong Province, Vietnam.";
            } else if (locale.value === "zh") {
                return "B_5B_CN 地块，DC 路，包邦工业园，赖渊镇，包邦县，平阳省，越南。";
            }
            return "Lô đất B_5B_CN, Đường DC, Khu công nghiệp Bàu Bàng, Thị trấn Lai Uyên, Huyện Bàu Bàng, Tỉnh Bình Dương, Việt Nam.";
        case 1:
            if (locale.value === "en") {
                return "06 Tran Van On, Phu Hoa, Thu Dau Mot, Binh Duong, Vietnam";
            } else if (locale.value === "zh") {
                return "06 陈文恩街，富和，首油一市，平阳省，越南。";
            }
            return "06 Trần Văn Ơn, Phú Hòa, Thủ Dầu Một, Bình Dương, Việt Nam.";
        case 2:
            if (locale.value === "en") {
                return "394 Hung Vuong, An Dien, Ben Cat, Binh Duong";
            } else if (locale.value === "zh") {
                return "394 雄王街，安延，笨葛市，平阳省。";
            }
            return "394 Hùng Vương, An Điền, Bến Cát, Bình Dương.";
        case 3:
            if (locale.value === "en") {
                return "736 August Revolution, Chanh Nghia, Thu Dau Mot, Binh Duong";
            } else if (locale.value === "zh") {
                return "736 八月革命街，正义坊，首油一市，平阳省。";
            }
            return "736 Cách Mạng Tháng Tám, Chánh Nghĩa, Thủ Dầu Một, Bình Dương.";
        default:
            return "";
    }
};

// ======================== LANG FOR PROJECT ========================
const setLangTitleProjects = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "Import Activities of Raw Materials at NB Nam Phuong Co., Ltd.";
            } else if (locale.value === "zh") {
                return "在 NB 南方有限公司的原材料进口活动";
            }
            return "HOẠT ĐỘNG NHẬP KHẨU NGUYÊN VẬT LIỆU TẠI CÔNG TY TNHH NB NAM PHƯƠNG";

        default:
            return "";
    }
};
const setLangDescriptionProjects = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "In order to overcome the consequences of the Covid pandemic and help businesses escape from severe crises, this project focuses on researching and studying raw materials to provide the best solutions for enterprises. Additionally, it aims to enhance the quality of output products, ensuring high-quality and safe products for consumers while also generating high profits for businesses, thereby driving Vietnam's economic growth.";
            } else if (locale.value === "zh") {
                return "为了克服新冠疫情带来的影响，并帮助企业摆脱严重的危机，本项目专注于研究和分析原材料，以为企业提供最佳解决方案。此外，该项目还旨在提高产品质量，确保为消费者提供优质、安全的产品，同时为企业创造高利润，从而推动越南经济发展。";
            }
            return "Nhằm khắc phục hậu quả của đại dịch Covid, đưa doanh nghiệp thoát khỏi tình trạng khủng hoảng nặng nề. Tìm hiểu và nghiên cứu nguyên vật liệu đầu vào mang lại những giải pháp tốt nhất cho doanh nghiệp. Ngoài ra, dự án này còn giúp nâng cao chất lượng sản phẩm đầu ra, đem lại nguồn sản phẩm tốt, an toàn cho người tiêu dùng và đồng thời mang lại lợi nhuận cao cho các doanh nghiệp, thúc đẩy nền kinh tế Việt Nam phát triển.";

        default:
            return "";
    }
};
</script>
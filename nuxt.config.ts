// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxthq/ui"],
    colorMode: {
        preference: "system", // Mặc định theo hệ thống
        fallback: "light", // Nếu không hỗ trợ thì mặc định là sáng
        classSuffix: "",
    },
});

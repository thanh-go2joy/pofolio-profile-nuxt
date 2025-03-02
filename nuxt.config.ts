// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxthq/ui", "@nuxtjs/i18n"],
    i18n: {
      locales: [
        { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
        { code: 'vi', iso: 'vi-VN', file: 'vi.json', name: 'Tiếng Việt' }
      ],
      lazy: true,
      langDir: 'locales',
      defaultLocale: 'vi',
    },
    colorMode: {
        preference: "system", // Mặc định theo hệ thống
        fallback: "light", // Nếu không hỗ trợ thì mặc định là sáng
        classSuffix: "",
    },
});

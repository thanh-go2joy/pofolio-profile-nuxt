import { createI18n } from 'vue-i18n'
import viLocale from "./i18n/vi.json";
import enLocale from "./i18n/en.json";
import zhLocale from "./i18n/zh.json";

export default defineNuxtPlugin(({ vueApp }) => {
const savedLocale = process.client ? localStorage.getItem('locale') || 'en' : 'en' // Mặc định là Tiếng Việt

  const i18n = createI18n({
    legacy: false, // Để sử dụng Composition API
    locale: savedLocale, // Ngôn ngữ mặc định
    fallbackLocale: 'en', // Ngôn ngữ dự phòng
    messages: {
      en: {
        ...enLocale,
      },
      vi: {
        ...viLocale,
      },
      zh: {
        ...zhLocale,
      }
    }
  })

  vueApp.use(i18n)
})

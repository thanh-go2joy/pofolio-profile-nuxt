// composables/useMeta.ts
import { useHead } from "#imports";

export function useMeta(title: string, description: string) {
    useHead({
        title: "Trang Giới Thiệu - Nuxt 3",
        meta: [
            {
                name: "description",
                content: "Giới thiệu về Nuxt 3 với SEO tối ưu 2",
            },
            { property: "og:title", content: "Trang Giới Thiệu - Nuxt 3" },
            {
                property: "og:description",
                content: "Thông tin chi tiết về Nuxt 3 -",
            },
        ],
    });
}

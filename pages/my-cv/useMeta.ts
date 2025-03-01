// composables/useMeta.ts
import { useHead } from "#imports";

export function useMeta() {
    useHead({
        title: "Nguyễn Thanh Thảo",
        meta: [
            {
                name: "description",
                content: "CV Nguyễn Thanh Thảo",
            },
            { property: "og:title", content: "Nguyễn Thanh Thảo" },
            {
                property: "og:description",
                content: "CV Nguyễn Thanh Thảo",
            },
        ],
    });
}

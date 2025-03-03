<template>
    <footer class="w-full p-4">
        <div class="mx-auto">
            <UCard class="p-4 text-center">
                &copy; {{ new Date().getFullYear() }} Nguyễn Thanh Thảo.
                {{ t("all_rights_reserved") }}
            </UCard>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>


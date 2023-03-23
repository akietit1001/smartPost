<template>
  <div class="title">
      <span>{{ title }}</span>
      <span class="exit" @click="exitCurrentPage">{{ t('navSub.exit') }}</span>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router"

const { t } = useI18n()

const router = useRouter();

defineProps<{
  title: string
}>()


const exitCurrentPage = () => {
  router.go(-1)
}
</script>

<style scoped>
.title{
  display: flex;
  justify-content: space-between;
  margin: 30px 14px 25px 0;
}

.exit{
  color: #D8000C;
}

.exit:hover{
  cursor: pointer;
  text-decoration: underline #D8000C;
}
</style>
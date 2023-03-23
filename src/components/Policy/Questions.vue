<template>
  <div class="questions">
    {{ t('footer.FAQ') }}
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.questions{
  font-size: 14px;
  margin-bottom: 10px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>


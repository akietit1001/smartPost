<template>
  <div class="service-policy">
    {{ t('footer.termOfService') }}
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.service-policy{
  margin-bottom: 10px;
  font-size: 14px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
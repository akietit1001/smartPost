<template>
  <div>
    <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="modalReinviteVisible = true" />

    <el-dialog v-model="modalReinviteVisible" :title="title">
      <div class="modal-reinvite-body">
        <p>{{name + ' ' + t('modalReinvite.areYouSure')}}</p>
        <p>{{ t('modalReinvite.areYouSure') + ' ' + email + ' ' + t('modalReinvite.willBeSentTo')}}</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="modalReinviteVisible = false" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from './Button.vue';

const { t } = useI18n()
const modalReinviteVisible = ref(false)
defineProps<{
  title: string
  name?: string
  email?: string
}>()
</script>

<style>

.modal-reinvite-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
}
</style>
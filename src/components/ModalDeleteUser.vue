<template>
  <div>
    <!-- <Button text="削除する" :primary="ref(true).value" @click="modalDeleteVisible = true" /> -->

    <el-dialog v-model="props.modalDeleteVisible" :title="title" :show-close="false">
      <template #header>
        <img class="close-icon" :src="closeIcon" alt="" @click="closeModal">
    </template>
      <div class="modal-delete-user-body">
        <p>{{ t('modalDelete.areYouSure_1') }}</p>
        <p>{{ t('modalDelete.areYouSure_2') }}</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button :text="t('admin_info.change')" :danger="ref(true).value" @click="closeModal" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import InputText from './InputText.vue';
import { useI18n } from 'vue-i18n';
import closeIcon from '@/assets/icons/close.svg'

const { t } = useI18n()

// const modalDeleteVisible = ref(false)
const props = defineProps<{
  title: string
  modalDeleteVisible: boolean
  closeModal(): boolean
}>()


</script>

<style>
.modal-delete-user-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.el-dialog__header{
  text-align: end;
}

.close-icon{
  cursor: pointer;
}
</style>
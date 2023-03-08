<template>
  <div>
    <Button text="変更する" :primary="ref(true).value" @click="modalReinviteVisible = true" />

    <el-dialog v-model="modalReinviteVisible" :title="title">
      <div class="modal-reinvite-body">
        <p>黒須 太郎への招待状を再送信してもよろしいですか？</p>
        <p>メールがxxxxx@xid.incに送信されます。</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button text="変更する" :primary="ref(true).value" @click="modalReinviteVisible = false" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
const modalReinviteVisible = ref(false)
defineProps<{
  title: string
}>()
</script>

<style>

.modal-reinvite-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
</style>
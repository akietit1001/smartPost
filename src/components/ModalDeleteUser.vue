<template>
  <div>
    <Button text="削除する" :primary="ref(true).value" @click="modalDeleteVisible = true" />

    <el-dialog v-model="modalDeleteVisible" :title="title">
      <div class="modal-delete-user-body">
        <p>この管理者を削除してもよろしいですか？</p>
        <p>管理者は完全に削除されます。</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button text="削除する" :danger="ref(true).value" @click="modalDeleteVisible = false" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import InputText from './InputText.vue';
const modalDeleteVisible = ref(false)
defineProps<{
  title: string
}>()
</script>

<style>
.modal-delete-user-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
</style>
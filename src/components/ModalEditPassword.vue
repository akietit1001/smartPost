<template>
  <div>
    <Button text="変更する" :primary="ref(true).value" @click="modalPasswordVisible = true" />

    <el-dialog v-model="modalPasswordVisible" :title="title">
      <div class="modal-edit-password-body">
        <InputText label="新しいパスワード" type="password" placeholder="黒須" />
        <InputText label="新しいパスワードを確認" type="password" placeholder="黒須" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button text="変更する" :primary="ref(true).value" @click="modalPasswordVisible = false" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import InputText from './InputText.vue';
  const modalPasswordVisible = ref(false)
defineProps<{
  title: string
}>()
</script>

<style>
.modal-edit-password-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
<template>
  <div>
    <Button text="変更する" :primary="ref(true).value" @click="modalPasswordVisible = true" />

    <el-dialog v-model="modalPasswordVisible" :title="title">
      <div class="modal-edit-password-body">
        <InputText label="新しいパスワード" type="password" placeholder="黒須" @change="handleChangePassword"/>
        <InputText label="新しいパスワードを確認" type="password" placeholder="黒須" @change="handleChangePasswordConfirm"/>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button text="変更する" :primary="ref(true).value" @click="handleUpdatePassword" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import InputText from './InputText.vue';
import { useCurrentUserStore } from '@/stores/currentUser';
import userApi from '@/apis/userApi';

const password = ref('');
const passwordConfirm = ref('');
const currentUserStore = useCurrentUserStore()
const { getterCurrentUser, updateCurrentUser } = currentUserStore;
const id = getterCurrentUser.id;
const modalPasswordVisible = ref(false)

const handleChangePassword = (e) => {
  password.value = e.target.value
}

const handleChangePasswordConfirm = (e) => {
  passwordConfirm.value = e.target.value
}

const handleUpdatePassword = async () => {
  const res = await userApi.updatePassword(id, {
    password: passwordConfirm.value
  })

  if(res) {
    updateCurrentUser(res)
    modalPasswordVisible.value = false
  }
}
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
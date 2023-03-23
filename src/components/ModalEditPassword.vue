<template>
  <div>
    <Button :text="t('admin_info.reset')" :primary="ref(true).value" @click="modalPasswordVisible = true" />

    <el-dialog v-model="modalPasswordVisible" :title="title">
      <div class="modal-edit-password-body">
        <InputText :label="t('modalUpdatePassword.newPassword')" type="password" :placeholder="t('modalUpdatePassword.newPassword')" @change="handleChangePassword"/>
        <InputText :label="t('modalUpdatePassword.confirmNewPassword')" type="password" :placeholder="t('modalUpdatePassword.confirmNewPassword')" @change="handleChangePasswordConfirm"/>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="handleUpdatePassword" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import InputText from './InputText.vue';
// import { useCurrentUserStore } from '@/stores/currentUser';
import { useUserStore } from '@/stores/users';
import userApi from '@/apis/userApi';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()


const router = useRouter()

const password = ref('');
const passwordConfirm = ref('');
// const currentUserStore = useCurrentUserStore()
const userStore = useUserStore()

const { getterUsers, updateUser } = userStore;
// const { getterCurrentUser, updateCurrentUser } = currentUserStore;
// const id = getterCurrentUser.id;
const modalPasswordVisible = ref(false)

const handleChangePassword = (e) => {
  password.value = e.target.value
}

const handleChangePasswordConfirm = (e) => {
  passwordConfirm.value = e.target.value
}

const handleUpdatePassword = async () => {
  const id = router.currentRoute.value.params.id*1
  for(let i = 0; i< getterUsers.length; i++) {
    if(id === getterUsers[i].id) {
      const res = await userApi.updatePassword(id, {
        password: passwordConfirm.value
      })
    if(res) {
      console.log(res)
      updateUser(id, res)
      modalPasswordVisible.value = false
    }
    }
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
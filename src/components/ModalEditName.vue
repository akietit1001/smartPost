<template> 
  <div>
    <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="modalNameVisible = true" />

    <el-dialog v-model="modalNameVisible" :title="title">
      <div class="modal-edit-name-body">
        <InputText :label="t('listUser.name')" type="text" :placeholder="t('admin_invite.firstName')" @change="handleChangeFirstName"/>
        <InputText label="" type="text" :placeholder="t('admin_invite.lastName')" @change="handleChangeLastName"/>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="handleUpdateName" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import userApi from '@/apis/userApi';
import { ref } from 'vue'
import Button from './Button.vue'
import InputText from './InputText.vue';
// import { useCurrentUserStore}  from '@/stores/currentUser'
import { useUserStore } from '@/stores/users';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n() 
const router = useRouter()

defineProps<{
  title: string
}>()

const firstName = ref('')
const lastName = ref('')
// const currentUserStore = useCurrentUserStore();

const { getterUsers, updateUser, key } = useUserStore()

const modalNameVisible = ref(false)


const handleChangeFirstName = (e) => {
  firstName.value = e.target.value
}

const handleChangeLastName = (e) => {
  lastName.value = e.target.value
}


const handleUpdateName = async () => {
  const id = router.currentRoute.value.params.id*1
  for(let i = 0; i< getterUsers.length; i++) {
    if(id === getterUsers[i].id) {
      const res = await userApi.updateName(id, {
      firstName: firstName.value,
      lastName: lastName.value
    })
      if(res) {
        updateUser(id, res)
        modalNameVisible.value = false
      }
      break;
    }
  }
}


</script>

<style>
.el-dialog{
  width: 460px;
}
.modal-edit-name-body{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
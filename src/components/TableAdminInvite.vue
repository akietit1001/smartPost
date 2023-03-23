<template>
  <div class="wrapper__table-admin-invite">
    <div class="inner__table-admin-invite">
      <div class="form__table-admin-invite" v-for="child, index in props.children" :key="index">
      <div class="text-name__table-admin-invite">
        <InputText :label="t('listUser.name')" type="text" :placeholder="t('admin_invite.firstName')" @change="handleChangeFirstName"/>
        <InputText type="text" :placeholder="t('admin_invite.lastName')" @change="handleChangeLastName"/>
      </div>
      <div class="input-text__table-admin-invite">
          <InputText :label="t('listUser.email')" type="email" placeholder="xxxxx@xid.inc" @change="handleChangeEmail"/>
        </div>
        <div class="dropdown__table-admin-invite" :style="{marginBottom: '10px'}">
          <Dropdown :options="options" :multiple="true" :placeholder="t('admin_invite.chooseRole')" :label="t('listUser.role')" />
        </div>
        <div class="delete-icon__table-admin-invite" @click="removeFormData(index)">
          <img :src="deleteIcon" alt="">
        </div>
      </div>
    </div>
    <NavFooter :state-btn="stateBtn()" :params="params" />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import InputText from './InputText.vue';
import Dropdown from './Dropdown.vue';
import NavFooter from './NavFooter.vue';
import deleteIcon from '@/assets/icons/delete.svg'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const role = ref([]);

const params = ref({
  firstName,
  lastName,
  email,
  role
})

const options = [
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },
]

const props = defineProps({
  children: Array<{
    id: number
    child: number
  }>
})

function stateBtn() : Boolean {
  if(props.children?.length === 0) {
    return false
  }
  else {
    return true
  }
}

const emit = defineEmits<{
  (e: 'removeFormData', id: number) : void
}>()

const removeFormData = (id: number) => {
  emit('removeFormData', id)
}

const handleChangeFirstName = (e) => {
  firstName.value = e.target.value
}

const handleChangeLastName = (e) => {
  lastName.value = e.target.value
}

const handleChangeEmail = (e) => {
  email.value = e.target.value
}

</script>

<style>

.wrapper__table-admin-invite{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid #DDDDDD;
  margin-top: 15px;
  background-color: #FAFAFAFA;
}
.form__table-admin-invite {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  border-bottom: 1px solid #dddddd;
}
.text-name__table-admin-invite{
  display: flex;
  align-items: flex-end;
}
.input-text__table-admin-invite{
  width: 40%;
}
.dropdown__table-admin-invite{
  width: 40%;
}
.delete-icon__table-admin-invite{
  display: flex;
  height: 40px;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
}
</style>
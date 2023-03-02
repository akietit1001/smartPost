<template>
  <div class="wrapper__table-admin-invite">
    <div class="inner__table-admin-invite">
      <div class="form__table-admin-invite" v-for="child, index in props.children" :key="index">
      <div class="text-name__table-admin-invite">
        <InputText label="氏名" type="text" placeholder="氏"/>
        <InputText type="text" placeholder="名"/>
      </div>
      <div class="input-text__table-admin-invite">
          <InputText label="メールアドレス" type="email" placeholder="xxxxx@xid.inc"/>
        </div>
        <div class="dropdown__table-admin-invite">
          <Dropdown :options="options" placeholder="ロールを選択する" label="ロール"/>
        </div>
        <div class="delete-icon__table-admin-invite" @click="removeFormData(index)">
          <img :src="deleteIcon" alt="">
        </div>
      </div>
    </div>
    <NavFooter :state-btn="stateBtn()" />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import InputText from './InputText.vue';
import Dropdown from './Dropdown.vue';
import NavFooter from './NavFooter.vue';
import deleteIcon from '@/assets/icons/delete.svg'
const options = [
  {
    value: 'option 1',
    label: 'Option 1',
  },
  {
    value: 'option 2',
    label: 'Option 2',
  },
  {
    value: 'option 3',
    label: 'Option 3',
  },
  {
    value: 'option 4',
    label: 'Option 4',
  },
  {
    value: 'option 5',
    label: 'Option 5',
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
  align-items: flex-end;
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
    align-items: flex-start;
    cursor: pointer;
}
</style>
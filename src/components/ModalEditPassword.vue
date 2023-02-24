<template>
  <div>
    <Button text='変更する' @click="() => { visible = true }" />
    <CModal :visible="visible" @close="() => { visible = false }">
      <CModalHeader>
        <CModalTitle>{{ title }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div class="wrapper-modal-body-password">
          <InputText label="新しいパスワード" type="password"/>
          <InputText label="新しいパスワードを確認" type="password" />
        </div>
      </CModalBody>
      <CModalFooter>
        <Button text="変更する" @click="()=> {visible = false}"/>
      </CModalFooter>
    </CModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import InputText from './InputText.vue';
import { CButton, CModal, CModalHeader,CModalBody, CModalTitle, CModalFooter} from '@coreui/vue';
  const visible = ref(false)
defineProps<{
  title: string
}>()
</script>

<style>
.wrapper-modal-body-password{
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>
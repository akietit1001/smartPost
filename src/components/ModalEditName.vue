<template>
  <div>
    <Button text='変更する' @click="() => { visible = true }" />
    <CModal :visible="visible" @close="() => { visible = false }">
      <CModalHeader>
        <CModalTitle>{{ title }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div class="wrapper-model-body">
          <InputText label="氏名" type="text" placehoder="入力テキスト"/>
          <InputText label="" type="text" />
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
.modal.fade.show {
  display: flex !important;
  align-items: center;
}

.wrapper-model-body{
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
.modal .modal-content{
  width: 460px;
  border-radius: 0;
}
.modal .modal-footer{
  justify-content: center;
}
</style>
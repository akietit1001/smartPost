<template>
  <div>
    <Button text='変更する' @click="() => { visible = true }" />
    <CModal :visible="visible" @close="() => { visible = false }">
      <CModalHeader>
        <CModalTitle>{{ title }}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div class="wrapper-modal-body-dropdown">
          <Dropdown />
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
import Dropdown from './Dropdown.vue';
import { CButton, CModal, CModalHeader,CModalBody, CModalTitle, CModalFooter} from '@coreui/vue';
const visible = ref(false)
defineProps<{
  title: string
}>()
</script>

<style>
.wrapper-modal-body-dropdown{
  display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #dddddd;
    border-radius: 4px;
    height: 40px;
}
</style>
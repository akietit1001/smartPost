<template> 
  <div>
    <Button text="変更する" :primary="ref(true).value" @click="modalNameVisible = true" />

    <el-dialog v-model="modalNameVisible" :title="title">
      <div class="modal-edit-name-body">
        <InputText label="氏名" type="text" placeholder="黒須" />
        <InputText label="" type="text" placeholder="黒須" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button text="変更する" :primary="ref(true).value" @click="modalNameVisible = false" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import InputText from './InputText.vue';

const modalNameVisible = ref(false)

defineProps<{
  title: string
}>()
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
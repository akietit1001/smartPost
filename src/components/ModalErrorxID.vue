<template>
  <div>
    <Button 
    text="同意します" 
    :primary="ref(true).value" 
    :width-percent="100" 
    :style="{marginTop: 20 + 'px'}" 
    @click="modalErrorXidVisible = true"/>
    <el-dialog 
    v-model="modalErrorXidVisible" 
    :title="title"
    >
        <div class="modal__error-xid-body">
          <p>申し訳ありませんが、xIDログインに問題があるようです。</p>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <Button 
            text="変更する" 
            :danger="ref(true).value" 
            @click="modalErrorXidVisible = false" />
          </span>
        </template>
      </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
const modalErrorXidVisible = ref(false);
  defineProps<{
    title: string,
  }>()
</script>

<style>
.el-dialog{
  width: 460px;
}
.modal__error-xid-body{
  text-align: center;
}

.dialog-footer{
  display: flex;
   align-items: center;
  justify-content: center;
}
</style>
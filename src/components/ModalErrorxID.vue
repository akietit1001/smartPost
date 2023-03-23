<template>
  <div>
    <Button 
    :text="t('login_conditions.agree')" 
    :primary="ref(true).value" 
    :width-percent="100" 
    :style="{marginTop: 20 + 'px'}" 
    @click="hanleMoveAdminList"/>
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
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const modalErrorXidVisible = ref(false);
const router = useRouter();
  defineProps<{
    title: string,
  }>()

const hanleMoveAdminList = () => {
  router.push('/admin')
}
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
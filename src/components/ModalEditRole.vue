<template>
  <div>
    <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="modalRoleVisible = true" />

    <el-dialog v-model="modalRoleVisible" :title="title">
      <div class="modal-edit-role-body">
        <Dropdown :options="options" :label="t('modalEditRole_1.newRole')" :placeholder="t('modalEditRole_1.chooseRole')"/>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <Button :text="t('admin_info.change')" :primary="ref(true).value" @click="modalRoleVisible = false" />
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from './Button.vue';
import Dropdown from './Dropdown.vue';

const { t } = useI18n()
const modalRoleVisible = ref(false)
defineProps<{
  title: string
}>()
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style>
/* .wrapper-modal-body-dropdown{
  display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #dddddd;
    border-radius: 4px;
    height: 40px;
} */
</style>
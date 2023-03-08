<template>
  <div>
    <div class="label">{{ props.label }}</div>
    <el-select 
    v-model="value" 
    class="m-2"
    :multiple="props.multiple"
    :placeholder="props.placeholder" 
    size="large">
    <el-option
      v-for="item in props.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
interface Dropdown{
  options: Array<{
    value: string
    label: string
  }>
  label?: string
  placeholder?: string
  multiple?: boolean
}
const props = defineProps<Dropdown>();
</script>

<style>

.el-select{
  display: block;
}

.el-input__inner{
  height: 40px;
}

.el-select.el-select--large{
  width: 100%;
}

.el-input__wrapper{
  margin-right: 12px;
}

.el-select.el-select--large .el-input{
  width: 98% !important;
}
</style>
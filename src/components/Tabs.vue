<template>
  <div>
    <el-tabs :v-model="props.activeTab" class="demo-tabs">
      <el-tab-pane :label="child.label" :name="child.name" v-for="child in props.children" :key="child.name">{{ child.component }}</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Tabs{
  children?: Array<{
  label?: string
  name?: string
  component: any
  }>
  activeTab: string
}

const props = defineProps<Tabs>();

// const activeTab = ref('first')

</script>

<style>

</style>
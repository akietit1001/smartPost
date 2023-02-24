<template>
  <div class="wrapper-input">
    <span class="label">{{ label }}</span>
    <input class="input-text" :type="type" :value="value">
  </div>
</template>

<script setup lang="ts">
interface Input{
  type: string
  value?: string | number
  label?: string
}
defineProps<Input>();
</script>

<style>
.wrapper-input{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}
.input-text{
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  height: 40px;
}
.label{
  margin: 20px 0 10px 0
}
</style>
<template>
  <div class="wrapper-input">
    <span class="label" 
    :style="{fontSize: fontSizeLabel + 'px'}">{{ label }}</span>
    <input class="input-text" 
    :id="id"
    :type="type" 
    :value="value" 
    :placeholder="placeholder" 
    :style="{fontSize: fontSize + 'px'}">
    <ErrorMessage
    :font-size="10"
    />
  </div>
</template>

<script setup lang="ts">
import ErrorMessage from '../components/ErrorMessage.vue';
interface Input{
  id?:  string
  type: string
  value?: string | number
  label?: string
  placeholder?: string
  fontSize?: number
  fontSizeLabel?: number
  error?: boolean
}
defineProps<Input>();

</script>

<style>
.wrapper-input{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}
.input-text{
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
}
.label{
  margin: 0 0 5px 0;
}

.input-text.invalid {
  border-color: #D8000C;
}
</style>
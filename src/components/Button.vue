<template>
  <button 
  class="btn" 
  :class="{'normal': props.normal, 'primary': props.primary, 'danger': props.danger, 'disabled': props.disabled}"
  :style="{width: props.widthPercent + '%'}"
  >{{ props.text }}
  </button>
</template>

<script setup lang="ts">

interface Button {
    text: String
    normal?: Boolean
    primary?: Boolean
    danger?: Boolean
    disabled?: Boolean
    widthPercent?: number
}

const props = defineProps<Button>()

</script>

<style lang="scss" scoped>
.btn{
    border: none;
    padding: 10px 30px;
    font-size: 12px;
}

.normal {
  color: #222;
}

.primary {
  background-color: #35CFAA;
  color: #FFFFFF;
  &:hover{
    background-color: #35CFAA;
    color: #FFFFFF;
    opacity: 0.8;
  }
}

.danger{
  background-color: #D8000C;
  color: #FFFFFF;
  &:hover{
    background-color: #D8000C;
    color: #FFFFFF;
  }
}
.disabled{
  background-color: #DDDDDD;
  color: #666666;
  &:hover{
    cursor: none;
  }
}
</style>
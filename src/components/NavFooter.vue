<template>
  <div class="wrapper__nav-footer">
    <Button text="完了" :class="props.stateBtn ? 'primary' : 'disabled'" />
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

const props = defineProps<{
  stateBtn: Boolean
}>()


</script>

<style lang="scss" scoped>
.wrapper__nav-footer{
  display: flex;
  justify-content: flex-end;
  height: 80px;
  padding: 20px;
  border-top: 1px solid #DDDDDD;
}
</style>

<template>
  <div class="wrapper__title-page" :style="{fontSize: fontSize + 'px'}">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  fontSize: number
}>()
</script>

<style>
.wrapper__title-page{
  text-align: center;
  width: 100%;
}
</style>
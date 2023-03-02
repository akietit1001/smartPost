<template>
  <div>
    <p :style="{fontSize: fontSize + 'px', color: '#D8000C'}">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  fontSize?: number
}>()
</script>

<style>

</style>
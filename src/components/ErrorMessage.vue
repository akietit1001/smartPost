<template>
  <div >
    <p class="error-message" :style="{fontSize: fontSize + 'px', color: '#D8000C'}"></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fontSize?: number
}>()
</script>

<style>

</style>
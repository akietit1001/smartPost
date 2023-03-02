<template>
  <div class="title">
      <span>{{ title }}</span>
      <span class="exit">このページを終了</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.title{
  display: flex;
  justify-content: space-between;
  margin: 30px 14px 25px 0;
}

.exit{
  color: #D8000C;
}

.exit:hover{
  cursor: pointer;
  text-decoration: underline #D8000C;
}
</style>
<template>
  <div class="avatar" :style="stylesAvt">
      <CAvatar :style="stylesAvt" size="lg" class="avt-user">{{ username }}</CAvatar>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { CAvatar } from '@coreui/vue';
  // const username = ref("黒太");
  const stylesAvt = {
    width: '4rem',
    height: '4rem'
  }

  defineProps<{
    username: string
  }>()
</script>

<style lang="scss">
.avatar {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.avt-user{
  background-color: #527AC2;
  color: #FFFFFF;
}
</style>
<template>
  <div class="avatar" :style="stylesAvt">
      <CAvatar :style="stylesAvt" size="lg" class="avt-user">{{ username }}</CAvatar>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { CAvatar } from '@coreui/vue';
  const username = ref("黒太");
  const stylesAvt = {
    width: '5rem',
    height: '5rem'
  }
</script>

<style lang="scss">
.avatar {
  display: flex;
  align-items: center;
}
.avt-user{
  background-color: #527AC2;
  color: #FFFFFF;
}
</style>
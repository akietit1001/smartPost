<template>
  <div class="wrapper__option-list">
    <img class="more-icon" :src="moreIcon" alt="" @click="handleShowOptionMore">
    <div class="inner__option-list" :style="{display: open ? 'flex' : 'none'}">
      <span class="option-list" 
      v-for="item in dropdownOptions" 
      :key="item.index" 
      :style="{color: item.color, cursor: 'pointer'}">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import moreIcon from '../assets/icons/more.svg';
const open = ref(false);
const dropdownOptions = [
  {
    index: 0,
    title: '詳細を見る',
    color: '#222'
  },
  {
    index: 1,
    title: '氏名の編集',
    color: '#222'
  },
  {
    index: 2,
    title: 'メールアドレスの編集',
    color: '#222'
  },
  {
    index: 3,
    title: 'グループの編集',
    color: '#222'
  },
  {
    index: 4,
    title: '再招待',
    color: '#222'
  },
  {
    index: 5,
    title: '削除',
    color: '#D8000C'
  },
]

const handleShowOptionMore = () => {
  return open.value = !open.value;
}
</script>

<style lang="scss" scoped>

.wrapper__option-list{
}
.more-icon{
  cursor: pointer;
}
.inner__option-list{
  position: absolute;
  flex-direction: column;
  width: 180px;
  right: 0;
  height: 324px;
  z-index: 2;
}

.option-list{
  height: 38px;
  &.hover{
    opacity: 0.4;
  }
}
</style>
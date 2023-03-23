<template>
  <div class="wrapper__option-list">
    <img class="more-icon" :src="moreIcon" alt="" @click="handleShowOptionMore">
    <div class="inner__option-list" :style="{display: open ? 'flex' : 'none'}">
      <ul class="option-list">
        <li class="option-item" @click="handleLog">詳細を見る</li>
        <li class="option-item">氏名の編集</li>
        <li class="option-item">メールアドレスの編集</li>
        <li class="option-item">グループの編集</li>
        <li class="option-item">再招待</li>
        <li class="option-item option-item__delete">削除</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import moreIcon from '../assets/icons/more.svg';
import { useRouter } from 'vue-router';
const open = ref(false);
const router = useRouter()

const props = defineProps<{
  id: number
}>()

const handleLog = () => {
  console.log(props.id)
  router.push({
    name: 'adminSingle',
    params: {
      id: props.id
    }
  })

  
}

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
  list-style-type: none;
  height: 38px;
  &.hover{
    opacity: 0.4;
  }
}

.option-item{
  cursor: pointer;
  margin: 5px 0;
  color: #222;
}

.option-item__delete{
  color: #D8000C;
}
</style>
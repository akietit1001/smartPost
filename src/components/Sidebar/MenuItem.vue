<template>
  <nav class="inner">
    <RouterLink class="menu-item__wrapper link" :to="props.to" @click="handleOpenSubMenu()">
    <span class="flag" :class="{active: props.selected}"></span>
    <div class="menu-item__inner">
      <img class="icon-left" :src="props.iconLeft"/>
      <div>{{ props.text }}</div>
    </div>
    <img class="icon-right" :src="props.iconRight" >
    </RouterLink>
    <div class="sub-menu-item" :style="{display: openedSubMenu ? 'flex' : 'none'}">
      <RouterLink class="link sub-link"
      :class="{active: isActive === index}"
      v-for="child, index in props.children" 
      :to="child.to" 
      :key="index"
      @click="isActive = index"
      >
      {{ child.title }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from "vue-router"
interface MenuItem{
  children?: Array<{
    title?: string
    to: string
    selected?: boolean
  }>
  text?: string
  to: string
  selected?: boolean
  iconLeft?: string
  iconRight?: string
}

const isActive = ref(-1);

const props = defineProps<MenuItem>();

const openedSubMenu = ref(false);

const handleOpenSubMenu = () => {
  isActive.value = -1;
  openedSubMenu.value = !openedSubMenu.value
}

</script>

<style lang="scss" scoped>

.menu-item__wrapper{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover{
    background-color: rgba(53, 207, 170, 0.2);
  }
}
.inner{
  display: flex;
  flex-direction: column;
}

.menu-item__inner{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.sub-menu-item{
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  transition: 0.4s ease;
  .sub-link{
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    margin-left: 45px;
    &.active{
      color: 35cfaa;
    }
  }
}

.flag{
  height: 100%;
  width: 4px;
}

.flag.active{
  background-color: #149072 !important;
}

.menu-item.active{
  background-color: #35cfaa;
  &:hover{
    background-color: #35cfaa;
  }
}

.active ~ .sub-menu-item{
  display:flex;
}

.link{
  text-decoration: none;
  color: #222;
  &:hover{
    color: #222;
  }
}
.icon-left{
  margin: 0 12px 0 20px;
}

.icon-right{
  margin-right: 30px;
}

.sub-link.active{
  color: #35cfaa;
}
</style>
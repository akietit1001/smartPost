<template>
  <div>
    <div class="wrapper__option-more" v-for="(option, index) in children" :key="option.index" :class="{select: index === option.index}">
        <div 
          :style="{color: option.color}"
          >{{ option.title }}
        </div>
    </div>
  </div>

</template>

<script setup lang="ts">
defineProps<{
  children: Array<{
    index: number
    title: string
    color: string
  }>
}>();
</script>

<style>

.wrapper__option-more{
  display: none;
  position: absolute;
  top: 23px;
  right: 49px;
  width: 180px;
  height: 286px;
  flex-direction: column;
}

.select {
  display: flex;
}
</style>
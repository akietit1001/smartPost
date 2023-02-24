<template>
  <div class="wrapper">
    <img :src="searchIcon" alt="search icon">
    <input class="input" type="text" :value="props.value" :placeholder="props.placeholder">

  </div>
</template>

<script setup lang="ts">
import searchIcon from '../assets/icons/search.svg'
interface Input{
  placeholder: string
  value?: string
}
const props = defineProps<Input>()
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  padding: 10px;
  .input{
    width: 100%;
    border: none;
    font-size: 12px;
    margin-left: 8px;
  }
  svg{
    width: 10px;
    height: 15px;
  }
}
</style>
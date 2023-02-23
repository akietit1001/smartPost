<template>
  <button class="btn">{{ props.children }}</button>
</template>

<script setup lang="ts">
interface Button {
    children: Element | String
}

const props = defineProps<Button>()

</script>

<style lang="scss" scoped>
.btn{
    border: none;
    padding: 10px 30px;
    font-size: 12px;
    background-color: #35CFAA;
    color: #FFFFFF;

    &:hover{
      background-color: #35CFAA;
      color: #FFFFFF;
    }
}
</style>
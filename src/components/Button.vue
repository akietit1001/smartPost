<template>
  <button class="btn">{{ props.text }}</button>
</template>

<script setup lang="ts">

interface Button {
    text: Element | String
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
    width: fit-content;

    &:hover{
      background-color: #35CFAA;
      color: #FFFFFF;
    }
}
</style>
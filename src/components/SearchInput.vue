<template>
  <div class="wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="14.673" height="14.673" viewBox="0 0 14.673 14.673">
      <g id="Group_7892" data-name="Group 7892" transform="translate(17.678 9.193) rotate(135)">
        <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(1 4.001)" fill="#fff" stroke="#222" stroke-width="1.5">
          <circle cx="5" cy="5" r="5" stroke="none"/>
          <circle cx="5" cy="5" r="4.25" fill="none"/>
        </g>
        <line id="Line_8" data-name="Line 8" y1="6" transform="translate(6 -1)" fill="none" stroke="#222" stroke-width="1.5"/>
      </g>
    </svg>
    <input class="input" type="text" :value="props.value" :placeholder="props.placeholder">

  </div>
</template>

<script setup lang="ts">
interface Input{
  placeholder: string
  value?: string
}
const props = defineProps<Input>()
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
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
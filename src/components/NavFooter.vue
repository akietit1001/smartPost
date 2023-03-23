<template>
  <div class="wrapper__nav-footer">
    <Button :text="t('admin_invite.complete')" :class="props.stateBtn ? 'primary' : 'disabled'" @click="handleSubmit"/>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import userApi from '@/apis/userApi';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps<{
  stateBtn: Boolean
  params: object
}>()

const handleSubmit = async () => {
  // const res = await userApi.createUser(props.params)
  // if(res) {
  //   console.log(res)
  // }
  console.log(props.params)
}


</script>

<style lang="scss" scoped>
.wrapper__nav-footer{
  display: flex;
  justify-content: flex-end;
  height: 80px;
  padding: 20px;
  border-top: 1px solid #DDDDDD;
}
</style>

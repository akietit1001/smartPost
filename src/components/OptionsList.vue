<template>
  <div class="wrapper__option-list">
    <img class="more-icon" :src="moreIcon" alt="" @click="handleShowOptionMore">
    <div class="inner__option-list" :style="{display: open ? 'flex' : 'none'}">
      <ul class="option-list">
        <li class="option-item" @click="handleLog">{{ t('option_list.viewDetail') }}</li>
        <li class="option-item">{{ t('option_list.editName') }}</li>
        <li class="option-item">{{ t('option_list.editEmail') }}</li>
        <li class="option-item">{{ t('option_list.editGroup') }}</li>
        <li class="option-item">{{ t('option_list.reinvitation') }}</li>
        <li class="option-item option-item__delete" @click="handleOpenModalDelete">{{ t('option_list.delete') }}</li>
      </ul>
    </div>
    <ModalDeleteUser title="Delete" :modal-delete-visible="modalDeleteVisible" :close-modal="handleCloseModalDelete"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import moreIcon from '../assets/icons/more.svg';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import userApi from '@/apis/userApi';
import ModalDeleteUser from './ModalDeleteUser.vue';

const { t } = useI18n();


const open = ref(false);
const modalDeleteVisible = ref(false)
const router = useRouter()

const props = defineProps<{
  id: number
}>()

const handleLog = () => {
  router.push({
    name: 'adminSingle',
    params: {
      id: props.id
    }
  })
}

const handleOpenModalDelete = () => {
  return modalDeleteVisible.value = true
}

const handleCloseModalDelete = () => {
  return modalDeleteVisible.value = false
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

.option-list>li{
  margin: 10px 0;
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
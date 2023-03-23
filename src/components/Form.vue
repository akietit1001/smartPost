<template>
  <div class="wrapper__form">
    <TitlePage :title="t('login.title')" :font-size="20" />
      <div class="tabs__login-layout">
        <el-tabs v-model="activeTab" class="demo-tabs">
          <el-tab-pane :label="t('login.usexID')" name="first">Hi</el-tab-pane>
          <el-tab-pane :label="t('login.useEmail')" name="second"><RouterView /></el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TitlePage from './TitlePage.vue';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()


const activeTab = ref('first')
  
</script>

<style>

.wrapper__form{
  width: 28vw;
  height: 83vh;
  padding: 30px;
  border: 1px solid #DDDDDD;
}

.tabs__login-layout{
  width: 100%;
  height: 100%;
}

.demo-tabs{
  height: 100%;
}

.demo-tabs > .el-tabs__content {
  height: 85%;
  color: #6b778c;
  font-size: 16px;
}

#pane-second{
  height: 100%;
}
.el-tabs__item.is-top:hover{
    color: #35CFAA;
}
.el-tabs__item.is-active{
    
    color: #222222 !important;
}
.el-tabs__active-bar.is-top{
    height: 4px;
    background-color: #35CFAA;
}
</style>
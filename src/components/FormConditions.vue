<template>
  <div class="wrapper__form-conditions">
    <TitlePage title="SmartPOSTログイン" :font-size="20" />
      <div class="tabs__login-layout-conditions">
        <el-tabs v-model="activeTab" class="demo-tabs-conditions">
          <el-tab-pane label="プライバシーとポリシー" name="first"><RouterView /></el-tab-pane>
          <el-tab-pane label="利用規約" name="second">Hi</el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TitlePage from './TitlePage.vue';
import { RouterView } from 'vue-router';
const activeTab = ref('first')

</script>

<style>

.wrapper__form-conditions{
  width: 460px;
  height: 720px;
  padding: 30px;
  border: 1px solid #DDDDDD;
}

.tabs__login-layout-conditions{
  width: 100%;
  height: 100%;
}

.demo-tabs-conditions{
  height: 100%;
}

.demo-tabs-conditions > .el-tabs__content {
  height: 85%;
  color: #6b778c;
  font-size: 16px;
}

#pane-second, #pane-first{
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
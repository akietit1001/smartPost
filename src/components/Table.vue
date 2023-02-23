<template>
  <el-table :data="tableData" style="width: 100%" height="510" :border="isBorder" :table-layout="tableLayout">
    <el-table-column prop="name" label="氏名"><AvatarUserVue /></el-table-column>
    <el-table-column prop="email" label="メールアドレス"/>
    <el-table-column prop="role" label="ロール" />
    <el-table-column prop="last_login" label="最終ログイン" />
    <el-table-column prop="options" lable="" width="50">...</el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
import AvatarUserVue from "./AvatarUser.vue";
const isBorder = ref(true);
const tableLayout = ref('fixed')
const tableData = [
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
  {
    name: '黒須 太郎',
    email: 'xxxxx@xid.inc',
    role: 'マスター管理者',
    last_login: '2022年1月1日'
  },
]
</script>

<style>
.el-table{
  margin-top: 10px;
  font-size: 12px;
  border-top: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
  
}
.el-table__footer-wrapper, .el-table__header-wrapper{
  border-bottom: 2px solid #DDDDDD
}
</style>
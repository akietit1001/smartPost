<template>
  <el-table :data="data" style="width: 100%" height="510" :border="isBorder" :table-layout="tableLayout">
    <el-table-column sortable prop="firstName" label="氏名" ><AvatarUserVue  /></el-table-column>
    <el-table-column sortable prop="email" label="メールアドレス" />
    <el-table-column sortable prop="role" label="ロール" />
    <el-table-column sortable prop="lastLogin" label="最終ログイン" />
    <el-table-column prop="options" lable="" width="50">
      <OptionsList />
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
import AvatarUserVue from "./AvatarUser.vue";
import OptionsList from "./OptionsList.vue";
const isBorder = ref(true);
const tableLayout = ref('fixed')

defineProps<{
  data: Array<any>
}>()



// const tableData = [
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
//   {
//     name: '黒須 太郎',
//     email: 'xxxxx@xid.inc',
//     role: 'マスター管理者',
//     last_login: '2022年1月1日'
//   },
// ]
// const dropdownOptions = [
//   {
//     index: 0,
//     title: '詳細を見る',
//     color: '#222'
//   },
//   {
//     index: 1,
//     title: '氏名の編集',
//     color: '#222'
//   },
//   {
//     index: 2,
//     title: 'メールアドレスの編集',
//     color: '#222'
//   },
//   {
//     index: 3,
//     title: 'グループの編集',
//     color: '#222'
//   },
//   {
//     index: 4,
//     title: '再招待',
//     color: '#222'
//   },
//   {
//     index: 5,
//     title: '削除',
//     color: '#D8000C'
//   },
// ]
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

.el-table .el-table__cell{
  z-index: unset;
}
</style>
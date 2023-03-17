<template>
  <el-table :data="data" style="width: 100%" height="510" :border="isBorder" :table-layout="tableLayout">
    <el-table-column sortable prop="firstName" label="氏名" ><AvatarUserVue :username="data.firstName" :name="data.firstName"  /></el-table-column>
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
import { useUserStore } from "@/stores/users";
const isBorder = ref(true);
const tableLayout = ref('fixed')

defineProps<{
  data: Array<any>
}>()

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
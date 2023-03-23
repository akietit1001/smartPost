<template>
  <el-table :data="data" style="width: 100%" height="510" :border="isBorder" :table-layout="tableLayout">
    <el-table-column sortable prop="firstName" :label="t('listUser.name')">
      <template #default="scope">
        <AvatarUserVue :username="scope.row.firstName" :name="scope.row.firstName"  />
      </template>
    </el-table-column>
    <el-table-column sortable prop="email" :label="t('listUser.email')" />
    <el-table-column sortable prop="role" :label="t('listUser.role')" />
    <el-table-column sortable prop="lastLogin" :label="t('listUser.lastLogin')"> 
      <template #default="scope">
        {{ FormatTime(scope.row.lastLogin) }}
      </template>  
    </el-table-column>
    <el-table-column prop="options" lable="" width="50">
      <template #default="scope">
        <OptionsList :id="scope.row.id" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
import AvatarUserVue from "./AvatarUser.vue";
import OptionsList from "./OptionsList.vue";
// import { useUserStore } from "@/stores/users";
import FormatTime from "@/process/FormatTime";
import { useI18n } from "vue-i18n";

const { t } = useI18n()

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
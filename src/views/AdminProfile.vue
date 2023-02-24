<template>
  <div>
      <HeaderVue />
      <CRow>
          <CCol sm="2">
              <Sidebar />
          </CCol>
          <CCol sm="10">
              <TableInfo />
          </CCol>
      </CRow>
  </div>
</template>

<script setup lang="ts">
import { CRow, CCol } from '@coreui/vue';
import HeaderVue from '@/components/Header.vue';
import TableInfo from '@/components/TableInfo.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<style lang="scss" scoped>
.row{
  padding-right: 20px;
}
</style>
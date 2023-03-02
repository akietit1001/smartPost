<template>
  <div>
        <HeaderVue />
        <CRow>
            <CCol sm="2">
                <Sidebar />
            </CCol>
            <CCol sm="10">
                <RouterView />
            </CCol>
        </CRow>
    </div>
</template>

<script setup lang="ts">
import { CRow, CCol } from '@coreui/vue';
import HeaderVue from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import { RouterView} from 'vue-router';
</script>

<style lang="scss" scoped>

.row{
  padding-right: 20px;
}
</style>
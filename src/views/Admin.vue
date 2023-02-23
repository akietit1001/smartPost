<script setup lang="ts">
import { CRow, CCol } from '@coreui/vue';
import HeaderVue from '@/components/Header.vue';
import ListuserVue from '@/components/Listuser.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
</script>

<template>
    <div>
        <HeaderVue />
        <CRow>
            <CCol sm="2">
                <Sidebar />
            </CCol>
            <CCol sm="10">
                <ListuserVue />
            </CCol>
        </CRow>
    </div>
</template>

<style lang="scss" scoped>
.row{
    padding-right: 20px;
}
</style>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { CRow, CCol } from '@coreui/vue';
import HeaderVue from '../components/Header.vue';
import SidebarVue from '../components/Sidebar/Sidebar.vue';
</script>

<template>
    <div>
        <HeaderVue />
        <CRow>
            <CCol sm="2">
                <SidebarVue />
            </CCol>
            <CCol>
                Content
            </CCol>
        </CRow>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: 'AdminPage',
})
</script>
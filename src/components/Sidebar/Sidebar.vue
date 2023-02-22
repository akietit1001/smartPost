<script setup>
import { defineComponent } from "vue";
import MenuVue from "./Menu/Menu.vue";
import MenuItemVue from "./Menu/MenuItem.vue";
// import {CSidebar, CSidebarBrand, CNavItem, CNavGroup, CSidebarToggler} from '@coreui/vue'
</script>

<template>
    <aside>
        <MenuItemVue :title="プロジェクト一覧" to="/" />
        <MenuItemVue :title="プロジェクト一覧" to="/" />
    </aside>
</template>

<script>
export default defineComponent({
    name: 'SidebarComponent'
})
</script>

<style>

</style>
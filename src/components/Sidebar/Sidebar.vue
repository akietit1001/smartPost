<template>
    <aside class="wrapper">
        <nav class="inner">
            <MenuItemVue v-for="item in itemsSidebar" :key="item.title" :title="item.title" :to="item.path" isActive=""/>
        </nav>
        <div class="service">
            <QuestionsVue />
            <SecurityPolicyVue />
            <ServicePolicyVue />
            <CopyrightVue />
        </div>
    </aside>
</template>

<script setup lang="ts">
import MenuItemVue from "./Menu/MenuItem.vue";
import QuestionsVue from "../Policy/Questions.vue";
import SecurityPolicyVue from "../Policy/SecurityPolicy.vue"
import ServicePolicyVue from "../Policy/ServicePolicy.vue"
import CopyrightVue from "../Copyright.vue";

const itemsSidebar = [
    {
        title: 'プロジェクト一覧',
        path: '/admin/0',
    },
    {
        title: 'Welcomeメッセージ',
        path: '/admin/1'
    },
    {
        title: 'アカウント設定',
        path: '/admin/2'
    },
    {
        title: '利用者一覧',
        path: '/admin/#'
    },
    {
        title: '利用ログ一覧',
        path: '/admin/4'
    },
    {
        title: 'QRコード管理',
        path: '/admin/5'
    }
]
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 20px 0px;
}

.inner{
    display: flex;
    flex-direction: column;
}

.service{
    padding: 20px;
}

</style>
<template>
    <aside class="sidebar-wrapper">
        <nav class="inner">
    <el-menu
        default-active="0"
        active-text-color="#35CFAA"
        class="el-menu-vertical-demo"
        v-for="item in itemsSidebar"
        :key="item.index"
        router
      >
        <el-menu-item :index="item.index" v-show="!item.child">
            <template #title>
                <RouterLink class="link" :to="item.path" :active-class="'active'">
                    <el-icon><img class="icon" :src="item.iconLeft" alt=""></el-icon>
                    <span>{{ item.title }}</span>
                </RouterLink>
            </template>
        </el-menu-item>

        <el-sub-menu v-show="item.child" :index="item.index">
            <template #title>
                <RouterLink class="link" :to="item.path" :active-class="'active'">
                    <el-icon><img :src="item.iconLeft" alt=""></el-icon>
                    <span>{{ item.title }}</span>
                </RouterLink>
            </template>
            <el-menu-item v-for="itemChild in item.child" :key="itemChild.indexChild" :index="itemChild.indexChild">
                <RouterLink class="link" :to="itemChild.linkChild">{{ itemChild.titleChild }}</RouterLink>
            </el-menu-item>
        </el-sub-menu>
        </el-menu>
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
import QuestionsVue from "./Policy/Questions.vue";
import SecurityPolicyVue from "./Policy/SecurityPolicy.vue"
import ServicePolicyVue from "./Policy/ServicePolicy.vue"
import CopyrightVue from "./Copyright.vue";
import letterIcon from "../assets/icons/letter.svg";
import messageIcon from "../assets/icons/message.svg";
import contactIcon from "../assets/icons/contact.svg";
import productIcon from "../assets/icons/product.svg";
import shieldIcon from "../assets/icons/shield.svg";
import QR_Icon from "../assets/icons/QR.svg";

const itemsSidebar = [
    {
        index: '1',
        title: 'プロジェクト一覧',
        path: '/admin/0',
        iconLeft: letterIcon,
    },
    {
        index: '2',
        title: 'Welcomeメッセージ',
        path: '/admin/1',
        iconLeft: messageIcon,
    },
    {
        index: '3',
        title: 'アカウント設定',
        path: '/admin',
        iconLeft: shieldIcon,
        child: [
            {
                indexChild: '3-1',
                titleChild: 'カスタムポリシー',
                linkChild: '/admin/#/1'
            },
            {
                indexChild: '3-2',
                titleChild: 'カスタムロール',
                linkChild: '/admin/#/2'
            },
            {
                indexChild: '3-3',
                titleChild: 'グループ',
                linkChild: '/admin/#/3'
            },
            {
                indexChild: '3-4',
                titleChild: '管理者',
                linkChild: '/admin/#/4'
            },
        ]
    },
    {
        index: '3',
        title: '利用者一覧',
        path: '/admin/2',
        iconLeft: contactIcon,
    },
    {
        index: '4',
        title: '利用ログ一覧',
        path: '/admin/4',
        iconLeft: productIcon,
    },
    {
        index: '5',
        title: 'QRコード管理',
        path: '/admin/5',
        iconLeft: QR_Icon,
    }
]


</script>

<style>
.sidebar-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 20px 0px;
    border-right: 1px solid #DDDDDD;
}

.inner{
    display: flex;
    flex-direction: column;
}

.service{
    padding: 20px;
}

.link{
    text-decoration: none;
    color: #222;
}

.link:hover{
    color: #35CFAA;
}
/*
.el-sub-menu__title{
    background-color: #35CFAA;
    color: #fff;
}

.el-sub-menu.is-active{
    background-color: #35CFAA;
    color: #fff;
}

.el-sub-menu__title:hover{
    background-color: #35CFAA !important;
    color: #fff !important;
}

.el-sub-menu.is-active:hover{
    background-color: #35CFAA;
    color: #fff;
}

.el-sub-menu__title .router-link-active.router-link-exact-active.link{
    background-color: #35CFAA;
    color: #fff;
}

.el-menu-item.is-active .router-link-active.router-link-exact-active.link{
    color: #35CFAA;
} */


</style>
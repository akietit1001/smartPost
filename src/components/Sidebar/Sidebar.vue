<template>
  <aside class="sidebar-wrapper">
      <nav class="inner">
          <MenuItem v-for="item, index in itemsSidebar"
          class="menu-item"
          :key="index"
          :text="item.title"
          :to="item.path" 
          :selected="selected === index"
          :class="{active: selected === index}"
          @click="selected = index"
          :icon-left="item.iconLeft"
          :icon-right="item.child ? downArrow : ''"
          :children="item.child"
          />
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
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
import QuestionsVue from "../Policy/Questions.vue";
import SecurityPolicyVue from "../Policy/SecurityPolicy.vue"
import ServicePolicyVue from "../Policy/ServicePolicy.vue"
import CopyrightVue from "../Copyright.vue";
import letterIcon from "@/assets/icons/letter.svg";
import downArrow from "@/assets/icons/downArrow.svg"
import messageIcon from "@/assets/icons/message.svg";
import contactIcon from "@/assets/icons/contact.svg";
import productIcon from "@/assets/icons/product.svg";
import shieldIcon from "@/assets/icons/shield.svg";
import QR_Icon from "@/assets/icons/QR.svg";
import { useI18n } from "vue-i18n";

const { t } = useI18n()


const selected = ref(-1);
const itemsSidebar = [
  {
      index: '1',
      title: t('sidebar.projectList'),
      path: '/admin/#',
      iconLeft: letterIcon,
  },
  {
      index: '2',
      title: t('sidebar.messageWelcome'),
      path: '/admin/#',
      iconLeft: messageIcon,
  },
  {
      index: '3',
      title: t('sidebar.accountSetting'),
      path: '/admin/#',
      iconLeft: shieldIcon,
      child: [
          {
              title: t('sidebar.customPolicy'),
              to: '/admin/#'
          },
          {
              title: t('sidebar.customRoll'),
              to: '/admin/#'
          },
          {
              title: t('sidebar.group'),
              to: '/admin/#'
          },
          {
              title: t('sidebar.admin'),
              to: '/admin/#'
          },
      ]
  },
  {
      index: '3',
      title: t('sidebar.userList'),
      path: '/admin/main',
      iconLeft: contactIcon,
  },
  {
      index: '4',
      title: t('sidebar.usageLogList'),
      path: '/admin/#',
      iconLeft: productIcon,
  },
  {
      index: '5',
      title: t('sidebar.QRcode'),
      path: '/admin/#',
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

.active{

}


</style>
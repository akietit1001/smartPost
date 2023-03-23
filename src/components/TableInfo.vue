<template>
  <div class="wrapper">
    <NavSubVue :title="t('admin_info.adminInfo')"/>
    <div :key="key">
      <span class="info-user-title"> {{ fullname + ' ' + t('admin_info.infoOn') }}</span>
      <div class="label-avt">{{ t('admin_info.avatar') }}</div>
      <div class="avt-box">
        <Avatar :username="getterUsers[props.id-1].firstName.slice(0,1).toUpperCase()" />
        <Button :text="t('admin_info.chooseFile')" :primary="ref(true).value" />
      </div>
    </div>
    <div class="inner">
      <p class="basic-title">{{ t('admin_info.basicInfo') }}</p>
      <div class="name">
        <div class="box">
          <div class="label">{{ t('listUser.name') }}</div>
          <div class="content">{{ fullname }}</div>
        </div>
        <ModalEditName :title="t('option_list.editName')" />
      </div>
      <div class="email">
        <div class="box">
          <div class="label">{{ t('login.email') }}</div>
          <div class="content">{{ getterUsers[props.id-1].email }}</div>
        </div>
        <ModalReInvite :title="t('option_list.reinvitation')" :name="fullname" :email="getterUsers[props.id-1].email"/>
      </div>
      <div class="password">
        <div class="box">
          <div class="label">{{ t('login.password') }}</div>
          <input class="content" type="password" :value="getterUsers[props.id-1].password" disabled/>
        </div>
        <ModalEditPassword :title="t('modalUpdatePassword.updatePassword')" />
      </div>
      <div class="role">
        <div class="box">
          <div class="label">{{ t('listUser.role') }}</div>
          <div class="content">{{ getterUsers[props.id-1].role }}</div>
        </div>
        <ModalEditRole :title="t('modalEditRole_1.editRole')" />
      </div>
      <div class="group">
        <div class="box">
          <div class="label">{{ t('sidebar.group') }}</div>
          <div class="content">
            <span>
              グループ A
            </span>
            <span>
              グループ B
            </span><span>
              グループ C
            </span>
          </div>
        </div>
        <ModalEditGroup :title="t('modalEditGroup.groupSetting')"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavSubVue from './NavSub.vue';
import Button from './Button.vue'
import Avatar from './Avatar.vue';
import ModalEditName from './ModalEditName.vue';
import ModalEditRole from './ModalEditRole.vue';
import ModalEditPassword from './ModalEditPassword.vue'
import ModalReInvite from './ModalReInvite.vue';
import ModalEditGroup from './ModalEditGroup.vue'
import { useCurrentUserStore } from '@/stores/currentUser';
import { useUserStore } from '@/stores/users';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps<{
  id?: number
}>()


const userStore = useUserStore();

const { getterUsers, key } = userStore;

// const currentUserStore = useCurrentUserStore();

// const { getterCurrentUser } = currentUserStore;

const fullname = `${getterUsers[props.id-1].firstName} ${getterUsers[props.id-1].lastName}`
</script>

<style scoped>

.avatar-lg {
    width: 4rem;
    height: 4rem;
}
.avt-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
}

.basic-title{
  margin: 20px 0 10px 0;
}

.info-user-title{
  font-size: 20px;
}

.label-avt{
  margin: 10px 0;
}

.name, .email, .password, .role, .group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 105px;
  border: 1px solid #DDDDDD;
  padding: 20px
}

.name {
  border-radius: 8px 8px 0 0;
}

.group {
  border-radius: 0 0 8px 8px;
}

.email, .password, .role, .group {
  border-top: none;
}

.password .content{
  border: none;
}


.inner{
  display: flex;
  flex-direction: column;
}

.box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.box .label{
  color: #666666;
  font-size: 12px;
  margin: 0 0 5px 0 !important;
}
.content{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
</style>
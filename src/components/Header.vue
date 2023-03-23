<template>
    <div class="wrapper__header">
        <logoVue />
        <AvatarUserVue :name="fullname" :username="getterCurrentUser.firstName.slice(0,1).toUpperCase()" />
    </div>
</template>

<script lang="ts" setup>
    import logoVue from '../assets/logo.vue';
    import AvatarUserVue from './AvatarUser.vue';
    import { useCurrentUserStore } from '@/stores/currentUser';
    
    const { getterCurrentUser } = useCurrentUserStore()
    
    const fullname = getterCurrentUser.firstName + " " + getterCurrentUser.lastName;
    
</script>

<style lang="scss">
.wrapper__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 30px;
    border-bottom: 1px solid #DDDDDD;
}
</style>
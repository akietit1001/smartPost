<template>
    <div class="wrapper__header">
        <logoVue />
        <AvatarUserVue :name="fullname" :username="getterCurrentUser.first_name.slice(0,1)" />
    </div>
</template>

<script lang="ts" setup>
    import logoVue from '../assets/logo.vue';
    import AvatarUserVue from './AvatarUser.vue';
    import { useCurrentUserStore } from '@/stores/currentUser';
    
    const { getterCurrentUser } = useCurrentUserStore()
    
    const fullname = getterCurrentUser.first_name + " " + getterCurrentUser.last_name;
    
    console.log(getterCurrentUser)
    
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
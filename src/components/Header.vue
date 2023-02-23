<template>
    <div class="wrapper__header">
        <logoVue />
        <AvatarUserVue />
    </div>
</template>

<script lang="ts" setup>
    import logoVue from '../assets/logo.vue';
    import AvatarUserVue from './AvatarUser.vue';
</script>

<style lang="scss">
.wrapper__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 20px;
    border-bottom: 1px solid #FDFDFD
}
</style>
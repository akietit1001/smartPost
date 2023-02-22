<script setup>
    import { defineComponent } from 'vue';
    import logoVue from '../assets/logo.vue';
    import AvatarUserVue from './AvatarUser.vue';
</script>

<template>
    <div class="wrapper__header">
        <logoVue />
        <AvatarUserVue />
    </div>
</template>

<script>
export default defineComponent({
    name: 'HeaderComponent'
})
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
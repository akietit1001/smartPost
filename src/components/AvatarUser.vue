<template>
    <div class="avt">
        <CAvatar class="avt-user">{{ username.slice(0,1).toUpperCase() }}</CAvatar>
        <span class="name-user">{{ name }}</span>
    </div>
</template>

<script setup lang="ts">
    import { CAvatar } from '@coreui/vue';

    defineProps<{
        username: string
        name: string
    }>()
</script>

<style lang="scss">
.avt {
    display: flex;
    align-items: center;
}
.avt-user{
    background-color: #527AC2;
    color: #FFFFFF;
}
.name-user {
    padding: 0 5px;
}
</style>
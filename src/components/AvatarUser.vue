<template>
    <div class="avt">
        <CAvatar class="avt-user">{{ username }}</CAvatar>
        <span class="name-user">{{ name }}</span>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { CAvatar } from '@coreui/vue';
    const username = ref("黒太");
    const name = ref("黒須 太郎")
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
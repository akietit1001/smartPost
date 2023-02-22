<script setup>
    import { defineComponent, ref } from "vue";
    import { CAvatar } from '@coreui/vue';
    const username = ref("K");
    const name = ref("Kiet")
</script>

<template>
    <div class="avt">
        <CAvatar class="avt-user">{{ username }}</CAvatar>
        <span class="name-user">{{ name }}</span>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'AvatarUser',
    })
</script>

<style lang="scss">
.avt {
    display: flex;
    align-items: center;
}
.avt-user{
    background-color: #527AC2;
}
.name-user {
    padding: 0 5px;
}
</style>

<template>
    <div class="tab">
        <span class="flag-tab"></span>
        <RouterLink class="menu-item" :active-class="'active'" :to="props.to">{{ props.title }}</RouterLink>
    </div>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router'
interface MenuItem{
    to: string
    title: string
}

const props = defineProps<MenuItem>();

</script>

<style lang="scss" scoped>
.menu-item{
    text-decoration: none;
    color: #222222;
    height: 50px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.active.router-link-exact-active.active{
    background-color: #35CFAA;
    color: #FFFFFF;
}

.tab{
    position: relative;
}

.flag-tab.active{
    position: absolute;
    height: 100%;
    width: 5px;
    display: inline-block;
    background-color: #149072;
}
</style>
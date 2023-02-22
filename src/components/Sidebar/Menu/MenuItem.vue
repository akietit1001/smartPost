
<template>
    <RouterLink :to="to">{{ title }}</RouterLink>
</template>

<script>
import {RouterLink} from 'vue-router'
export default ({
    name: 'MenuItem',
    props: {
        title: String,
        to: String,
    },
    components: {
        RouterLink
    }
})
</script>

<style>

</style>
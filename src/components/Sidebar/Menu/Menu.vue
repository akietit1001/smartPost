<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: 'MenuComponent',
    props: {
        children: Element
    }
})
</script>

<template>
    <nav>{{ props.children }}</nav>
</template>
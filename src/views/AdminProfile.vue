<template>
  <TableInfo :id="id"/>
</template>

<script setup lang="ts">
import TableInfo from '@/components/TableInfo.vue';
// import ModalReInvite from '@/components/ModalReInvite.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const id = router.currentRoute.value.params.id*1
</script>

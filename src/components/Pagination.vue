<template>
  <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :pager-count="paperCount"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="2000"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n';

const { t }= useI18n()

onMounted(()=>{
  const goto = document.querySelector('.el-pagination__goto');
  goto.textContent = t('pagination.goto');
})

const currentPage = ref(1)
const pageSize = ref(100)
const paperCount = ref(6);
const small = ref(false)
const background = ref(true)
const disabled = ref(false)
</script>

<style>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block {
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
}
.el-pagination.is-background .btn-next.is-active, .el-pagination.is-background .btn-prev.is-active, .el-pagination.is-background .el-pager li.is-active{
  background-color: #35CFAA !important;
  border-radius: 50%;
}
</style>
<template>
    <div class="wrapper">
        <div class="list-title">管理者一覧</div>
        <Button class="btn-add" :primary="ref(true).value" :text="'+ 管理者の追加'" />
        <div>
            <el-tabs v-model="activeName" class="demo-tabs">
                <SearchInput :placeholder="'テキストを検索'" />
                <el-tab-pane label="登録済み" name="first"><TableVue /></el-tab-pane>
                <el-tab-pane label="招待中" name="second"><TableVue /></el-tab-pane>
            </el-tabs>
        </div>
        <Pagination />
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import SearchInput from './SearchInput.vue';
import TableVue from './Table.vue';
import Pagination from './Pagination.vue'
import { ref } from 'vue';

const activeName = ref('first')

</script>

<style>

.list-title{
    margin-top: 20px;
    font-size: 20px;
}
.btn-add{
    margin: 20px 0;
}
.icon-plus{
    margin-right: 5px;
}
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 16px;
}
.el-tabs__item.is-top:hover{
    color: #35CFAA;
}
.el-tabs__item.is-active{
    
    color: #35CFAA !important;
}
.el-tabs__active-bar.is-top{
    background-color: #35CFAA;
}
</style>
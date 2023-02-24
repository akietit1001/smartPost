<template>
  <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <p class="title-dropdown">役割を選択する</p>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item >Action 1</el-dropdown-item>
            <el-dropdown-item >Action 2</el-dropdown-item>
            <el-dropdown-item >Action 3</el-dropdown-item>
            <el-dropdown-item >Action 4</el-dropdown-item>
            <el-dropdown-item >Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>

<script setup lang="ts">

</script>

<style>
.modal .el-dropdown{
  width: 400px;
}
.el-dropdown-link{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.title-dropdown{
  margin: 0;
}
</style>
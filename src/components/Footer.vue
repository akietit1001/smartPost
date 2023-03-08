<template>
  <div class="wrapper__footer">
    <CopyrightVue />
    <div class="service__footer">
      <QuestionsVue />
      <SecurityPolicy />
      <ServicePolicy />
    </div>
  </div>
</template>

<script setup lang="ts">
import CopyrightVue from "./Copyright.vue";
import QuestionsVue from "./Policy/Questions.vue";
import SecurityPolicy from "./Policy/SecurityPolicy.vue";
import ServicePolicy from "./Policy/ServicePolicy.vue";
</script>

<style>
.wrapper__footer {
  display: flex;
  justify-content: space-between;
  width: 75vw;
}
.service__footer{
  display: flex;
  justify-content: space-around;
  width: 35%;
}
</style>
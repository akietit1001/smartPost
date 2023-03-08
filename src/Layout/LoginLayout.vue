<template>
  <div class="wrapper__login-layout">
    <div>
      <logoVue />
    </div>
    <RouterView />
    <div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import logoVue from "../assets/logo.vue";
import Footer from '../components/Footer.vue'
</script>

<style>
.wrapper__login-layout{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px 50px;
}
</style>
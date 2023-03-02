<template>
  <div class="wrapper__login-layout">
    <div>
      <logoVue />
    </div>
    <div>
      <Form />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import logoVue from "../assets/logo.vue";
import Form from "../components/Form.vue";
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
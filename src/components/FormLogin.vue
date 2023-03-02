<template>
  <div class="wrapper__form-login">
    <div>
      <div>
      <p class="paragraph__form-login">xIDアカウントを使用してログインします</p>
    </div>
    <div>
      <InputText
      @change="handleChangeEmail"
      type="email" 
      label="メールアドレス" 
      placeholder="入力テキスト" 
      :font-size="12" 
      :font-size-label="10"
      :error="error.email"/>
      <InputText
      @change="handleChangePass"
      type="password" 
      label="パスワード" 
      placeholder="入力テキスト" 
      :font-size="12" 
      :font-size-label="10"
      :error="error.password"/>
    </div>
    <Button text="ログイン" :primary="ref(true).value" :width-percent="100" :style="styleBtn" @click="handleSubmit"/>
    </div>
    <RouterLink class="link__form-login" to="/forgotpassword">パスワードをお忘れですか？</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from '../components/InputText.vue'
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router'
const styleBtn = {
  'marginTop': '20px'
}
const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref({
  email: false,
  password: false
});
const handleChangeEmail = (e) => {
  email.value = e.target.value
}

const handleChangePass = (e) => {
  password.value = e.target.value
}

const handleSubmit = () => {
  router.push('/login/invite')
}


</script>

<style>
.wrapper__form-login{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.paragraph__form-login {
  margin-top: 10px;
  color: #222;
  font-size: 12px;
}

.link__form-login{
  text-decoration: none;
  color: #222;
  font-size: 12px;
}
.link__form-login:hover{
  text-decoration: underline;
  color: #222;
}
</style>
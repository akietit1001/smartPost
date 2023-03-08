<template>
  <div class="wrapper__form-login-invite">
  <div>
    <div>
    <p class="paragraph__form-login-invite">パスワードを入力してください。</p>
  </div>
  <div>
    <InputText
    @change="handleChangeEmail"
    type="email" 
    label="新しいパスワード" 
    placeholder="入力テキスト" 
    :font-size="12" 
    :font-size-label="10"
    :error="error.email"/>
    <InputText
    @change="handleChangePass"
    type="password" 
    label="パスワードの確認" 
    placeholder="入力テキスト" 
    :font-size="12" 
    :font-size-label="10"
    :error="error.password"/>
  </div>
  <Button text="ログイン" :primary="ref(true).value" :width-percent="100" :style="styleBtn" @click="handleSubmit"/>
  </div>
  <RouterLink class="link__form-login-invite" to="/forgotpassword">パスワードをお忘れですか？</RouterLink>
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
  if(email.value === '') {
    error.value.email = true
    return;
  }
  if(password.value === '') {
    error.value.password = true
    return;
  }
  router.push('/login/conditions')
}
</script>

<style>
.wrapper__form-login-invite{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.paragraph__form-login-invite {
  margin-top: 10px;
  color: #222;
  font-size: 12px;
}

.link__form-login-invite{
  text-decoration: none;
  color: #222;
  font-size: 12px;
}
.link__form-login-invite:hover{
  text-decoration: underline;
  color: #222;
}
</style>
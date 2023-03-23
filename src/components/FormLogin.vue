<template>
  <div class="wrapper__form-login">
    <div>
      <div>
        <p class="paragraph__form-login">{{ t('login.loginByxIDAccount') }}</p>
      </div>
      <div>
        <InputText
        id="email"
        @change="handleChangeEmail"
        type="email" 
        :label="t('login.email')" 
        :placeholder="t('login.enter')" 
        :font-size="12" 
        :font-size-label="10"
        :error="error.email"/>
        <InputText
        id="password"
        @change="handleChangePass"
        type="password" 
        :label="t('login.password')" 
        :placeholder="t('login.enter')" 
        :font-size="12" 
        :font-size-label="10"
        :error="error.password"/>
      </div>
        <Button :text="t('login.loginBtn')" :primary="ref(true).value" :width-percent="100" :style="styleBtn" @click="handleSubmit"/>
    </div>
    <RouterLink class="link__form-login" to="/forgotpassword">{{ t('login.forgotPassword') }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Validator from '@/process/Validator'
import InputText from '../components/InputText.vue'
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router'
import userApi from '@/apis/userApi'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const styleBtn = {
  'marginTop': '20px'
}
const router = useRouter();
const email = ref('');
const password = ref('');
const currentUserStore = useCurrentUserStore()
const { updateCurrentUser } = currentUserStore;
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


onMounted(()=>{
  Validator({
    form: '.wrapper__form-login',
    errorSelector: '.error-message',
    rules: [
      Validator.isRequired('#email', 'Enter your email'),
      Validator.isEmail('#email', 'This is not email'),
      Validator.isRequired('#password', t('login.error')),
    ],
  })
})

const handleSubmit = async () => {
  const res = await userApi.signIn({
    username: email.value,
    password: password.value
  })
  console.log(res)
  updateCurrentUser(res)
  if(res) {
    router.push('/login/invite')
  }
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
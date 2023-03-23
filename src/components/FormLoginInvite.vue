<template>
  <div class="wrapper__form-login-invite">
  <div>
    <div>
    <p class="paragraph__form-login-invite">{{ t('login_invite.enterYourPassword') }}</p>
  </div>
  <div>
    <InputText
    id="password"
    @change="handlePassword"
    type="password" 
    :label="t('login_invite.newPassword')" 
    :placeholder="t('login.enter')" 
    :font-size="12" 
    :font-size-label="10"
    :error="error.email"/>
    <InputText
    id="password_confirmation"
    @change="handleChangePass"
    type="password" 
    :label="t('login_invite.confirmPassword')" 
    :placeholder="t('login.enter')" 
    :font-size="12" 
    :font-size-label="10"
    :error="error.password"/>
  </div>
  <Button :text="t('login.loginBtn')" :primary="ref(true).value" :width-percent="100" :style="styleBtn" @click="handleSubmit"/>
  </div>
  <RouterLink class="link__form-login-invite" to="/forgotpassword">{{ t('login.forgotPassword') }}</RouterLink>
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
const curentUserStore = useCurrentUserStore();
const { getterCurrentUser, updateCurrentUser } = curentUserStore
const email = ref('');
const password = ref('');
const error = ref({
  email: false,
  password: false
});
const handlePassword = (e) => {
  email.value = e.target.value
}

const handleChangePass = (e) => {
  password.value = e.target.value
}


onMounted(()=>{
  Validator({
    form: '.wrapper__form-login-invite',
    errorSelector: '.error-message',
    rules: [
      Validator.isRequired('#password', 'ここにエラーメッセージ'),
      Validator.isRequired('#password_confirmation', 'ここにエラーメッセージ'),
      Validator.isConfirmed('#password_confirmation', ()=> {
        return document.querySelector('.wrapper__form-login-invite #password').value;
      }, 'ここにエラーメッセージ')
    ],
  })
})

const handleSubmit = async () => {
  const id = getterCurrentUser.id;
  const res = await userApi.updatePassword(id, {
    password: password.value
  })
  if(res) {
    // updateCurrentUser(res)
    console.log(res)
    router.push('/login/conditions')
  }
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
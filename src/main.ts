import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { router } from './router/router'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { messages } from './i18n'
import './assets/base.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'element-plus/dist/index.css'

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  legacy: false,
  messages: messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

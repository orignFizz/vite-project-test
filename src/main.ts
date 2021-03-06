import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/styles/index.scss'
import 'element-plus/theme-chalk/src/message.scss' // element-plus 弹窗样式
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

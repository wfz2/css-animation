import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'

// 导入组件注册
import { registerComponents } from './components/register'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 注册所有组件
registerComponents(app)

app.mount('#app')
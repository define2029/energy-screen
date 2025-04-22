import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入全局样式
import 'normalize.css'
import '@/assets/main.css'

const app = createApp(App)

// 引入全局方法
import * as utils from '@/utils'
app.config.globalProperties.$utils = utils

// SVG 组件自动注册脚本
import 'virtual:svg-icons-register'
// 全局注册 SVG 组件
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

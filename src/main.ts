import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Pinia from "@/stores/index";
// 全局指令注册
import { lazyPlugin } from "@/directives/linsterpic.ts";
// import Pinia from "@/stores/index"
const app = createApp(App)

app.use(Pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

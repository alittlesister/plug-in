import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import "./style/iconfont.css"
import 'vant/lib/index.css'
import vant from "vant"
import router from "./router"


let app = createApp(App);
app.use(router).use(vant).mount('#app')

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";




/*
    使用pinia的步骤
        - 安装pinia
        - 在main.js中引入createPinia()方法
        - 通过createPinia()方法创建一个pinia实例
        - 将pinia实例配置为vue的插件

*/
const pinia = createPinia()

const app = createApp(App)

app.config.globalProperties.hello = "全局变量"
//定义一个弹窗全局变量
app.config.globalProperties.alert = alert.bind(this) // 不推荐

//配置vue插件pinia
app.use(pinia)

app.mount("#app")
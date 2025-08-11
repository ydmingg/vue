import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)

app.config.globalProperties.hello = "全局变量"
//定义一个弹窗全局变量
app.config.globalProperties.alert = alert.bind(this) // 不推荐


app.mount("#app")
// 引入vue
// 这里引入的vue, 默认不支持template属性来设置模板
// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-bundler.js";



// 创建一个根组件
const App = {
    data() { 
        count: 0
    },
    template: "asdfasdfasdf"
}

createApp(App).mount("#app")
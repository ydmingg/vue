// 引入vue
// import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createApp } from "vue";
// import App from "./App"
import App from "./App.vue"


// // 创建一个跟组件(跟组件单独提出来放在App根组件中)
// const App = { 
//     data() { 
//         return {
//             msg: "2222"
//         }
//     },
//     template: "aasdfasd{{msg}}fasdfasdfa"
// }

// 创建应用并挂载
// mount()的返回值是根组件的实例
createApp(App).mount("#app")


import { createApp } from 'vue'
import App from './App.vue'

/* 
    App.vue是根组件
        creatApp(App)：将根组件关联到应用上
            她返回一个应用的实例
        app.mount("#app") : 将应用挂载到页面上
            他会返回一个根组件实例，组件的实例通常被命名为vm
            vm组件实例是一个Proxy对象（代理对象）
            
*/

const app = createApp(App)

// 挂载
// const app = createApp(App).mount('#app')
// // const app2 = createApp(App).mount('#app') // 一般只有一个根
const vm = app.mount('#app')
console.log(vm);

// 绑定在全局作用域window上
window.vm = vm
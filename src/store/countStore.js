// 引入函数 defineStore()
import { defineStore } from "pinia";
/*
    通过函数创建store （use名称：创建钩子）
        defineStore("store的id", 配置对象)
        配置对象：
            state是一个函数，将需要由pinia维护的数据以对象的形式返回

*/

// 定义一个名为 countStore 的 store
export const useCountStore = defineStore("count", {
    // 数据
    state: () => ({
        count: 100,
        name: "张三"
    }),
    // 计算属性
    getters: {
        double: (state) => state.count * 2
    },
    // 方法
    actions: {
        increment() {
            this.count++
        }
    }
})


// 定义一个名为 countStore 的 store (组合式store)
export const useCountStore2 = defineStore("count", () => { 
    // 数据
    const count = ref(100)
    const name = ref("张三")
    // 计算属性
    const double = computed(() => count.value * 2)
    // 方法
    function increment() {
        count.value++
    }
    return { count, name, double, increment }
})


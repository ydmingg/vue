<script>
// 引入响应式对象reactive
import { reactive } from 'vue'

export default {
    setup() { // 定义变量
        /*
            在组合式api中，直接声明的变量，就是一个普通的变量
                修改这些属性时，不会在视图中产生效果
        */
        const msg = "今天是个好日子"
        const count = 0

        // 可以通过reactive()来创建一个响应式的对象
        const stu = reactive({
            name: "张三",
            age: "18",
            gender: "nv",
        })

        function changeAge() {
           return stu.age = 22 
        }

        // 在setup中可以通过返回值来指定要暴露的内容
        // 暴露后的内容，可以直接在模板中使用
        return {
            msg,
            stu,
            changeAge 
        } 
    }
}
</script>

<template>
    <h1>组合式API</h1>
    <h2>{{msg}}</h2>
    <button @click="changeAge">点我一下</button>
    <h3>{{stu.name}}，{{stu.age}}，{{stu.gender}}</h3>
</template>
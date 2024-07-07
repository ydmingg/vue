<script setup>
import { reactive, ref } from 'vue';

// import { $ref } from 'vue';
/*
    reactive() 
        返回一个对象的响应式代理
        返回的是一个深层响应式对象
        也可以使用shallowReactive() 创建一个浅层响应式对象
        缺点：
            只能返回对象的响应式代理
            不能处理原始值
    ref()
        接收一个任意值，并返回他的响应式代理

*/

const stu = reactive({
    name: "猪八戒",
    aaa: {
        name: "深层响应式对象",
        age: 55,
        gender: "女"
    }
})

// 原始值
// const count = 0
// ref()在生成响应式代理时，他是将值包装为一个对象，0->{value:0}

// 访问ref()对象时，对象.value 去取对象中的值
// 在模板中，ref对象会被自动解包
let count = ref(0)
// let count = $ref(0) // 先不要用
// count = 1 // 改变量只会影响变量自己，在js中，无法实现对一个变量的代理

// vue中给我们提供了1个语法糖，使得ref在script标签中也可以自动解包
function fn() { 
    count.value++
    // count++
}

</script>

<template>
    <h1>组合式API</h1>
    <h4>{{stu.name}}</h4>
    <h5>{{count}}</h5>
    <button @click="fn">点</button>
</template>
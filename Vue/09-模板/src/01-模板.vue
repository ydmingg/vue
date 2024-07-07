<script setup>
import { ref, reactive, computed } from 'vue';

const msg = ref("模板")

// obj.value
const obj = ref({
    name: "张三",
    age: 123
})

// obj2.name.value
const obj2 = {
    name: ref("张三"), //{value:"张三"}
    age: ref(123)
}

const chanageFn = () => { 
    msg.value = "改变属性方法-->"
}

// computed 用来生成计算属性
const newMsg = computed(() => { 
    return msg.value + "computed计算属性"
})
    
</script>

<template>
    <!-- ref对象在模板中可以自动解包（要求ref对象必须是顶层对象） -->
    <h1>{{msg}}</h1>
    <h2>{{obj.name}}</h2>
    <h2>{{obj.age+1}}</h2>
    <!-- name不是顶层响应式对象，所以不能自动解包 (必须加value)-->
    <h2>{{obj2.name.value}}</h2>
    <h2>{{obj2.age+1}}</h2>
    <button @click="chanageFn">dianwoyixia</button>
    <div>{{newMsg}}</div>
</template>
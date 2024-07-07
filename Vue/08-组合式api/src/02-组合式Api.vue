<script setup>
import { reactive } from 'vue';

const msg = "零零零零"
const count = 0

const stu = reactive({
    name: "猪八戒"
})

function fn() { 
    console.log("被调用了");
}

</script>

<template>
    <h1>组合式API</h1>
    <h2>{{msg}}</h2>
    <button @click="fn">点我</button>
    <h3>{{count}}</h3>
    <h4>{{stu.name}}</h4>
    
</template>
<script setup>
import { provide, ref } from 'vue'
import A from './A.vue'
import B from './B.vue'

// 声明
const count = ref(0)
const increment = () => { 
    count.value++
}

provide("count", {
    count,
    increment
})
</script>

<template>
    <h4>我是根组件Root</h4>
    <ul>
        <li><A></A></li>
        <li><B></B></li>
    </ul>
</template>
<script setup>
import { count } from '@/store/count';
import { useCountStore } from '@/store/countStore';

// 获取store实例
const countStore = useCountStore();



</script>

<template>
    <h4>我是A组件</h4>
    <ul>
        <li>
            ComponentA -- 
            {{ count.count}} -- 
            <button @click="count.increment">点我</button>
        </li>
        <li>
            ComponentA2 --
            {{ countStore.count}} --
            {{ countStore.double}} --
            {{ countStore.name}} --
            <button @click="countStore.increment">点我</button>
        </li>
    </ul>

</template>
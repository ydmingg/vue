<script setup>
    import { ref } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';
    const isShow = ref(true)

</script>

<template>
    <h1>动态组件</h1>
    <!-- component 是一个动态组件
        component最终是啥标签由is属性决定
    -->
    <component :is="div">我是一个动态组件，由is属性决定</component>
    <button @click="isShow = !isShow">切换</button>
    <component :is="isShow?A:B"></component>
</template>
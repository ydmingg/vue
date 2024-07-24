<script setup>
import C from './components/C.vue';


/*
    透传属性：
        在组件上设置属性，会自动传递给组件的根元素
        透传会发生在没有被声明的为props和emit的属性上
        自动的透传只适用于单根组件
        




*/

</script>

<template>
    <h1 class="box1">H1</h1>
    <C class="box2"></C>
    
    
</template>

<style scoped>
    .box2{
        color: red;
    }
</style>
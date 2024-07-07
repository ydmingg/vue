<script setup>
import MyBox from './components/MyBox.vue';

</script>

<template>
    <!-- <h1 class="h1">style-scoped</h1> -->
    <h1 :class="clasds.h1">style-scoped</h1>
    <h2>我是一h2</h2>
    <MyBox></MyBox>
</template>

/*
    css模块：
        自动的对模块中的类名进行hash化来确保类名的唯一性
        在模板中可以通过 $style.类名 使用
        亦可以通过module的属性值来指定变量名称

*/

<style module="clasds">
    .h1{background-color: blueviolet;}

</style>
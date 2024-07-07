<script setup></script>

<template>
    <!-- 单根组件 -->
    <!-- <div> 
        <h2>我是一个子组件</h2>
    </div> -->
    <!-- 多跟组件 -->
    <h2>我是一个子组件</h2>
    <p :class="$style.h1">多根组件</p>
</template>


<style scoped>
    h2{background-color: royalblue;}
</style>

<style module>
    .h1{background-color: gold;}
</style>
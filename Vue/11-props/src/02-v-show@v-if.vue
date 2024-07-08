<script setup>
    import { ref } from 'vue';
    

    const isShow = ref(true);

    

</script>

<template>
    <h1>v-if</h1>
    <button @click="isShow = !isShow">点我</button>
    <!-- v-show 可以根据值来决定元素是否显示（通过display来切换显示状态）
            通过css来切换组件的显示隐藏，切换时不干涉到元素的渲染
                （切换性能较高，初始化性能差）
        v-if 可以根据表达式的值来决定是否显示元素 (会直接将元素删除)    
            通过删除添加元素的方式来切换元素的显示隐藏，切换时反复的渲染组件
                （切换性能差，初始化性能高）
            v-if可以和v-else 和 v-else-if 一起结合使用
            v-if可以配合template使用
    -->

    <div v-show="isShow">
        <h2>显示隐藏效果</h2>
    </div>
    <!-- <div v-if="isShow">
        <h2>我是if中的内容</h2>
    </div>
    <div v-else>
        <h2>我是else中的内容</h2>
    </div> -->
    <!-- <div v-if="isShow">
        <h2 >哦我是h2</h2>
        <h3>我是h3，被h2控制显示隐藏</h3>
    </div> -->
    <template v-if="isShow">
        <h2 >哦我是h2</h2>
        <h3>我是h3，被h2控制显示隐藏</h3>
    </template>
    


</template>
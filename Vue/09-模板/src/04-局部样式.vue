<script setup>
import MyBox from './components/MyBox.vue';

</script>

<template>
    <h1>style-scoped</h1>
    <h2>我是一h2</h2>
    <MyBox></MyBox>
</template>

 <!-- 如果用style标签写样式就是全局样式 
        直接写在style中的全局样式一般只写需要全局生效的样式 
    给style加scoped时，其实现的原理：
        当我们给组件中加scoped样式时，vue会自动给组件
        中的所有元素生成一个随机的属性，
            如：data-v-7a7a37b1
        生成后，所有的选择器都会写在最后添加一个 [data-v-7a7a37b1]
            h2 -> h2[data-v-7a7a37b1]
        注意：
            随机生成的属性，除了会添加到当前组件内所有根元素上
            还会添加到当前组件引入的其他组件的根元素上，
            这样设计是为了，可以通过父组件来为子组件设置一些样式

-->


<!-- <style>
    h2{background-color: aquamarine;}
</style> -->

<style scoped>
    h2{background-color: aquamarine;}

    div:deep(h2){color: red;}  /*深度选择器*/
    :global(div){color: darkgreen}  /*全局选择器*/



</style> 
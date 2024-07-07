<script setup>
import { ref } from 'vue';
const imgPath = ref("/01.jpg")

const changeImg = () => { 
    imgPath.value = "/02.jpg"
}

//
const attrs = {
    id: "box1",
    class: "hello"
}

// 设置布尔值属性
const isDisabled = true

// 动态
// const attrName = "title"
const attrName = "id"
const attrValue = "这是一个title属性"

</script>

<template>
    <!-- 
    当我们为标签动态的设置属性时，需要使用v-bind指令 
        v-bind可以简写为:
    当我们为一个布尔值设置属性时：disabled
        值为true，则元素上有该属性，
        值为false，则元素没有该属性
        特殊情况：
            "" 空串，在这里会被当成真值
    
    -->
    
    <h1>v-bind 指令</h1>
    <button @click="changeImg">切换图片</button>
    <div class="">
        <!-- <img width="80" src="/01.jpg" alt=""> // /就表示public文件夹 -->
        <!-- <img width="80" v-bind:src="imgPath" alt="">  -->
        <img width="80" :src="imgPath" alt=""> 
        <p :="attrs">设置属性</p>
        <!-- <input type="text" disabled> 布尔值属性 -->
        <input type="text" :disabled="isDisabled"> 布尔值属性
        <hr>
        <img width="80" :[attrName]="attrValue" :src="imgPath" alt="">
    </div>
        
        


</template>
<script setup>
import MyBox from './components/MyBox.vue';
const arr = ["box1", "box2", "box3",]
const arr2 = [
    { box1: true },
    { box2: false },
    { box3: true }
]

const style = {
    color: "red",

}

</script>

<template>
    <!-- <h1 :class="clasds.h1">style-scoped</h1> -->
    <h2 class="header">我是一h2</h2>
    <div :class="arr2">我是arr</div>
    <div :style="style">我是样式对象</div>
    <MyBox></MyBox>

</template>
<template>
    <h3>今天天气很{{ info }}</h3>
    <button ref="myButton" @click="changeWeather">我是button</button>
</template>

<script setup>
import { useTemplateRef, computed, onMounted, ref } from 'vue'
const isHot = ref(true)

// 
const info = computed(() => isHot.value ? '炎热' : '凉爽');


const myBtn = useTemplateRef('myButton')

const changeWeather = () => { 
    isHot.value = !isHot.value
}

onMounted(() => {
    console.log(myBtn.value)
})

</script>
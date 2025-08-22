<template>
    <button ref="myButton">我是button</button>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'

const myBtn = useTemplateRef('myButton')

console.log(myBtn.value)

onMounted(()=>{
    console.log(myBtn.value)
})

</script>
<script setup>
import { inject, ref } from 'vue'

// const count = ref(0)

// const increment = () => {
//     count.value++
// }
const { count, increment} = inject("count")


</script>
<template>
    <h3>ComponentC -- {{count}} -- <button @click="increment">点我</button></h3>
    
</template>
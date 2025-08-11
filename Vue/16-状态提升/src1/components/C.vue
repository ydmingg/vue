<script setup>
import { inject, ref } from 'vue'

// const count = ref(0)

// const increment = () => {
//     count.value++
// }
// const { count, increment} = inject("count")
import { countStore } from '@/store/count'


</script>
<template>
    <h3>ComponentC -- {{countStore.count}} -- <button @click="countStore.increment">点我</button></h3>
    
</template>
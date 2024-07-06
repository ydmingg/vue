<template>
    <h2>子组件</h2>
    <button @click="count++">点我</button>，被点了{{count}}次
</template>

<script>
    // 定义一个自定义组件
    export default {
        data() { 
            return {
                count: 0
            }
        }
    }
</script>
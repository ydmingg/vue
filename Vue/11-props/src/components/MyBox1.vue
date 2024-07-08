<script setup>
    /*
        父组件可以通过props向子组件传递数据
        注意L: 父组件传递给子组件的props都是只读的，无法修改
            即使可以修改，我们也尽量不要去子组件中修改父组件的数据
            // 如果非要改，可以使用自定义事件去改
    */
    // 定义props
const props1 = defineProps(["count","obj","maxLength"])
// const props2 = defineProps({
//     count: Number,
//     obj: Object
// })
    
</script>

<template>
    <div>
        <h2>子组件 --> {{props1.count}}</h2>
        <!-- <button @click="props1.count++">点我下下</button> -->
        <button @click="props1.obj.count++">我被点了{{props1.obj.count}}下</button>
        <p>{{props1.maxLength}}</p>
        <hr>
    </div>
</template>

<style scoped>
    div{color: red;}
</style>
<script setup>
import { inject, ref } from 'vue'

// const count = ref(0)

// const increment = () => {
//     count.value++
// }

// const { count, increment} = inject("count")
import { countStore } from '@/store/count'

/*
    状态管理:
        状态:(state)
            -应用当中的数据流
            -状态就是数据
        视图(view)
            -视图用来呈现数据,用户通过视图访问数据
        交互(actions)
            - 状态会根据用户在视图中的操作发生改变
    例:a组件和c组件互相没关系,如果要共用一个count 不能用注入依赖,就考虑其他方法
    ① 提升状态:
        - 当有多个组件需要使用一个state时,可以将state提升到这些组件共同的祖先组件中声明
            这样一来,所有这些组件都可以通过祖先元素来访问到这个state



*/


</script>
<template>
    <h3>ComponentA -- {{countStore.count}} -- <button @click="countStore.increment">点我</button></h3>
    
</template>
<script setup>
import { ref,reactive } from 'vue';
import TabList from './components/TabList.vue';
import Tab from './components/Tab.vue';


// 选项1
const players = reactive([
    {
        rate: 1,
        name: "张1",
        src: "/01.jpg",
        hot: 333760
    },
    {
        rate: 2,
        name: "李2",
        src: "/02.jpg",
        hot: 233760
    },
    {
        rate: 3,
        name: "王3",
        src: "/03.jpg",
        hot: 133760
    }
])
// 选项2
const players2 = reactive([
    {
        rate: 1,
        name: "西安",
        src: "/03.jpg",
        hot: 933760
    },
    {
        rate: 2,
        name: "长沙",
        src: "/01.jpg",
        hot: 533760
    },
    {
        rate: 3,
        name: "湖南",
        src: "/02.jpg",
        hot: 33760
    }
])

// 获取最大的hot
const playersMaxHot = players[0].hot
const players2MaxHot = players2[0].hot

</script>
    
<!-- 可以在slot中指定一个默认的内容，默认会在没有内容时显示
        <slot>我是默认显示的内容</slot> 
    slot不给指定name属性时，就是默认插槽（name属性中没有值时）
    slot指定name属性时，就是具名插槽（name="name"）
        使用的时候在<template #name>组件</template>
-->
 
<template>
    <Tab>
        <template #current1><TabList :items="players" :max-hot="playersMaxHot"></TabList></template>
        <template #current2><TabList :items="players2" :max-hot="players2MaxHot"></TabList></template>
    </Tab>
</template>
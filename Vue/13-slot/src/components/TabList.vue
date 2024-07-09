<script setup>
import MyCard from './MyCard.vue';
// 定义参数
    const props = defineProps(["items","maxHot"])
</script>
tab组件主要的作用就是在多个选项卡之间切换，
    其中显示的主要内容就是Tablist
    而Tablist的数据在app中
    如果按照之前的思路，必须在app组件中将数据传递给Tab，
        然后再由tab传递给tabList，这样做太麻烦了

<template>
    <MyCard v-for="players in props.items" 
        :item="players" 
        :max-hot="props.maxHot"
    ></MyCard>

</template>
<script setup>
import { computed } from 'vue';

// const props = defineProps(["progress", "attrdata"])
const props = defineProps(["hot", "maxHot"])

// 动态width
const width = computed(() => { 
    return (props.hot / props.maxHot) * 100 + "%"
})
    
</script>

<template>
    <!-- <progress id="file" max="100" :progress="props.progress" :attr-data="props.attrdata"></progress> -->
    <div class="progress">
        <div class="progress-bg"></div>
        <div class="progress-value">{{props.hot}}</div>
    </div>
</template>

<style scoped>
     section .rt .progress{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 24px;
        margin-top: 10px;
        background: var(--box-color-4);
        border-radius: 999px;
    }
    section .rt .progress-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: v-bind(width);
        height: 100%;
        background: var(--box-color-5);
        border-radius: 999px;
    }
    section .rt .progress-value{
        position: absolute;
        top: 50%;
        left: 8px;
        color: var(--box-color-3);
        font-size: 14px;
        font-weight: bolder;
        transform: translateY(-50%);
    }

</style>
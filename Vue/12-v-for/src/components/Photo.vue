<script setup>
import { computed } from 'vue';

const props = defineProps(["src", "rate"])
// 第一个：
// const color = "yellow"
const color = computed(() => { 
    if (props.rate == 1) {
        return "coral"
    } else if (props.rate == 2) {
        return "#999"
    } else { 
        return "#ccc"
    }
})
    
</script>

<template>
    <div class="lt">
        <img :src="props.src">
        <span>{{props.rate}}</span>
    </div>
</template>

<style scoped>
    section .lt{
        overflow: hidden;
        position: relative;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        border-radius: 12px;
    }
    
    section .lt span{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 0 0 12px 0;
        background-color: v-bind(color);
        color: var(--box-color-3);
        font-size: 12px;
        font-weight: bolder;
    }
    section .lt img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

</style>
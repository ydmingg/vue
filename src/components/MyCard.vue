<script setup>
// 引用父组件数据
// const props = defineProps(["a","b","c"]);
const { item } = defineProps(["item"]);
</script>
<template>
    <section>
        <div class="lt">
            <img :src="item.src">
            <span>{{item.rate}}</span>
        </div>
        <div class="rt">
            <div>{{item.name}}</div>
            <progress id="file" max="100" :value="item.progress" :attr-data="item.attrdata"></progress>
        </div>
    </section>
</template>

<style scoped>
    section{
        display: flex;
        align-items: center;
        margin-top: 12px;
    }
    section .lt{
        overflow: hidden;
        position: relative;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        border-radius: 12px;
    }
    section .lt img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
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
        background-color: var(--box-color-1);
        color: var(--box-color-3);
        font-size: 12px;
        font-weight: bolder;
    }
    section .rt{flex: 1;}
    section .rt progress{
        position: relative;
        width: 100%;
        height: 24px;
        margin-top: 10px;
        background: var(--box-color-4);
        border-radius: 999px;
    }
    section .rt progress::after{
        content: attr(attr-data);
        position: absolute;
        top: 50%;
        left: 8px;
        color: var(--box-color-3);
        font-size: 14px;
        font-weight: bolder;
        transform: translateY(-50%);
    }
    section .rt progress::-webkit-progress-bar{     
     background: var(--box-color-4);
     border-radius: 999px;
    }
    section .rt progress::-webkit-progress-value{
        background: var(--box-color-5);
        border-radius: 999px; 
    }

</style>
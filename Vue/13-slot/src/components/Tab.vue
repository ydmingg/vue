<script setup>
import { ref } from 'vue';

    const current = ref(0) // 0表示选项1，1表示选项2

</script>

<template>
    <div class="box">
        <header>
            <div class="item" :class="{select:current===0}" @click="current=0">选项1</div>
            <div class="item" :class="{select:current===1}" @click="current=1">选项2</div>
        </header>
        <main>
            <div v-show="current===0">
                <slot name="current1"></slot>
            </div>
            <div v-show="current===1">
                <!-- 具名插槽 -->
                <slot name="current2"></slot>
            </div>
        </main>
    </div>

</template>

<style scoped>
    .box{
        --box-color-1: coral;
        --box-color-2: cornflowerblue;
        --box-color-3: white;
        --box-color-4: rgba(0,0,0,.24);
        --box-color-5: linear-gradient(to right, coral,rgb(66, 18, 0));
        user-select: none;
        min-width: 360px;
        padding: 20px;
        background-color: var(--box-color-2);
        border-radius: 20px;
        box-sizing: border-box;
    }
    header{
        overflow: hidden;
        display: flex;
        border-radius: 8px;
    }
    header div{
        width: 50%;
        padding: 8px;
        background-color: var(--box-color-3);
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: .3s;
    }
    header div:not(.select):hover{
        color: var(--box-color-1);
    }
    header div.select{
        background-color:var(--box-color-1);
        color: var(--box-color-3);
    }

</style>
<script setup>
import { ref,reactive } from 'vue';
import MyCard from './components/MyCard.vue';
import VFor from './01-v-for.vue';
const arr = ref(["01","02","03"])

// 创建一个变量来记录选项卡的状态
/**
 * 子组件中的数据通常不会在子组件中直接定义，这样会导致数据和视图发生耦合
 * 子组件中的数据通常会在创建组件实例时确定：（父组件中指定）
 * 父组件可以通过 props 来将数据传递给子组件
 * 使用props：
 *      先在子组件中定义props
*/

const current = ref(0) // 0表示选项1，1表示选项2

// 子组件数据
const player = reactive({
    rate: 1,
    name: "张三",
    src: "/01.jpg",
    progress: 70,
    attrdata: `进度0%`
})
player.attrdata = `进度${player.progress}%`

const player2 = reactive({
    rate: 1,
    name: "李四",
    src: "/02.jpg",
    hot: 433760,
})
player2.attrdata = `进度${player2.progress}%`

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
<!-- v-show 指令：
    用来设置一个内容是否显示
    v-show时通过display来设置一个元素是否显示的 


-->
    
 
<template>
    <div class="box">
        <header>
            <div class="item" :class="{select:current===0}" @click="current=0">选项1</div>
            <div class="item" :class="{select:current===1}" @click="current=1">选项2</div>
        </header>
        <main>
            <div v-show="current===0">
                <!-- <MyCard :item="player"></MyCard> -->
                <MyCard :v-for="players in players" 
                :item="players" 
                :max-hot="playersMaxHot"
                ></MyCard>
                <!-- <MyCard :item="players[1]" :max-hot="maxHot"></MyCard>
                <MyCard :item="players[2]" :max-hot="maxHot"></MyCard> -->
            </div>
            <div v-show="current===1">
                <MyCard :v-for="players2 in players2" 
                :item="players2" 
                :max-hot="players2MaxHot"
                ></MyCard>
            </div>
            
        </main>
    </div>
    <VFor :v-for="name in arr"></VFor>
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
<script setup>
// 引用父组件数据 （单项传递）
// 父组件可以通过props来向子组件单向传递数据
// 注意：
//    父组件传递给子组件的数据都是只读的，尽量不要在子组件中修改父组件的数据
// const props = defineProps(["a","b","c"]); // 只读
import Photo from './Photo.vue';
import HotBar from './HotBar.vue';

const { item } = defineProps(["item", "maxHot"]);
console.log(item.maxHot);
</script>
<template>
    <section>
        <Photo :src="item.src" :rate="item.rate"></Photo>
        <div class="rt">
            <div>{{item.name}}</div>
            <!-- <HotBar :value="item.progress" :attrdata="item.attrdata"></HotBar> -->
            <HotBar :hot="item.hot" :max-hot="item.maxHot"></HotBar>
        </div>
    </section>
</template>

<style scoped>
    section{
        display: flex;
        align-items: center;
        margin-top: 12px;
    }
    
    section .rt{flex: 1;}
   

</style>
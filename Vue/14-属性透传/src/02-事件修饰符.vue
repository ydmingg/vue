<script setup>
function change(text) { 
    // event.stopPropagation();
    alert(text)
}

</script>

<template>
    <!-- 事件修饰符：（先捕获，后冒泡）
        .stop 停止事件的传播，只能停止冒泡
        .capture 在捕获阶段触发事件  
        .prevent 取消默认行为
        .self 只有事件自身触发时才会生效
        .once 绑定一个一次性的事件
        .passive 主要由于提升滚动事件的性能(不常用)
        
    -->
    <div class="box1" @click="change(1)">1
        <div class="box2" @click.capture="change(2)">2
            <div class="box3" @click.stop="change(3)">3</div>
        </div>
    </div>
    
</template>

<style scoped>
    .box3{
        width:200px;
        height:200px;
        background-color: blueviolet;
    }
    .box2{
        width:300px;
        height:300px;
        background-color: hotpink;
    }
    .box1{
        width:400px;
        height:400px;
        background-color: darksalmon;
    }
</style> 
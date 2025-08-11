<script setup>
import { ref } from 'vue';
// text此时是静态变量，要让变为响应式变量，需要使用ref
// let text = '默认值'
let text = ref('默认值')

function submitHandler() { 
    console.log(text);





}
</script>

<template>
    <h1>双向数据绑定</h1>

    <form @submit.prevent="submitHandler">
        <!-- 这里的vaue属性和变量text做了绑定
            当value发生变化时，text变量也会发生改变（单向绑定） 

            当value或text任意一个发生变化，另一个也会发生改变（双向绑定）
        
        -->
        <div>
            <input type="text" 
            @input="(event) => text = event.target.value"
            :value = "text"
            >
        </div>
        <div>
            <input type="text" 
            @input="(event) => text = event.target.value"
            :value="text"
            >
        </div>
        <div>
            <input type="text" 
            @input="(event) => text = event.target.value"
            :value="text"
            >
        </div>
        <hr>
        <button>提交</button>
    </form>


    
</template>
<script setup>
import { ref } from 'vue';
let text = ref('默认值')
// let bool = ref(true)
let bool = ref("是")
let hobbies = ref([])
let gender = "男"
let friend = ref("")

function submitHandler() { 
    console.log(text); 

}

/*
    v-model 的修饰符
        .lazy 使用change来处理数据
        .trim 去除首尾空格
        .number 将数据转为数值

*/

</script>

<template>
    <h1>双向数据绑定v-model的修饰符</h1>

    <form @submit.prevent="submitHandler">
        <div>
            <input type="text" v-model.lazy.trim="text">
        </div>
        <div>
            <input type="text" v-model="text">
        </div>
        <input type="checkbox" 
        v-model="bool" 
        true-value="是" 
        false-value="否" 
        >
        <hr>
        <div class="">
            <input type="checkbox" value="足球" name="足球" v-model="hobbies">足球
            <input type="checkbox" value="篮球" name="篮球" v-model="hobbies">篮球
            <input type="checkbox" value="排球" name="排球" v-model="hobbies">排球
            <input type="checkbox" value="羽毛球" name="羽毛球" v-model="hobbies">羽毛球
            <input type="checkbox" value="乒乓球" name="乒乓球" v-model="hobbies">乒乓球
        </div>
        <div class="">
            <input type="radio" value="男" name="gender" v-model="gender">男
            <input type="radio" value="女" name="gender" v-model="gender">女
        </div>
        <select name="" id="" v-model="friend">
            <option value="" disabled>请选择...</option>
            <option value="送悟空">送悟空</option>
            <option value="猪八戒">猪八戒</option>
            <option value="沙和尚">沙和尚</option>
        </select>
        <button>提交</button>
    </form>


    
</template>
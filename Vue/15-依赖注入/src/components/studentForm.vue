<script setup>
import { ref, inject } from 'vue';
// const emits = defineEmits(["addStu"])

// 创建一个ref来存储信息
const newStu = ref({
    name: "",
    age: 1,
    gender: "男",
    address: ""

})

const { addNewStudent } = inject("student") 

const submitHandler = () => { 
    // console.log(newStu.value);
    // 调用方法，将newStu添加到表单
    // emits("addStu", Object.assign({}, newStu.value))
    // emits("addStu", {...newStu.value})
    addNewStudent({...newStu.value})

    newStu.value.name = ""
    newStu.value.age = 1
    newStu.value.gender = "男"
    newStu.value.address = ""
}
</script>


<template>
    <form @submit.prevent="submitHandler">
        <div>姓名<input type="text" v-model="newStu.name"></div>
        <div>年龄<input type="number" min="1" v-model="newStu.age"></div>
        <div>性别
            <input type="radio"  value="男" v-model="newStu.gender">男
            <input type="radio" value="女" v-model="newStu.gender">女
        </div>
        <div>住址<input type="text" v-model="newStu.address"></div>
        <button>添加</button>
    </form>
</template>
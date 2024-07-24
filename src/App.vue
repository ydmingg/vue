<script setup>
import { ref } from 'vue'
import student from './components/student.vue';


// 发送请求加载数据（此处模拟数据）
const STU_ARR = ref([
{
        id: 1,
        name: "送悟空",
        age: 14,
        gender: "男",
        address: "花果山"
    },
    {
        id: 2,
        name: "猪八戒",
        age: 14,
        gender: "男",
        address: "花果山"
    },
    {
        id: 3,
        name: "沙和尚",
        age: 22,
        gender: "男",
        address: "花果山"
    },
])

// 删除学生的方法(推荐方法)
const delStudents = (index) => { 
    STU_ARR.value.splice(index, 1);
}

</script>

<template>
    <!-- 可以将组件中的方法已自定义事件的形式传递给子组件 -->
    <h1>删除功能</h1>
    <student 
    :students="STU_ARR"
    @del-stu="delStudents"
    ></student>


    
</template>
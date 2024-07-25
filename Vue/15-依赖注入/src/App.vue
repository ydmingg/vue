<script setup>
import { provide, ref } from 'vue'
import student from './components/student.vue';
import StudentForm from './components/studentForm.vue'

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
const delStudentByIndex = (index) => { 
    STU_ARR.value.splice(index, 1);
}

const addNewStudent = (student) => { 
    const lastId = STU_ARR.value.at(-1)?.id
    const newId = !isNaN(lastId) ? lastId + 1 : 1;
    student.id = newId
    STU_ARR.value.push(student)
}

// 可以通过依赖注入，可以跨越多层传递数据
// 设置依赖（provide）provide("name",student)
// 注入数据 (inject) const value = inject(name,default)
// 

provide("student", {
    students: STU_ARR,
    delStudentByIndex,
    addNewStudent
})

</script>

<template>
    <!-- 可以将组件中的方法已自定义事件的形式传递给子组件 -->
    <h1>删除功能</h1>
    <!-- <student :students="STU_ARR" @del-stu="delStudentByIndex"></student>
    <hr>
    <StudentForm @add-stu="addNewStudent"></StudentForm> -->
    <student></student>
    <hr>
    <StudentForm></StudentForm>


</template>
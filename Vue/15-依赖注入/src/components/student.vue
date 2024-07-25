<script setup>


// 通过defineProps 定义的属性在attrs中就不存在透传属性了
// const props = defineProps(["students"]) // 只读

// // 定义一个删除学生的方法
// const delStudents = (index) => { // 谁的方法放在谁里面
//     if (confirm("确认删除")) {
//         props.students.splice(index, 1)
//         console.log(props.students);
//     }
// }

import StudentItem from './studentItem.vue'
// import { inject } from 'vue';

// const props = defineProps(["students"])
// const emits = defineEmits(["delStu"])




</script>
<template>
    <!-- {{$attrs}} -->
    <!-- {{props.students}} -->
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <!-- <StudentItem 
            :students="props.students" 
            @del-stu="$event => emits('delStu',$event)"></StudentItem> -->
            <!-- <StudentItem
                :students="$attrs.students"
                @del-stu="$attrs.onDelStu"
            ></StudentItem> -->
            <StudentItem ></StudentItem>
        </tbody>
    </table>
</template>

<style scoped>
    table{
        width: 80%;
        border-collapse: collapse;
    }
    caption{
        font-size: 30px;
    }
    th{
        text-align: center;
        border: 1px solid #ccc;
    }
</style>
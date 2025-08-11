<script setup>
import { inject } from 'vue'

// const props = defineProps(["students"])
// const emits = defineEmits(["delStu"])

// 跨层读取数据(必须是直系关系)
// const name = inject("name")
const { students, delStudentByIndex } = inject("student")

const delStudents = (index) => { // 谁的方法放在谁里面
    if (confirm("确认删除")) {
        // props.fn(index)
        // console.log(props.students);
        // emits("delStu",index)
        delStudentByIndex(index)
    }
}




</script>

<template>
    <tr v-for="(stu, index) in students">
        <td>{{stu.id}}</td>
        <td>{{stu.name}}</td>
        <td>{{stu.age}}</td>
        <td>{{stu.gender}}</td>
        <td>{{stu.address}}</td>
        <td>
            <!-- <a href="" @click.prevent="delStudents(index)">删除</a> -->
            <!-- 在模板中可以用$emit() 来触发自定义事件(不推荐) -->
            <!-- <a href="" @click.prevent="$event => $emit('del-stu',index)">删除</a> -->
            <!-- <a href="" @click.prevent="$event => emit('del-stu',index)">删除</a> (不是最优)-->
            <!-- <a href="" @click.prevent="delStudents(index)">删除</a> -->
            <a href="" @click.prevent="$event => delStudents(index)">删除</a>
        </td>
    </tr>
</template>

<style scoped>
    td{
        text-align: center;
        border: 1px solid #ccc;
    }
</style>
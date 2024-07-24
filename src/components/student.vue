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

const props = defineProps(["students"])
const emit = defineEmits(["del-stu"])

const delStudents = (index) => { // 谁的方法放在谁里面
    if (confirm("确认删除")) {
        // props.fn(index)
        // console.log(props.students);
        emit("del-stu",index)
    }
}


</script>
<template>
    <!-- {{$attrs}} -->
    {{props.students}}
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
            <tr v-for="(stu, index) in props.students">
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
                    <a href="" @click.prevent="delStudents(index)">删除</a>
                </td>
            </tr>
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
    th,td{
        text-align: center;
        border: 1px solid #ccc;
    }
</style>
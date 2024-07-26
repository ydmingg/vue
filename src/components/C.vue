<script setup>
import { count } from '@/store/count';
import { useStudentStore } from '@/store/studentStore'
import { storeToRefs } from 'pinia'

const stuStore = useStudentStore();
// store实例本身就是一个reactive对象
// 可以直接通过她直接访问state中的数据

// 但是如果直接将state中的数据解构出来，那么数据会丧失响应式

// 可以通过storeToRefs将state中的数据解构出来，这样数据就具有响应式了

const { id, name, age } = stuStore.students[0]
// const { id, name, age } = storeToRefs(stuStore.students[0])
// console.log(name);


</script>

<template>
    <h4>我是C组件</h4>
    <ul>
        <li>
            componentsC -- 
            {{ count.count }} --
            <button @click="count.increment">点我</button>
        </li>
        <li>
            componentsC -- 
            {{ name }} --
            {{ stuStore.getStudentById(id).age }} --
            <button @click="stuStore.addStudent(name,age)">添加</button>
        </li>
    </ul>
</template>
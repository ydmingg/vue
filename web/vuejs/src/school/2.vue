<template>
    <div class="">
        <text>{{ sump + 1 }}</text>
        <div>{{ fullName() }}</div>
        <div>
            <input type="text" v-model="firstName">
            <input type="text" v-model="lastName">
            <div>{{ fullNames }}</div>
            <div>{{ fullNames }}</div>
            <div>{{ fullNames }}</div>
            <div>{{ fullNames }}</div>
        </div>
        <div v-for="(item, index) in itemArr" :key="item.id">{{ item.name }}</div>
        <div>
            <p>VUE.set方法示例</p>
            <button @click="addSex">添加性别属性，默认值：男</button> <br/>
        </div>
        <div>
            <text>{{ student.name }}</text>
            <input type="text" v-model="student.name">
            <input type="radio" v-model="picked" value="a"  />name
            <input type="radio" v-model="picked" value="b"  />names
            <input type="checkbox" v-model="toggle"  />
        </div>
        
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const sump = ref(0)
const name = ref('zhangsan')

function fullName() {
    const newName = name.value
    return 'fullName: ' + newName
}


const firstName = ref('zhangsan')
const lastName = ref('lisi')
const fullNames = computed(() => {
    return 'Name: ' + firstName.value + '-' + lastName.value
})

const itemArr = reactive([
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' }
])

// vue.set方法示例
const student = reactive({
    name: 'tom',
    age: 18,
    hobby: ['抽烟', '喝酒', '烫头'],
    friends: [
        { name: 'jerry', age: 35 },
        { name: 'tony', age: 36 }
    ]
})
const addSex = () => {
    student.sex = '男'
    console.log(student)
}

const picked = ref('a')
const toggle = ref(false)




</script>
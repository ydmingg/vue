<script setup>
    import { ref } from 'vue';

    const arr = ref(["001","002","003","004"])
    const arr2 = ref([
        {
            id: 1,
            name: "zhangsna",
            gender: "nan"
        },{
            id: 2,
            name: "asdf",
            gender: "nan"
        }
    ])
</script>
    
 
<template>
    <h1>for循环</h1>
    <!-- 在使用v-for时，可以为元素指定一个唯一的key。
            有了key后，元素再比较时，会按照相同的key去比较而不是顺序 
        v-for和v-if在同时使用
    -->
    <!-- <button @click="arr2.push({id:3,name:'李四'})">点我</button> -->
    <button @click="arr2.unshift({id:3,name:'李四'})">点我</button>
    <!-- <ul>
        <li v-for="name in arr">{{name}}</li>
    </ul>
    <ul>
        <li v-for="(name,index) in arr">{{index}}--{{name}}</li>
    </ul> -->
    <div v-for="obj in arr2">{{obj.name}}</div>
    <hr>
    <!-- <template v-for="obj in arr2">{{obj.name}}</template>
    <hr> -->
    <div v-for="{id,name} in arr2" :key="id">
        {{name}}
        <input type="text">
    </div>

</template>
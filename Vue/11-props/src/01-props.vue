<script setup>
    import { ref } from 'vue';
    import MyBox from './components/MyBox1.vue';

    const count = ref(0)
    const obj = ref({
        count: ref(0)
    })


    

    

</script>

<template>
    <h1>props 单向传参</h1>
    <MyBox :count="count" :obj="obj" max-length="10"></MyBox>
    <!-- <MyBox maxLength="10"></MyBox> -->
    <button @click="count++">点我一下</button>
</template>
<template>
  <div class="">vue语法风格：选项式和组合式（setup）</div>
  <div class="">{{ text }}</div>
  <div class="" v-html="html"></div>
  <div v-bind:id="divId" :class="['div-class', divClass]">v-bind:id 可简写为 :id</div>
  <button @click="handleClick" >dom事件-点击事件
    <span v-if="count.toggle">显示内容</span>
  </button>

</template>

<script setup>
import { ref } from 'vue'
const text = '模板语法-插入文本'
const html = '<h1>模板语法-插入html</h1>'
const divId = 'div-id'
const divClass = 'div-class2'

const count = ref({
    sum: 0,
    toggle: true
})

function handleClick() {
    count.value.toggle = !count.value.toggle
    console.log('点击事件',count.value.sum++)
}


</script>
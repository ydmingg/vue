<script setup>
import { useAttrs } from 'vue'

const props = defineProps(["name"])

// 在脚本中访问属性: 使用useAttrs方法
const attrs = useAttrs()
console.log(attrs);

/*
    在模板中，可以通过$attrs来访问透传过来的属性

*/

</script>

<script>
export default {
    inheritAttrs: false  // 关闭自动透传属性
}
</script>

<template>
    <h2>我是组件c</h2>
    {{$attrs}}
    <h3 :="$attrs">手动透传属性</h3>
    <h4 :class="$attrs.class">透传属性</h4>
    <p >只需要需要的透传属性</p>
</template>
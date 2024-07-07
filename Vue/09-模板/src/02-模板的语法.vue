<script setup>
const msg = "模板的语法"
const html = `<h1>插值使用</h1>`
</script>

<template>
    <!-- 
    在模板中，可以直接访问到组件中声明的变量
    处理组件中的变量外，vue也为我们提供了一些全局对象可以访问：
        Data\Math\RegExp...
        除此之外，亦可以通过app对象来向vue中添加一些全局变量
        app.config.globalProperties.属性名
    使用插值（双大括号），只能使用表达式
        表达式，就是有返回值的语句
        插值实际上就是修改元素的textContent
            如果内容中有标签，标签会被转义，不会生效
    指令：
        在模板中可以为标签设置一些特殊的属性，她可以用来设置标签如何显示内容
        指令使用 v- 开头
        使用指令时，不需要通过{{}}来指定表达式
            v-text === textContent
            v-html === innerHTML
        

            
    -->
    <h1>{{msg + new Date() + hello}}</h1>
    <!-- <h2>{{alert("alear全局变量创建成功")}}</h2> -->
    <h2>{{Math.random()}}</h2>
    <h3 v-text="html"></h3>
    
    <h3 v-html="html"></h3>
</template>
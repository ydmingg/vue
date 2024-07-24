<script setup>
import { ref } from 'vue';

const count = ref(0)

function clickHandler(e) {
    alert("事件处理器", e)

    /*
        内联事件处理器，回调由我们自己调用，。参数也是我们自己决定
            clickHandler(2)
        在内联事件处理器中，可以使用$event来访问事件对象
            clickHandler(2,$event)

        取消事件冒泡
            传统：event.stopPropagation()
            vue: @click.stop = "clickHandler"
        事件修饰符：
            
    */

}





</script>
方法事件处理器的回调函数，bue会将事件对象作为参数传递
这个事件对象就是DOM中原生的事件对象，他里面包含了事件触发时的相关信息
通过该对象可以获取L: 触发事件的对象，触发事件的情况
同时通过该对象，可以对事件进行一些配置：
    取消事件传播，.....

为元素绑定事件：
    1.绑定事件使用v-on指令
        v-onL:时间名
        @事件名
    2.绑定事件的两种方式
        a,内联事件处理器
            事件触发时，直接执行js语句
            内联事件的处理器，回调函数的参数由vue帮我们自己传递，
        b.方法事件处理器
            事件触发时，vue会对事件的函数进行调用
        vue是如何区分两种处理器
            检查事件的值是否是合法的js标识符（变量名），或属性访问的路径
                如果是，则表示方法事件的事件处理器
                否则，表示他是内联事件处理器
                    foo： 方法
                    foo.bar:方法
                    foo++ : 内联
                    foo() : 内联


<template>
    <h1>事件</h1>
    <button @click="count++">内联事件处理器{{count}}</button>
    <button @click="clickHandler">方法事件处理器</button>
    <button @click="clickHandler()">内联事件处理器</button>
</template>
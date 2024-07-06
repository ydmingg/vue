<template>
  <h1>{{msg}}</h1>
  <p>{{stu.name}}---{{stu.age}}---{{stu.gender}}</p>
  <MyButton ></MyButton>
  <MyButton ></MyButton>
  <MyButton ></MyButton>
  <MyButton ></MyButton>
  <MyButton ></MyButton>
  <hr>
  <h2>{{hello}}</h2>
</template>

<script>
import { shallowReactive } from 'vue';
import MyButton from './components/MyButton.vue'
export default {
  data() { 
    // this.$data.xxx = "xxx" // 动态的添加响应式数据(不建议)
    // 建议将那些暂时没有使用到的属性，也添加到data返回的对象中，值可以设置为null

    
    // data的返回值对象，最终会被vue所代理.
    return { // 深层响应式对象
      msg: "Vue",
      stu: { // 对象中的属性也被做出了响应式属性...
        name: "张三",
        age: 22,
        gender: "男"
      },
      hello: null // 暂时占位，后面赋值
      
    }

    // // 浅层响应式对象
    // return shallowReactive({
    //   msg: "浅层响应式对象",
    //     stu: { 
    //     name: "张三",
    //     age: 22,
    //     gender: "男"
    //   }
    // })
  },

  components: {
    MyButton
  }


  
}

</script>
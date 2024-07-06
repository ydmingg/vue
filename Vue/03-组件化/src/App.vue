<template>
  <h1>{{ msg }}</h1>
  <MyButton>{{ msg }}</MyButton>
</template>

<script>
import MyButton from "./components/MyButton.vue";
// 定义一个自定义组件
export default {
  data() {
    return {
      msg: "asdfasdfadf",
    };
  },
  // template: `
  //     <h2>子组件</h2>
  //     <button @click="count++">点我</button>，被点了{{count}}次
  // `

  // 使用子组件
  components: {
    MyButton,
  },
};
</script>

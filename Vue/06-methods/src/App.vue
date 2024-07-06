<template>
  <!-- <h1>{{msg}}</h1>
  <h2>{{sum(2,1)}}</h2>
  <button @click="chageMsg">点我</button> -->

  <h1>{{stu.name}}-{{stu.age}}-{{stu.gender}}</h1>
  <h2>评语：{{info}};</h2>
  <button @click="updateAge">减龄</button>
  <!-- <div> {{firstName + lastName}}</div> -->
  <div> {{name}}</div>
  <hr>
  <div>{{arr[0]}}-->{{arr[1]}}-->{{arr[2]}}-->{{arr[3]}}</div>
</template>

<script>
export default {
  // data() { 
  //   return {
  //     msg: "Vue",
  //   }
  // },
  // /*
  //   methods: 用来指定实例对象中的方法
  //     他是个对象。可以在里面定义多个方法
  //     这些方法最终会挂载到组件实例上
  //     可以直接通过组件实例来调用这些方法
  //     所有组件实例上的属性都可以在模板中直接访问’

  // */
  // methods: {
  //   sum(a, b) {
  //     console.log(this); // 组件实例vm
  //     return a+b
  //   },
  //   chageMsg() {
  //     this.msg = 666666
  //   }

  // }

  data() {
    return {
      stu: {
        name: "张三",
        age: 18,
        gender: "男"
      },
      firstName: "zhang1",
      lastName: "光",
      arr: [0,1,2,3,44]
    }
  },
  /*
    computed 用来指定计算属性（性能更好些）
      {属性名: getter}
      计算属性：只在其依赖的数据发生改变时才会重新调用
      会对数据有缓存
    methods 用来指定方法
      {函数}
      每次组件重新渲染都会调用

  */
  computed: {// 有逻辑时使用
    // 在计算属性的getter中，尽量只做读取相关的逻辑
    // 不要执行那些会产生（副）作用的代码
    info() { 
      return this.stu.age >= 18
        ? "成人"
        : "小孩";    
    }
  },
  methods: { //调用方法时使用
    updateAge() { 
      this.stu.age = this.stu.age === 18 ? 17 : 18;
      
    },
    getInfo() { 
      console.log("调用了");
    }
  },
  /* 
    // 用来指定计算属性  
      {
        属性名: getter
      }
  
  */
  computed: { // 需要计算的属性全部写在computed中
    info() { 
      return this.stu.age>=18?"成人":"未成年";
    },
    // 计算属性的简写（只有getter时）
    // name() { 
    //   return this.firstName + this.lastName
    // },
    name: { 
      get(){ 
        return this.firstName + this.lastName
      },
      set(value){ // 计算属性也可以改（不推荐）
        console.log(value);
      }
    },

  }

  
}

</script>
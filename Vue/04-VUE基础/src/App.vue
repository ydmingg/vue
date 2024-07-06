<template>
  <h1>{{msg}}</h1>
  <p>{{name}}</p>
</template>

<script>
/*
  //组件：一个组件可以创建多个组件实例
  // 组件就是一个普通的js对象

*/

export default {
  // vm.$data: 时实际的代理对象，通过vm可以直接访问$data中的属性
  // vm.$data.msg 等价于vm.msg
  // 可以通过vm.$data动态的向组件中添加响应式数据


  
  // data 就相当于对象中的一个函数(不要使用箭头函数)
  // 在data中，this就相当于当前的组件实例vm
  // -----如果使用箭头函数，就无法通过this来访问组件实例
  // data: vm => { // 不推荐
  //   console.log(vm);
  //   console.log(this) // 此时无法获取this
  //   return {
  //     msg: "vue"
  //   }
  // }
      
  data() {  // 推荐使用
    console.log(this); // this指向vm
    // 直接向组件实例中添加的属性，不会被vue所代理，他不是响应数据，修改后页面不会发送改变
    this.name = "哈哈哈哈哈"
    // data会返回一个对象作为返回值，vue会对该对象进行代理
    //  从而将其转换为响应式数据（当数据变化时，网页也会跟着变）
    //  响应式数据可以直接通过组件实例访问
    return {  // 创建了一个代理
      msg: "Vue"
    }
  },

  created() { 
    // 会在组件创建完成后调用（不推荐这么做）
    this.$data.name = "调用了"
  }
  
}

</script>
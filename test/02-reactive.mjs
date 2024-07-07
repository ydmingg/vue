// 演示reactive
import { reactive,ref } from "vue";

const stu = reactive({ name: "张三" })
const count = ref(0)
const person = ref({name:"张2",age:11}) // {value:{name:"张2",age:11}}

stu.name = 2222
console.log(stu); //Proxy(Object) {name: '张三'}

//
console.log(count, count.value);

// 
console.log(person.value.name);
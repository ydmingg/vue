<template>
<div id="app">
    <section class="section">
        <h1>JavaScript 条件判断</h1>
        
        <h3>1. if...else 语句</h3>
        <div class="example">
            <p>成绩: {{ score }}</p>
            <p v-if="score >= 90">优秀</p>
            <p v-else-if="score >= 80">良好</p>
            <p v-else-if="score >= 70">中等</p>
            <p v-else-if="score >= 60">及格</p>
            <p v-else>不及格</p>
        </div>

        <h3>2. switch 语句</h3>
        <div class="example">
            <p>当前月份: {{ month }}</p>
            <p>{{ getSeason(month) }}</p>
        </div>

        <h3>3. 三元运算符</h3>
        <div class="example">
            <p>年龄: {{ age }}</p>
            <p>{{ age >= 18 ? '成年人' : '未成年人' }}</p>
        </div>
    </section>

    <!-- 循环示例 -->
    <section class="section">
        <h2>循环结构</h2>
        
        <h3>1. for 循环</h3>
        <div class="example">
            <p>1到5的平方:</p>
            <ul>
                <li v-for="i in 5" :key="i">{{ i }}² = {{ i * i }}</li>
            </ul>
        </div>

        <h3>2. while 循环</h3>
        <div class="example">
            <p>while 循环计算阶乘:</p>
            <p>{{ factorial }}! = {{ calculateFactorial(factorial) }}</p>
        </div>

        <h3>3. for...of 循环</h3>
        <div class="example">
            <p>遍历数组:</p>
            <ul>
                <li v-for="(item, index) of fruits" :key="index">{{ index + 1 }}. {{ item }}</li>
            </ul>
        </div>

        <h3>4. for...in 循环</h3>
        <div class="example">
            <p>遍历对象属性:</p>
            <ul>
                <li v-for="(value, key) in person" :key="key">{{ key }}: {{ value }}</li>
            </ul>
        </div>
    </section>

    <!-- 交互式示例 -->
    <section class="section">
        <h2>交互式示例</h2>
        <div class="interactive">
            <input v-model="inputNumber" type="number" placeholder="输入一个数字" />
            <button @click="checkNumber">判断奇偶</button>
            <p>结果: {{ result }}</p>
        </div>
    </section>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 响应式数据
const score = ref(85)
const month = ref(3)
const age = ref(20)
const factorial = ref(5)
const inputNumber = ref('')
const result = ref('')

// 数组和对象数据
const fruits = ['苹果', '香蕉', '橙子', '葡萄', '草莓']
const person = reactive({
    name: '张三',
    age: 25,
    city: '北京',
    job: '程序员'
})

// 方法
const getSeason = (month) => {
    switch (month) {
        case 3:
        case 4:
        case 5:
            return '春季'
        case 6:
        case 7:
        case 8:
            return '夏季'
        case 9:
        case 10:
        case 11:
            return '秋季'
        case 12:
        case 1:
        case 2:
            return '冬季'
        default:
            return '无效月份'
    }
}

const calculateFactorial = (n) => {
    let result = 1
    let i = n
    
    
    while (i > 0) {
        
        result *= i
        i--
        // console.log(result);
        // 5*1,5*4,20*3,60*2,120*1
    }  
    
    return result
}

const checkNumber = () => {
    const num = parseInt(inputNumber.value)
    if (isNaN(num)) {
        result.value = '请输入有效数字'
    } else {
        result.value = num % 2 === 0 ? `${num} 是偶数` : `${num} 是奇数`
    }
}
</script>

<style scoped>
#app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  h1 {
    color: #2c3e50;
    text-align: center;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
  }
.section {
    margin: 30px 0;
    padding: 20px;
    border: 1px solid #ecf0f1;
    border-radius: 8px;
    background-color: #f8f9fa;
}

.section h2 {
    color: #34495e;
    margin-top: 0;
    border-left: 4px solid #3498db;
    padding-left: 15px;
}

.section h3 {
    color: #2c3e50;
    margin-top: 20px;
}

.example {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    margin: 10px 0;
}

.example p {
    margin: 8px 0;
}

.example ul {
    padding-left: 20px;
}

.example li {
    margin: 8px 0;
    line-height: 1.6;
}

.interactive {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.interactive input {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 16px;
}

.interactive button {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.interactive button:hover {
    background-color: #2980b9;
}

.interactive p {
    margin-top: 15px;
    font-weight: bold;
    color: #2c3e50;
}
</style>
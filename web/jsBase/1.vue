<template>
    <div id="app">
      <h1>JavaScript 基础语法学习</h1>
      
      <!-- 变量声明示例 -->
      <section class="section">
        <h2>1. 变量声明</h2>
        <div class="example">
          <h3>变量声明方式：</h3>
          <ul>
            <li><code>var</code> - 函数作用域，可以重复声明</li>
            <li><code>let</code> - 块级作用域，不能重复声明</li>
            <li><code>const</code> - 块级作用域，常量，不能重新赋值</li>
          </ul>
          <div class="output">
            <p>var 示例: <span id="var-example"></span></p>
            <p>let 示例: <span id="let-example"></span></p>
            <p>const 示例: <span id="const-example"></span></p>
          </div>
        </div>
      </section>
  
      <!-- 数据类型示例 -->
      <section class="section">
        <h2>2. 数据类型</h2>
        <div class="example">
          <h3>基本数据类型：</h3>
          <ul>
            <li><code>Number</code> - 数字类型</li>
            <li><code>String</code> - 字符串类型</li>
            <li><code>Boolean</code> - 布尔类型</li>
            <li><code>Undefined</code> - 未定义</li>
            <li><code>Null</code> - 空值</li>
            <li><code>Symbol</code> - 符号类型（ES6）</li>
          </ul>
          <h3>引用数据类型：</h3>
          <ul>
            <li><code>Object</code> - 对象</li>
            <li><code>Array</code> - 数组</li>
            <li><code>Function</code> - 函数</li>
          </ul>
          <div class="output">
            <p>数据类型检测: <span id="type-examples"></span></p>
          </div>
        </div>
      </section>
  
      <!-- 运算符示例 -->
      <section class="section">
        <h2>3. 运算符</h2>
        <div class="example">
          <h3>算术运算符：</h3>
          <div class="output">
            <p>加法: <span id="add-example"></span></p>
            <p>减法: <span id="subtract-example"></span></p>
            <p>乘法: <span id="multiply-example"></span></p>
            <p>除法: <span id="divide-example"></span></p>
            <p>取余: <span id="modulo-example"></span></p>
            <p>幂运算: <span id="power-example"></span></p>
          </div>
          
          <h3>比较运算符：</h3>
          <div class="output">
            <p>相等比较: <span id="comparison-examples"></span></p>
          </div>
          
          <h3>逻辑运算符：</h3>
          <div class="output">
            <p>逻辑运算: <span id="logical-examples"></span></p>
          </div>
        </div>
      </section>
  
      <!-- 交互式示例 -->
      <section class="section">
        <h2>4. 交互式示例</h2>
        <div class="interactive">
          <input type="text" id="userInput" placeholder="输入一个数字" />
          <button @click="calculate">计算平方</button>
          <p>结果: <span id="result"></span></p>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  // 变量声明示例
  const varExample = () => {
    var message = "Hello World"
    var message = "Hello JavaScript" // 可以重复声明
    return message
  }
  
  const letExample = () => {
    let count = 1
    // let count = 2 // 这会报错，不能重复声明
    count = 2 // 但可以重新赋值
    return count
  }
  
  const constExample = () => {
    const PI = 3.14159
    // PI = 3.14 // 这会报错，const 不能重新赋值
    return PI
  }
  
  // 数据类型示例
  const typeExamples = () => {
    const examples = [
      { value: 42, type: typeof 42 },
      { value: "Hello", type: typeof "Hello" },
      { value: true, type: typeof true },
      { value: undefined, type: typeof undefined },
      { value: null, type: typeof null },
      { value: Symbol(), type: typeof Symbol() },
      { value: {}, type: typeof {} },
      { value: [], type: typeof {} },
      { value: function(){}, type: typeof function(){} }
    ]

    
      const exMap = examples.map(ex => { 
        
        
          if (Array.isArray(ex.value)) {
              ex.value = '[]'
          } else if (JSON.stringify(ex.value) === '{}') { 
            ex.value = '{}'
          } else if (ex.type === 'symbol') { 
            ex.value = String(ex.value)
          }
            
          return `${ex.value} (${ex.type})`;
      })

    //   console.log(exMap);
      

      return exMap.join(', ')
  }


const obj = [{}];
obj.map(reg => { 
    // console.log(reg);
    
    return reg
})




  
  // 运算符示例
  const operatorExamples = () => {
    const a = 10
    const b = 3
    
    return {
      add: a + b,
      subtract: a - b,
      multiply: a * b,
      divide: a / b,
      modulo: a % b,
      power: a ** b
    }
  }
  
  const comparisonExamples = () => {
    const examples = [
      { expr: "5 == '5'", result: 5 == '5' },
      { expr: "5 === '5'", result: 5 === '5' },
      { expr: "5 != '5'", result: 5 != '5' },
      { expr: "5 !== '5'", result: 5 !== '5' },
      { expr: "5 > 3", result: 5 > 3 },
      { expr: "5 >= 5", result: 5 >= 5 }
    ]
    
    return examples.map(ex => `${ex.expr} = ${ex.result}`).join(', ')
  }
  
  const logicalExamples = () => {
    const examples = [
      { expr: "true && false", result: true && false },
      { expr: "true || false", result: true || false },
      { expr: "!true", result: !true },
      { expr: "true && (false || true)", result: true && (false || true) }
    ]
    
    return examples.map(ex => `${ex.expr} = ${ex.result}`).join(', ')
  }
  
  // 交互式计算函数
  const calculate = () => {
    const input = document.getElementById('userInput')
    const result = document.getElementById('result')
    
    const num = parseFloat(input.value)
    if (isNaN(num)) {
      result.textContent = '请输入有效数字'
    } else {
      result.textContent = `${num} 的平方是 ${num ** 2}`
    }
  }
  
  // 页面加载完成后执行示例
  onMounted(() => {
    // 显示变量示例
    document.getElementById('var-example').textContent = varExample()
    document.getElementById('let-example').textContent = letExample()
    document.getElementById('const-example').textContent = constExample()
    
    // 显示数据类型示例
    document.getElementById('type-examples').textContent = typeExamples()
    
    // 显示运算符示例
    const ops = operatorExamples()
    document.getElementById('add-example').textContent = `10 + 3 = ${ops.add}`
    document.getElementById('subtract-example').textContent = `10 - 3 = ${ops.subtract}`
    document.getElementById('multiply-example').textContent = `10 * 3 = ${ops.multiply}`
    document.getElementById('divide-example').textContent = `10 / 3 = ${ops.divide}`
    document.getElementById('modulo-example').textContent = `10 % 3 = ${ops.modulo}`
    document.getElementById('power-example').textContent = `10 ** 3 = ${ops.power}`
    
    // 显示比较运算符示例
    document.getElementById('comparison-examples').textContent = comparisonExamples()
    
    // 显示逻辑运算符示例
    document.getElementById('logical-examples').textContent = logicalExamples()
  })
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
  
  .example h3 {
    color: #2c3e50;
    margin-top: 20px;
  }
  
  ul {
    padding-left: 20px;
  }
  
  li {
    margin: 8px 0;
    line-height: 1.6;
  }
  
  code {
    background-color: #ecf0f1;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    color: #e74c3c;
  }
  
  .output {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-top: 15px;
  }
  
  .output p {
    margin: 8px 0;
    font-family: 'Courier New', monospace;
    background-color: #f8f9fa;
    padding: 5px;
    border-radius: 3px;
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
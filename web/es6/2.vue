<template>
	<div id="app">
		<h1>ES6 模板字符串、默认参数、解构赋值</h1>
		<section class="section">
			<h2>1. 模板字符串</h2>
			<div class="output">
				<p>基本用法: {{ greeting }}</p>
				<p>表达式插值: {{ calcStr }}</p>
				<p>多行字符串:</p>
				<div
					style="
						background: #fffbe6;
						padding: 8px;
						border-radius: 4px;
					">
					{{ multiLineStr }}
				</div>
			</div>
		</section>

		<section class="section">
			<h2>2. 默认参数</h2>
			<div class="output">
				<p>hello(): {{ hello() }}</p>
				<p>hello('Vue'): {{ hello("Vue") }}</p>
				<p>sum(): {{ sum() }}</p>
				<p>sum(9, 5): {{ sum(9, 5) }}</p>
			</div>
		</section>

		<section class="section">
			<h2>3. 解构赋值</h2>
			<div class="output">
				<p>
					数组解构: 第一个水果是 {{ firstFruit }}，其它是
					{{ restFruits.join("，") }}
				</p>
				<p>对象解构: 姓名: {{ userName }}，城市: {{ userCity }}</p>
				<p>
					嵌套解构: 年龄: {{ userAge }}，爱好:
					{{ hobbies.join("，") }}
				</p>
				<p>函数参数解构: {{ userInfo }}</p>
			</div>
		</section>

		<section class="section">
			<h2>4. 综合示例</h2>
			<div class="output">
				<p>请填写你的信息：</p>
				<div>
					<label>姓名：</label>
					<input
						v-model="inputName"
						placeholder="姓名"
						style="width: 120px" />
					<label>年龄：</label>
					<input
						v-model="inputAge"
						type="number"
						placeholder="年龄"
						style="width: 70px" />
					<label>城市：</label>
					<input
						v-model="inputCity"
						placeholder="城市"
						style="width: 120px" />
					<button @click="showSummary">生成简介</button>
				</div>
				<div v-if="summaryStr" style="margin-top: 10px">
					{{ summaryStr }}
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	// -------------------
	// 1. 模板字符串
	// -------------------
	const name = "小明";
	const age = 18;
	const city = "广州";
	const greeting = `你好，我是${name}，今年${age}岁，来自${city}。`;

	const a = 3,
		b = 7;
	const calcStr = `3 + 7 = ${a + b}`;

	const multiLineStr = `模板字符串可以
  直接写多行内容，
  非常方便！`;

	// -------------------
	// 2. 默认参数
	// -------------------
	function hello(who = "世界") {
		return `你好, ${who}`;
	}
	function sum(x = 1, y = 2) {
		return x + y;
	}

	// -------------------
	// 3. 解构赋值
	// -------------------
	const fruits = ["苹果", "香蕉", "葡萄", "橙子"];
	const [firstFruit, ...restFruits] = fruits;

	const user = {
		name: "张三",
		city: "北京",
		info: {
			age: 22,
			hobbies: ["阅读", "音乐"],
		},
	};

	const {
		name: userName,
		city: userCity,
		info: { age: userAge, hobbies },
	} = user;

	function getUserInfo({ name, city, info: { age } }) {
		return `姓名: ${name}, 城市: ${city}, 年龄: ${age}`;
	}
	const userInfo = getUserInfo(user);

	// -------------------
	// 4. 综合示例
	// -------------------
	import { ref } from "vue";
	const inputName = ref("");
	const inputAge = ref("");
	const inputCity = ref("");
	const summaryStr = ref("");

	function showSummary() {
		// 解构赋值 + 默认参数 + 模板字符串
		const person = {
			name: inputName.value || "（未填）",
			age: inputAge.value || "（未填）",
			city: inputCity.value || "（未填）",
		};
		const { name, age, city } = person;
        summaryStr.value = `大家好，我叫${name}，今年${age}岁，来自${city}。很高兴认识大家！`;
        console.log(summaryStr.value);
        
	}
</script>

<style scoped>
	#app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 24px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}
	h1 {
		color: #2c3e50;
		text-align: center;
		margin-bottom: 22px;
		font-size: 2em;
	}
	.section {
		margin-bottom: 22px;
		background: #f8f9fa;
		border-radius: 8px;
		padding: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
	}
	h2 {
		color: #34495e;
		border-bottom: 2px solid #3498db;
		padding-bottom: 7px;
		margin-bottom: 12px;
	}
	.output {
		background: #eaf6ff;
		padding: 10px;
		border-radius: 4px;
		margin: 10px 0;
	}
	label {
		margin-right: 6px;
	}
	input[type="text"],
	input[type="number"] {
		margin: 0 4px;
		padding: 4px 8px;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: 15px;
	}
	button {
		padding: 5px 14px;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-left: 8px;
	}
	button:hover {
		background: #2980b9;
	}
</style>

<template>
	<div id="app">
		<h1>ES6 模块化（import / export）</h1>
		<section class="section">
			<h2>1. 模块化简介</h2>
			<p>
				ES6模块化允许我们将功能代码分散到不同文件，通过<mark>export</mark>导出、<mark>import</mark>导入，在主文件中使用，提升代码复用性和维护性。
			</p>
		</section>

		<section class="section">
			<h2>2. 主要功能方法展示</h2>
			<div class="output">
				<p>PI: {{ PI }}</p>
				<p>add(7, 11): {{ add(7, 11) }}</p>
				<p>multiply(6, 7): {{ multiply(6, 7) }}</p>
				<p>用户配置合并: {{ mergedConfig }}</p>
			</div>
		</section>

		<section class="section">
			<h2>3. 异步导入模块演示</h2>
			<div class="output">
				<button @click="loadAsyncModule" style="margin-bottom: 8px">
					点击异步加载
				</button>
				<div v-if="asyncResult !== null">
					异步模块返回: {{ asyncResult }}
				</div>
			</div>
		</section>

		<section class="section">
			<h2>4. 综合示例：模块化管理数学工具</h2>
			<div class="output">
				<p>输入两个数字，计算加法与乘法：</p>
				<input type="number" v-model="numA" style="width: 80px" /> +
				<input type="number" v-model="numB" style="width: 80px" />
				<button @click="calc">计算</button>
				<div v-if="calcResult !== null">
					加法：{{ calcResult.add }}，乘法：{{ calcResult.multiply }}
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	// ------------------------
	// 模拟 math.js 模块内容
	// ------------------------
	const PI = 3.14159;
	function add(a, b) {
		return a + b;
	}
	function multiply(a, b) {
		return a * b;
	}

	// ------------------------
	// 模块化实际应用：配置合并
	// ------------------------
	const defaultConfig = {
		theme: "light",
		language: "zh-CN",
		notifications: true,
		autoSave: true,
	};
	const userConfig = {
		theme: "dark",
		notifications: false,
	};
	function mergeConfig(custom) {
		return { ...defaultConfig, ...custom };
	}
	const mergedConfig = mergeConfig(userConfig);

	// ------------------------
	// 异步导入模块演示
	// ------------------------
	import { ref } from "vue";
	const asyncResult = ref(null);

	async function loadAsyncModule() {
		asyncResult.value = "加载中...";
		// 模拟动态导入math模块
		await new Promise((resolve) => setTimeout(resolve, 600));
		// 假装动态导入了math工具
		const asyncMath = {
			PI: 3.14159,
			add: (a, b) => a + b,
			multiply: (a, b) => a * b,
		};
		asyncResult.value = `add(10, 15) = ${asyncMath.add(
			10,
			15
		)}, multiply(4, 8) = ${asyncMath.multiply(4, 8)}`;
	}

	// ------------------------
	// 综合示例：模块化管理数学工具
	// ------------------------
	const numA = ref("");
	const numB = ref("");
	const calcResult = ref(null);

	function calc() {
		const a = Number(numA.value);
		const b = Number(numB.value);
		calcResult.value = {
			add: add(a, b),
			multiply: multiply(a, b),
		};
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
	.output span {
		color: #e67e22;
		font-family: "Courier New", monospace;
	}
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

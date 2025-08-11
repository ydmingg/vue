<template>
	<div id="app">
		<h1>ES6 Promise 基础与延时加载示例</h1>
		<section class="section">
			<h2>1. Promise 基础简介</h2>
			<div class="output">
				<p>
					Promise 是 ES6
					引入的异步编程解决方案，用于处理耗时操作的结果。Promise
					有三种状态：<strong>pending（进行中）</strong>、<strong>fulfilled（已成功）</strong>、<strong>rejected（已失败）</strong>。
				</p>
				<p>
					创建方法：
					<span
						>new Promise((resolve, reject) =&gt; { /* 异步操作 */
						})</span
					>
				</p>
			</div>
		</section>

		<section class="section">
			<h2>2. 示例：模拟延时加载数据</h2>
			<div class="output">
				<button @click="loadData" :disabled="loading">
					{{ loading ? "正在加载..." : "点击加载数据" }}
				</button>
				<div v-if="result !== null" style="margin-top: 10px">
					结果：{{ result }}
				</div>
				<div v-if="errorMsg" style="margin-top: 10px; color: red">
					错误：{{ errorMsg }}
				</div>
			</div>
		</section>

		<section class="section">
			<h2>3. 主要功能方法</h2>
			<div class="output">
				<ul>
					<li>
						<strong>delay(ms):</strong> 返回一个延时的 Promise，ms
						毫秒后 resolve。
					</li>
					<li>
						<strong>getData():</strong> 使用 Promise
						模拟获取数据并延时，20% 概率模拟失败。
					</li>
					<li>
						<strong>loadData():</strong>
						点击按钮后，处理异步加载流程。
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script setup>
	// 延时 promise 工具
	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// 模拟异步加载数据
	function getData() {
		return delay(1200).then(() => {
			// 20% 概率模拟失败
			if (Math.random() < 0.2) {
				return Promise.reject("网络异常，请重试");
			}
			return "异步数据加载成功！";
		});
	}

	// 页面状态和事件方法
	import { ref } from "vue";
	const result = ref(null);
	const errorMsg = ref("");
	const loading = ref(false);

	async function loadData() {
		result.value = null;
		errorMsg.value = "";
		loading.value = true;
		try {
			result.value = await getData();
		} catch (err) {
			errorMsg.value = err;
		} finally {
			loading.value = false;
		}
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
	button {
		padding: 6px 15px;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	button:disabled {
		background: #95a5a6;
		cursor: not-allowed;
	}
	ul {
		margin: 10px 0 0 20px;
	}
</style>

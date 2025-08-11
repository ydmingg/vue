<template>
	<div id="app">
		<h1>ES6+ & 异步编程 —— 第四节：async/await 与 fetch API 示例</h1>
		<section class="section">
			<h2>1. async/await 简介</h2>
			<div class="output">
				<p>
					<strong>async</strong> 用于声明异步函数，<strong
						>await</strong
					>
					用于等待 Promise 结果，使异步代码像同步一样书写和处理异常。
				</p>
			</div>
		</section>

		<section class="section">
			<h2>2. fetch API 简介</h2>
			<div class="output">
				<p>
					fetch 是原生 JavaScript 的网络请求方法，返回
					Promise，可用于请求远程接口。
				</p>
				<p>
					常用语法：<br />
					<span>fetch(url, options)</span>
				</p>
			</div>
		</section>

		<section class="section">
			<h2>3. 示例：请求 GitHub 用户信息</h2>
			<div class="output">
				<label>GitHub 用户名：</label>
				<input
					v-model="username"
					placeholder="如：octocat"
					style="width: 180px" />
				<button
					@click="getUserInfo"
					:disabled="loading"
					style="margin-left: 8px">
					{{ loading ? "请求中..." : "获取用户信息" }}
				</button>
				<div v-if="user" style="margin-top: 12px">
					<strong>用户名：</strong> {{ user.login }}<br />
					<strong>昵称：</strong> {{ user.name || "无" }}<br />
					<strong>头像：</strong>
					<img
						:src="user.avatar_url"
						width="64"
						style="vertical-align: middle; border-radius: 8px"
						v-if="user.avatar_url" /><br />
					<strong>主页：</strong>
					<a :href="user.html_url" target="_blank">{{
						user.html_url
					}}</a>
				</div>
				<div v-if="errorMsg" style="margin-top: 12px; color: red">
					错误：{{ errorMsg }}
				</div>
			</div>
		</section>

		<section class="section">
			<h2>4. 主要方法展示</h2>
			<div class="output">
				<ul>
					<li>
						<strong>async function getUserInfo():</strong> 使用
						async/await 和 fetch 请求 GitHub API。
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	// 输入框和结果状态
	const username = ref("octocat");
	const user = ref(null);
	const errorMsg = ref("");
	const loading = ref(false);

	// 主要方法：请求 GitHub 用户信息
	async function getUserInfo() {
		user.value = null;
		errorMsg.value = "";
		loading.value = true;
		try {
			// 使用 fetch API 请求公开的 GitHub 用户接口
			const res = await fetch(
				`https://api.github.com/users/${username.value}`
			);
			if (!res.ok) {
				throw new Error("用户不存在或请求失败！");
			}
			const data = await res.json();
			user.value = data;
		} catch (err) {
			errorMsg.value = err.message || String(err);
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
	input[type="text"] {
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
	}
	button:disabled {
		background: #95a5a6;
		cursor: not-allowed;
	}
	img {
		margin: 4px 0;
		border: 1px solid #ccc;
	}
	ul {
		margin: 10px 0 0 20px;
	}
</style>

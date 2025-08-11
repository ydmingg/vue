<template>
	<div id="app">
		<h1>ES6 综合练习 - 用 API 显示天气数据</h1>
		<section class="section">
			<h2>1. 请输入城市名称，查询天气</h2>
			<div class="output">
				<label>城市：</label>
				<input
					v-model="city"
					placeholder="如：北京"
					style="width: 160px" />
				<button
					@click="getWeather"
					:disabled="loading"
					style="margin-left: 8px">
					{{ loading ? "查询中..." : "获取天气" }}
				</button>
			</div>
		</section>

		<section class="section">
			<h2>2. 查询结果</h2>
			<div class="output" v-if="weather">
				<p>
					<strong>城市：</strong>{{ weather.city }}<br />
					<strong>天气：</strong>{{ weather.text }}<br />
					<strong>气温：</strong>最低温：{{ weather.low }}；最高温：{{ weather.high }}<br />
					<strong>风向：</strong>{{ weather.wind_dir }}<br />
					<strong>风力：</strong>{{ weather.wind_class }}<br />
					<strong>更新时间：</strong>{{ weather.updatetime }}
				</p>
			</div>
			<div v-if="errorMsg" style="color: red; margin: 10px 0">
				错误：{{ errorMsg }}
			</div>
		</section>

		<section class="section">
			<h2>3. 主要功能方法展示</h2>
			<div class="output">
				<ul>
					<li>使用 <strong>模板字符串</strong> 构建请求 URL</li>
					<li>使用 <strong>async/await</strong> 异步加载天气数据</li>
					<li>使用 <strong>解构赋值</strong> 处理接口返回的数据</li>
					<li>
						使用 <strong>try/catch</strong> 错误处理，用户友好提示
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script setup>
	// 免费天气API（和风天气、天行数据等如有KEY可设置key参数，这里用天行数据的公共示例API）
	import { ref } from "vue";
	const city = ref("北京");
	const weather = ref(null);
	const errorMsg = ref("");
	const loading = ref(false);

	// ES6 综合：模板字符串、async/await、解构赋值、try/catch
	async function getWeather() {
		weather.value = null;
		errorMsg.value = "";
		loading.value = true;
		try {
			// 用模板字符串拼接URL
			// 你也可以换成你自己的天气API
			const url = `https://api.vvhan.com/api/weather?city=${encodeURIComponent(
				city.value
			)}&type=now`;
            const res = await fetch(url);
			if (!res.ok) throw new Error("请求失败，请检查城市名或稍后再试");
			const data = await res.json();
            // 解构赋值提取天气数据
			const {
				city: cityName = city.value,
				data: {
					type: text,
                    low,
                    high,
					fengxiang: wind_dir,
                    fengli: wind_class,
                    date: updatetime,
				} = {},
            } = data || {};
            console.log(data);
            
            
			if (!text || !low || !high) throw new Error("未能获取到天气数据");
			weather.value = {
				city: cityName,
				text,
				low,
                high,
				wind_dir,
				wind_class,
				updatetime,
			};
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
	ul {
		margin: 10px 0 0 20px;
	}
</style>

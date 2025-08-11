<template>
	<div id="app">
		<h1>TS 项目实战 —— 第一节：TS 基础类型与模块化思维天气应用</h1>
		<section class="section">
			<h2>1. 输入城市，查询天气</h2>
			<div class="output">
				<label>城市：</label>
				<input
					v-model="city"
					placeholder="如：北京"
					style="width: 160px" />
				<button
					@click="onSearch"
					:disabled="state.loading"
					style="margin-left: 8px">
					{{ state.loading ? "查询中..." : "查询天气" }}
				</button>
			</div>
		</section>

		<section class="section">
			<h2>2. 天气结果展示</h2>
			<WeatherCard v-if="state.weather" :weather="state.weather" />
			<div v-if="state.errorMsg" style="color: red; margin: 10px 0">
				错误：{{ state.errorMsg }}
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive } from "vue";

	// =======================
	// 模块1：类型定义
	// =======================
	interface WeatherInfo {
		city: string;
		text: string;
		low: number | string;
		high: number | string;
		updatetime: string;
		icon?: string;
	}

	// =======================
	// 模块2：API工具，负责网络数据请求
	// =======================
	async function fetchWeather(city: string): Promise<WeatherInfo> {
		const url: string = `https://api.vvhan.com/api/weather?city=${encodeURIComponent(
			city
		)}&type=now`;
		const res: Response = await fetch(url);
		if (!res.ok) throw new Error("请求失败，请检查城市名或稍后再试");
		const data: any = await res.json();
		const {
			city: cityName = city,
			data: { type: text, low, high, updatetime, icon } = {},
		} = data || {};
		// console.log(data.data);

		if (!text || !low || !high) throw new Error("未能获取到天气数据");
		return {
			city: cityName,
			text: String(text),
			low: typeof low === "number" ? low : Number(low) || low,
			high: typeof high === "number" ? high : Number(high) || high,
			updatetime: String(updatetime),
			icon: icon,
		};
	}

	// =======================
	// 模块3：数据状态，统一管理页面状态
	// =======================
	const city = ref<string>("北京");
	const state = reactive<{
		weather: WeatherInfo | null;
		errorMsg: string;
		loading: boolean;
	}>({
		weather: null,
		errorMsg: "",
		loading: false,
	});

	// =======================
	// 模块4：业务控制器，统一处理UI逻辑
	// =======================
	async function onSearch() {
		state.weather = null;
		state.errorMsg = "";
		state.loading = true;
		try {
			const result = await fetchWeather(city.value);
			state.weather = result;
		} catch (err: any) {
			state.errorMsg = err.message || String(err);
		} finally {
			state.loading = false;
		}
	}
</script>

<script lang="ts">
	// =======================
	// 模块5：WeatherCard 局部组件（支持 Vue 3.4+）
	// =======================
	import { defineComponent } from "vue";

	export const WeatherCard = defineComponent({
		name: "WeatherCard",
		props: {
			weather: {
				type: Object,
				required: true,
			},
		},
		template: `
    <div class="output">
      <p>
        <strong>城市：</strong>{{ weather.city }}<br>
        <strong>天气：</strong>{{ weather.text }}<br>
        <strong>气温：</strong>{{ weather.temp }}°C<br>
        <strong>更新时间：</strong>{{ weather.updatetime }}<br>
        <span v-if="weather.icon">
          <img :src="weather.icon" :alt="weather.text" width="64" style="vertical-align:middle; border-radius:8px;" />
        </span>
      </p>
    </div>
  `,
	});
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
		border: none;
		background: #fff;
	}
</style>

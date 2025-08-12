<template>
	<div class="weather-container">
		<h1>天气查询应用</h1>
		<div class="search-box">
			<input
				v-model="city"
				type="text"
				placeholder="输入城市名称"
				@keyup.enter="fetchWeather" />
			<button @click="fetchWeather">查询</button>
		</div>

		<div v-if="weather" class="weather-info">
			<h2>{{ weather.city }}</h2>
			<p>天气: {{ weather.condition }}</p>
			<p>温度: {{ weather.temp }}°C</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	interface WeatherData {
		city: string; // string类型
		condition: string; // string类型
		temp: number; // number类型
		isDaytime?: boolean; // boolean类型(可选)
	}

	export default defineComponent({
		name: "WeatherApp",
		setup() {
			// string类型示例
			const city = ref<string>("北京");

			// 联合类型示例(string或null)
			const weather = ref<WeatherData | null>(null);

			// boolean类型示例
			const loading = ref<boolean>(false);

			// any类型示例(API响应)
			let apiResponse: any;

			const fetchWeather = async () => {
				loading.value = true;
				try {
					// 模拟API调用
					apiResponse = await fetch(
						`https://api.example.com/weather?city=${city.value}`
					);
					const data = await apiResponse.json();

					weather.value = {
						city: data.city as string,
						condition: data.condition as string,
						temp: Number(data.temp), // 转换为number
						isDaytime: Boolean(data.isDay), // 转换为boolean
					};
				} catch (error) {
					console.error("获取天气失败:", error);
				} finally {
					loading.value = false;
				}
			};

			return { city, weather, loading, fetchWeather };
		},
	});
</script>

<style>
	.weather-container {
		max-width: 600px;
		margin: 0 auto;
		padding: 20px;
	}
	.search-box {
		margin: 20px 0;
	}
	.weather-info {
		margin-top: 20px;
		padding: 15px;
		border: 1px solid #eee;
	}
</style>

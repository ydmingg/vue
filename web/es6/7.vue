<template>
	<div id="app">
		<h1>ES6+ 项目实战 —— 第七节：天气查询应用</h1>
		<section class="section">
			<h2>1. 输入城市，查询天气</h2>
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
					{{ loading ? "查询中..." : "查询天气" }}
				</button>
			</div>
		</section>

		<section class="section">
			<h2>2. 天气结果展示</h2>
			<div class="output" v-if="weather">
				<p>
					<strong>城市：</strong>{{ weather.city }}<br />
					<strong>天气：</strong>{{ weather.text }}<br />
					<strong>气温：</strong>{{ weather.low }} ~ {{ weather.high }}<br />
					<strong>更新时间：</strong>{{ weather.updatetime }}<br />
					<span v-if="weather.icon">
						<img
							:src="weather.icon"
							:alt="weather.text"
							width="64"
							style="
								vertical-align: middle;
								border-radius: 8px;
							" />
					</span>
				</p>
			</div>
			<div v-if="errorMsg" style="color: red; margin: 10px 0">
				错误：{{ errorMsg }}
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	const city = ref("北京");
	const weather = ref(null);
	const errorMsg = ref("");
	const loading = ref(false);

	// 天气图标映射（可扩展）
	const iconMap = {
		"晴": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/100.svg",
        "多云": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/101.svg",
        "阴": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/104.svg",
        "小雨": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/300.svg",
        "中雨": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/301.svg",
        "大雨": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/302.svg",
        "阵雨": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/305.svg",
        "雷阵雨": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/306.svg",
        "雨夹雪": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/404.svg",
        "小雪": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/400.svg",
        "中雪": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/401.svg",
        "大雪": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/402.svg",
        "雾": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/500.svg",
        "霾": "https://cdn.jsdelivr.net/gh/qweather-icons/icons/svg/502.svg"
		// 更多天气可补充
	};

	async function getWeather() {
		weather.value = null;
		errorMsg.value = "";
		loading.value = true;
		try {
			// 免费天气接口
			const url = `https://api.vvhan.com/api/weather?city=${encodeURIComponent(
				city.value
			)}&type=now`;
			const res = await fetch(url);
			if (!res.ok) throw new Error("请求失败，请检查城市名或稍后再试");
			const data = await res.json();
			// 兼容API数据结构
			const {
				city: cityName = city.value,
                data: { type: text, low, high, date: updatetime },
                air: { aqi_url: iconImg} = {},
			} = data || {};

            console.log(data);
            
			if (!text || !low || !high) throw new Error("未能获取到天气数据");
			// 自动匹配图标
			// let icon = iconMap[text] || "";
			let icon = iconImg || "";
			weather.value = { city: cityName, text, low, high, updatetime, icon };
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
		background: #fff;
	}
</style>

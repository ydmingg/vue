<template>
	<div id="app">
		<h1>TS 基础类型与模块化思维天气应用</h1>
		<section class="section">
			<h2>1. 变量类型注解</h2>
			<div class="output">
				<p>let name: string = "Alice";</p>
				<p>let age: number = 25;</p>
				<p>let isActive: boolean = true;</p>
			</div>
		</section>
		<section class="section">
			<h2>2. 函数参数和返回值类型</h2>
			<div class="output">
				<p>
					function greet(name: string): string { return `Hello,
					${name}!`; }
				</p>
			</div>
		</section>
		<section class="section">
			<h2>3. 接口（Interface）： 用于定义对象的类型。</h2>
			<div class="output">
				<p>
					interface User { id: number; name: string; isAdmin?:
					boolean; // 可选属性 }
				</p>
			</div>
		</section>
		<section class="section">
			<h2>4. 联合类型（Union Types）： 允许一个变量是多种类型之一。</h2>
			<div class="output">
				<p>
					let value: string | number; value = "hello"; // 合法 value =
					42; // 合法
				</p>
			</div>
		</section>
		<section class="section">
			<h2>5. 类型别名（Type Alias）： 可以给复杂类型起一个别名。</h2>
			<div class="output">
				<p>type Point = { x: number; y: number; };</p>
			</div>
		</section>
		<section class="section">
			<h2>6. 泛型（Generics）： 提供代码的灵活性和复用性。</h2>
			<div class="output">
				<p>function identity<\T>(arg: T): T { return arg; }</p>
			</div>
		</section>
		<section class="section">
			<h2>7. 类型断言： 手动指定类型。</h2>
			<div class="output">
				<p>
					let someValue: any = "this is a string"; let strLength:
					number = (someValue as string).length;
				</p>
			</div>
		</section>
		<section class="section">
			<h2>8. 枚举（Enum）： 定义一组命名的常量。</h2>
			<div class="output">
				<p>
					enum Color { Red, Green, Blue, } let c: Color = Color.Green;
				</p>
			</div>
		</section>

		<section class="section">
			<h2>示例：用户信息展示</h2>
			<div class="output" v-if="user">
				<p>
					<strong>ID：</strong>{{ user.id }}<br>
					<strong>姓名：</strong>{{ user.name }}<br>
					<strong>年龄：</strong>{{ user.age }}<br>
					<strong>管理员：</strong>{{ user.isAdmin ? "是" : "否" }}
				</p>
			</div>

			<h2>示例：输入城市，查询天气</h2>
			<div class="output">
				<div class="">
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
				<div class="">
					<div class="" v-if="state.weather">
						<p>
							<strong>城市：</strong>{{ state.weather.city
							}}<br />
							<strong>天气：</strong>{{ state.weather.text
							}}<br />
							<strong>气温：</strong>{{ state.weather.low }} ~
							{{ state.weather.high }}°C<br />
							<strong>更新时间：</strong
							>{{ state.weather.updatetime }}<br />
							<span v-if="state.weather.icon">
								<img
									:src="state.weather.icon"
									:alt="state.weather.text"
									width="64"
									style="
										vertical-align: middle;
										border-radius: 8px;
									" />
							</span>
						</p>
					</div>
					<div
						v-if="state.errorMsg"
						style="color: red; margin: 10px 0">
						错误：{{ state.errorMsg }}
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive } from "vue";

	// =======================
	// 模块1：类型定义
	// =======================
	// TS 基础类型讲解
	// 1. string: 字符串类型，例如 "hello"
	let name: string = "Alice";
	// 2. number: 数字类型，例如 42 或 3.14
	let age: number = 25;
	// 3. boolean: 布尔类型，true 或 false
	let isActive: boolean = true;
	// 4. any: 任意类型，可以绕过类型检查

// 示例二：定义一个用户类型
interface User {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
}

const user: User = {
    id: 1,
    name: "Alice",
    age: 25,
    isAdmin: true,
};

// 示例3：泛型函数打印任意类型数组
function printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

// 示例调用
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
printArray(numbers);
printArray(strings);

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
		// console.log(data);

		const {
			city: cityName = city,
			data: { type: text, low, high, date: updatetime, icon } = {},
		} = data || {};
		if (!text || !low) throw new Error("未能获取到天气数据");
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

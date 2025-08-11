<template>
	<div id="app">
		<h1>JavaScript 数组操作详解</h1>

		<!-- 数组基础操作 -->
		<section class="section">
			<h2>1. 数组的增删改查</h2>

			<h3>增加元素</h3>
			<div class="example">
				<p>原始数组: {{ originalArray }}</p>
				<div class="output">
					<p>push() 末尾添加: <span id="push-result"></span></p>
					<p>unshift() 开头添加: <span id="unshift-result"></span></p>
					<p>
						splice() 指定位置插入: <span id="splice-result"></span>
					</p>
				</div>
			</div>

			<h3>删除元素</h3>
			<div class="example">
				<div class="output">
					<p>pop() 删除末尾: <span id="pop-result"></span></p>
					<p>shift() 删除开头: <span id="shift-result"></span></p>
					<p>
						splice() 删除指定:
						<span id="splice-delete-result"></span>
					</p>
				</div>
			</div>

			<h3>修改元素</h3>
			<div class="example">
				<div class="output">
					<p>直接索引修改: <span id="modify-result"></span></p>
					<p>splice() 替换: <span id="replace-result"></span></p>
				</div>
			</div>

			<h3>查找元素</h3>
			<div class="example">
				<div class="output">
					<p>indexOf() 查找索引: <span id="indexof-result"></span></p>
					<p>
						includes() 检查包含: <span id="includes-result"></span>
					</p>
					<p>find() 查找条件: <span id="find-result"></span></p>
				</div>
			</div>
		</section>

		<!-- 高级数组方法 -->
		<section class="section">
			<h2>2. 高级数组方法</h2>

			<h3>map() - 映射转换</h3>
			<div class="example">
				<p>原始数组: {{ numbers }}</p>
				<div class="output">
					<p>map() 翻倍: <span id="map-result"></span></p>
					<p>map() 对象转换: <span id="map-object-result"></span></p>
				</div>
			</div>

			<h3>filter() - 过滤筛选</h3>
			<div class="example">
				<div class="output">
					<p>filter() 偶数: <span id="filter-even-result"></span></p>
					<p>filter() 大于3: <span id="filter-gt-result"></span></p>
				</div>
			</div>

			<h3>reduce() - 归约累积</h3>
			<div class="example">
				<div class="output">
					<p>reduce() 求和: <span id="reduce-sum-result"></span></p>
					<p>reduce() 最大值: <span id="reduce-max-result"></span></p>
					<p>reduce() 平均值: <span id="reduce-avg-result"></span></p>
				</div>
			</div>

			<h3>其他实用方法</h3>
			<div class="example">
				<div class="output">
					<p>some() 有偶数: <span id="some-result"></span></p>
					<p>every() 都大于0: <span id="every-result"></span></p>
					<p>flat() 扁平化: <span id="flat-result"></span></p>
				</div>
			</div>
		</section>

		<!-- 实际应用示例 -->
		<section class="section">
			<h2>3. 实际应用示例</h2>

			<h3>购物车数据处理</h3>
			<div class="example">
				<p>购物车数据: {{ cart }}</p>
				<div class="output">
					<p>总价: <span id="cart-total"></span></p>
					<p>高价商品: <span id="expensive-items"></span></p>
					<p>商品名称: <span id="item-names"></span></p>
				</div>
			</div>

			<h3>学生成绩处理</h3>
			<div class="example">
				<p>学生数据: {{ students }}</p>
				<div class="output">
					<p>平均分: <span id="student-averages"></span></p>
					<p>优秀学生: <span id="excellent-students"></span></p>
				</div>
			</div>
		</section>

		<!-- 交互式示例 -->
		<section class="section">
			<h2>4. 交互式示例</h2>
			<div class="interactive">
				<input
					v-model="inputNumber"
					type="number"
					placeholder="输入一个数字" />
				<button @click="addToArray">添加到数组</button>
				<button @click="removeFromArray">删除最后一个</button>
				<p>当前数组: {{ dynamicArray }}</p>
				<p>数组长度: {{ dynamicArray.length }}</p>
				<p>数组总和: {{ arraySum }}</p>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref, reactive, computed, onMounted } from "vue";

	// 响应式数据
	const originalArray = ref(["apple", "banana", "orange"]);
	const numbers = ref([1, 2, 3, 4, 5]);
	const inputNumber = ref("");
	const dynamicArray = ref([1, 2, 3, 4, 5]);

	// 购物车数据
	const cart = reactive([
		{ name: "iPhone", price: 999, quantity: 2 },
		{ name: "MacBook", price: 1299, quantity: 1 },
		{ name: "AirPods", price: 199, quantity: 3 },
	]);

	// 学生数据
	const students = reactive([
		{ name: "张三", scores: [85, 90, 78] },
		{ name: "李四", scores: [92, 88, 95] },
		{ name: "王五", scores: [76, 85, 80] },
	]);

	// 计算属性
	const arraySum = computed(() => {
		return dynamicArray.value.reduce((sum, num) => sum + num, 0);
	});

	// 方法
	const addToArray = () => {
		if (inputNumber.value !== "") {
			dynamicArray.value.push(Number(inputNumber.value));
			inputNumber.value = "";
		}
	};


	const removeFromArray = () => {
		if (dynamicArray.value.length > 0) {
			dynamicArray.value.pop();
		}
	};

	// 页面加载后执行示例
	onMounted(() => {
		// 增加元素示例

		const pushArray = [...originalArray.value];
		pushArray.push("grape");
		document.getElementById("push-result").textContent =
			pushArray.join(", ");

		const unshiftArray = [...originalArray.value];
		unshiftArray.unshift("grape");
		document.getElementById("unshift-result").textContent =
			unshiftArray.join(", ");

		const spliceArray = [...originalArray.value];
		spliceArray.splice(2, 0, "mango");
		document.getElementById("splice-result").textContent =
			spliceArray.join(", ");

		// 删除元素示例
		const popArray = [...originalArray.value];
		const popped = popArray.pop();
		document.getElementById(
			"pop-result"
		).textContent = `删除: ${popped}, 剩余: ${popArray.join(", ")}`; 

		const shiftArray = [...originalArray.value];
		const shifted = shiftArray.shift();
		document.getElementById(
			"shift-result"
		).textContent = `删除: ${shifted}, 剩余: ${shiftArray.join(", ")}`;

		const spliceDeleteArray = [...originalArray.value];
		spliceDeleteArray.splice(1, 1);
		document.getElementById("splice-delete-result").textContent =
			spliceDeleteArray.join(", ");

		// 修改元素示例
		const modifyArray = [...originalArray.value];
		modifyArray[0] = "pear";
		document.getElementById("modify-result").textContent =
			modifyArray.join(", ");

		const replaceArray = [...originalArray.value];
		replaceArray.splice(1, 1, "kiwi");
		document.getElementById("replace-result").textContent =
			replaceArray.join(", ");

        // 查找元素示例
        // console.log(originalArray.value);
		document.getElementById("indexof-result").textContent =
			originalArray.value.indexOf("banana");
		document.getElementById("includes-result").textContent =
			originalArray.value.includes("apple");
		document.getElementById("find-result").textContent =
        // originalArray.value.find((fruit) => fruit.length > 5);
		originalArray.value.find((fruit) => {
			return fruit.length > 5;
		});

		// map() 示例
		const doubled = numbers.value.map((num) => num * 2);
		document.getElementById("map-result").textContent = doubled.join(", ");

		const names = students.map((student) => student.name);
		document.getElementById("map-object-result").textContent =
			names.join(", ");

		// filter() 示例
		const evenNumbers = numbers.value.filter((num) => num % 2 === 0);
		document.getElementById("filter-even-result").textContent =
			evenNumbers.join(", ");

		const greaterThan3 = numbers.value.filter((num) => num > 3);
		document.getElementById("filter-gt-result").textContent =
			greaterThan3.join(", ");

        // reduce() 示例
        // console.log(numbers.value);
        
		const sum = numbers.value.reduce((acc, num) => acc + num, 0);
		document.getElementById("reduce-sum-result").textContent = sum;

		const max = numbers.value.reduce((acc, num) => Math.max(acc, num), -Infinity);
		document.getElementById("reduce-max-result").textContent = max;

		const avg =
			numbers.value.reduce((acc, num) => acc + num, 0) /
			numbers.value.length;
		document.getElementById("reduce-avg-result").textContent =
			avg.toFixed(2);

		// 其他方法示例
		document.getElementById("some-result").textContent = numbers.value.some(
			(num) => num % 2 === 0
		);
		document.getElementById("every-result").textContent =
			numbers.value.every((num) => num > 0);

		const nested = [1, [2, 3], [4, [5, 6]]];
		const flat = nested.flat(Infinity);
        
		document.getElementById("flat-result").textContent = flat.join(", ");

		// 购物车示例
		const total = cart.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		document.getElementById("cart-total").textContent = `$${total}`;

		const expensiveItems = cart.filter((item) => item.price > 500);
		document.getElementById("expensive-items").textContent = expensiveItems
			.map((item) => item.name)
			.join(", ");

		const itemNames = cart.map((item) => item.name);
		document.getElementById("item-names").textContent =
			itemNames.join(", ");

		// 学生成绩示例
		const withAverages = students.map((student) => ({
			...student,
			average:
				student.scores.reduce((acc, score) => acc + score, 0) /
				student.scores.length,
		}));
		document.getElementById("student-averages").textContent = withAverages
			.map((s) => `${s.name}: ${s.average.toFixed(1)}`)
			.join(", ");

		const excellentStudents = withAverages.filter(
			(student) => student.average > 85
		);
		document.getElementById("excellent-students").textContent =
			excellentStudents.map((s) => s.name).join(", ");
	});
</script>

<style scoped>
	#app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	h1 {
		color: #2c3e50;
		text-align: center;
		margin-bottom: 30px;
		font-size: 2.5em;
	}

	.section {
		margin-bottom: 30px;
		background: #f8f9fa;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	h2 {
		color: #34495e;
		border-bottom: 3px solid #3498db;
		padding-bottom: 10px;
		margin-bottom: 20px;
	}

	h3 {
		color: #2980b9;
		margin: 20px 0 10px 0;
	}

	.example {
		background: white;
		padding: 15px;
		border-radius: 6px;
		margin: 15px 0;
		border-left: 4px solid #3498db;
	}

	.output {
		background: #ecf0f1;
		padding: 10px;
		border-radius: 4px;
		margin: 10px 0;
	}

	.output p {
		margin: 5px 0;
		font-family: "Courier New", monospace;
	}

	.interactive {
		background: #e8f5e8;
		padding: 20px;
		border-radius: 6px;
		text-align: center;
	}

	.interactive input {
		padding: 8px;
		margin-right: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		width: 150px;
	}

	.interactive button {
		padding: 8px 16px;
		margin: 0 5px;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.interactive button:hover {
		background: #2980b9;
	}

	.interactive p {
		margin: 10px 0;
		font-weight: bold;
	}
</style>

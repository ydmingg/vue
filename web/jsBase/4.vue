<template>
	<div id="app">
		<h1>JavaScript 对象、解构赋值、展开运算符</h1>

		<!-- JavaScript 对象 -->
		<section class="section">
			<h2>1. JavaScript 对象</h2>

			<h3>对象创建和属性</h3>
			<div class="example">
				<p>原始对象: {{ person }}</p>
				<div class="output">
					<p>点语法访问: <span id="dot-access"></span></p>
					<p>方括号访问: <span id="bracket-access"></span></p>
					<p>动态属性名: <span id="dynamic-property"></span></p>
				</div>
			</div>

			<h3>对象方法</h3>
			<div class="example">
				<div class="output">
					<p>对象方法调用: <span id="method-call"></span></p>
					<p>this 关键字: <span id="this-example"></span></p>
					<p>箭头函数中的 this: <span id="arrow-this"></span></p>
				</div>
			</div>

			<h3>对象操作</h3>
			<div class="example">
				<div class="output">
					<p>添加属性: <span id="add-property"></span></p>
					<p>删除属性: <span id="delete-property"></span></p>
					<p>检查属性: <span id="has-property"></span></p>
					<p>获取所有键: <span id="get-keys"></span></p>
					<p>获取所有值: <span id="get-values"></span></p>
				</div>
			</div>
		</section>

		<!-- 解构赋值 -->
		<section class="section">
			<h2>2. 解构赋值</h2>

			<h3>数组解构</h3>
			<div class="example">
				<p>原始数组: {{ fruits }}</p>
				<div class="output">
					<p>基本解构: <span id="array-destructure"></span></p>
					<p>跳过元素: <span id="skip-elements"></span></p>
					<p>默认值: <span id="default-values"></span></p>
					<p>剩余元素: <span id="rest-elements"></span></p>
				</div>
			</div>

			<h3>对象解构</h3>
			<div class="example">
				<div class="output">
					<p>基本对象解构: <span id="object-destructure"></span></p>
					<p>重命名变量: <span id="rename-vars"></span></p>
					<p>嵌套解构: <span id="nested-destructure"></span></p>
					<p>函数参数解构: <span id="param-destructure"></span></p>
				</div>
			</div>
		</section>

		<!-- 展开运算符 -->
		<section class="section">
			<h2>3. 展开运算符</h2>

			<h3>数组展开</h3>
			<div class="example">
				<p>数组1: {{ array1 }}</p>
				<p>数组2: {{ array2 }}</p>
				<div class="output">
					<p>合并数组: <span id="merge-arrays"></span></p>
					<p>复制数组: <span id="copy-array"></span></p>
					<p>插入元素: <span id="insert-elements"></span></p>
				</div>
			</div>

			<h3>对象展开</h3>
			<div class="example">
				<div class="output">
					<p>合并对象: <span id="merge-objects"></span></p>
					<p>复制对象: <span id="copy-object"></span></p>
					<p>覆盖属性: <span id="override-properties"></span></p>
				</div>
			</div>

			<h3>函数参数展开</h3>
			<div class="example">
				<div class="output">
					<p>求和函数: <span id="sum-function"></span></p>
					<p>最大值函数: <span id="max-function"></span></p>
				</div>
			</div>
		</section>

		<!-- 实际应用示例 -->
		<section class="section">
			<h2>4. 实际应用示例</h2>

			<h3>用户信息处理</h3>
			<div class="example">
				<p>原始用户数据: {{ userData }}</p>
				<div class="output">
					<p>解构后的信息: <span id="user-destructure"></span></p>
					<p>合并用户信息: <span id="merge-user"></span></p>
					<p>更新用户信息: <span id="update-user"></span></p>
				</div>
			</div>

			<h3>配置对象合并</h3>
			<div class="example">
				<p>默认配置: {{ defaultConfig }}</p>
				<p>用户配置: {{ userConfig }}</p>
				<div class="output">
					<p>最终配置: <span id="final-config"></span></p>
				</div>
			</div>
		</section>

		<!-- 交互式示例 -->
		<section class="section">
			<h2>5. 交互式示例</h2>
			<div class="interactive">
				<div class="input-group">
					<label>姓名:</label>
					<input
						v-model="newPerson.name"
						type="text"
						placeholder="输入姓名" />
				</div>
				<div class="input-group">
					<label>年龄:</label>
					<input
						v-model="newPerson.age"
						type="number"
						placeholder="输入年龄" />
				</div>
				<div class="input-group">
					<label>城市:</label>
					<input
						v-model="newPerson.city"
						type="text"
						placeholder="输入城市" />
				</div>
				<button @click="addPerson">添加人员</button>
				<button @click="resetPeople">重置列表</button>
				<p>人员列表: {{ peopleList }}</p>
				<p>
					解构示例: 姓名: {{ currentName }}, 年龄: {{ currentAge }},
					城市: {{ currentCity }}
				</p>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref, reactive, computed, onMounted } from "vue";

	// 响应式数据
	const person = reactive({
		name: "张三",
		age: 25,
		city: "北京",
		job: "程序员",
		sayHello() {
			return `你好，我是${this.name}`;
		},
		getInfo() {
			return `${this.name}今年${this.age}岁，在${this.city}工作`;
		},
	});

	const fruits = ref(["苹果", "香蕉", "橙子", "葡萄", "草莓"]);
	const array1 = ref([1, 2, 3]);
	const array2 = ref([4, 5, 6]);

	const userData = reactive({
		id: 1,
		name: "李四",
		email: "lisi@example.com",
		profile: {
			age: 30,
			city: "上海",
			hobbies: ["读书", "游泳", "编程"],
		},
	});

	const defaultConfig = reactive({
		theme: "light",
		language: "zh-CN",
		notifications: true,
		autoSave: true,
	});

	const userConfig = reactive({
		theme: "dark",
		notifications: false,
	});

	// 交互式示例数据
	const newPerson = reactive({
		name: "",
		age: "",
		city: "",
	});

	const peopleList = ref([
		{ name: "张三", age: 25, city: "北京" },
		{ name: "李四", age: 30, city: "上海" },
	]);

	// 计算属性
	const currentName = computed(() => peopleList.value[0]?.name || "");
	const currentAge = computed(() => peopleList.value[0]?.age || "");
	const currentCity = computed(() => peopleList.value[0]?.city || "");

	// 方法
	const addPerson = () => {
		if (newPerson.name && newPerson.age && newPerson.city) {
			peopleList.value.push({
				name: newPerson.name,
				age: Number(newPerson.age),
				city: newPerson.city,
			});
			// 清空输入
			newPerson.name = "";
			newPerson.age = "";
			newPerson.city = "";
		}
	};

	const resetPeople = () => {
        // 清空输入
        newPerson.name = "";
        newPerson.age = "";
        newPerson.city = "";
		peopleList.value = [
			{ name: "张三", age: 25, city: "北京" },
			{ name: "李四", age: 30, city: "上海" },
		];
	};

	// 页面加载后执行示例
	onMounted(() => {
		// 对象属性访问示例
		document.getElementById("dot-access").textContent = person.name;
		document.getElementById("bracket-access").textContent = person["age"];

		const dynamicProp = "job";
		document.getElementById("dynamic-property").textContent =
			person[dynamicProp];

		// 对象方法示例
		document.getElementById("method-call").textContent = person.sayHello();
		document.getElementById("this-example").textContent = person.getInfo();

		// 箭头函数中的this示例
		const arrowFunction = () => {
			return `箭头函数中的this: ${this}`;
		};
		document.getElementById("arrow-this").textContent = arrowFunction();

		// 对象操作示例
		const testObj = { ...person };
		testObj.salary = 15000;
		document.getElementById("add-property").textContent =
			JSON.stringify(testObj);

		delete testObj.salary;
		document.getElementById("delete-property").textContent =
			JSON.stringify(testObj);

        document.getElementById("has-property").textContent = "name" in testObj;
        console.log(Object.keys(testObj));
        
		document.getElementById("get-keys").textContent =
			Object.keys(testObj).join(", ");
		document.getElementById("get-values").textContent =
			Object.values(testObj).join(", ");

		// 数组解构示例
		const [first, second, third] = fruits.value;
		document.getElementById(
			"array-destructure"
		).textContent = `${first}, ${second}, ${third}`;

		const [a, , c] = fruits.value;
		document.getElementById("skip-elements").textContent = `${a}, ${c}`;

		const [x, y, z, w = "西瓜"] = fruits.value;
		document.getElementById(
			"default-values"
		).textContent = `${x}, ${y}, ${z}, ${w}`;

		const [firstFruit, ...restFruits] = fruits.value;
		document.getElementById(
			"rest-elements"
		).textContent = `第一个: ${firstFruit}, 其余: ${restFruits.join(", ")}`;

		// 对象解构示例
		const { name, age, city } = person;
		document.getElementById(
			"object-destructure"
		).textContent = `${name}, ${age}, ${city}`;

		const { name: userName, age: userAge } = person;
		document.getElementById(
			"rename-vars"
		).textContent = `${userName}, ${userAge}`;

		const {
			profile: { age: profileAge, hobbies },
		} = userData;
		document.getElementById(
			"nested-destructure"
		).textContent = `年龄: ${profileAge}, 爱好: ${hobbies.join(", ")}`;

		// 函数参数解构示例
		const processUser = ({ name, email, profile: { age } }) => {
			return `${name} (${email}) - ${age}岁`;
		};
		document.getElementById("param-destructure").textContent =
			processUser(userData);

		// 数组展开示例
		const mergedArray = [...array1.value, ...array2.value];
		document.getElementById("merge-arrays").textContent =
			mergedArray.join(", ");

		const copiedArray = [...fruits.value];
		document.getElementById("copy-array").textContent =
			copiedArray.join(", ");

		const newArray = [0, ...array1.value, 7, ...array2.value, 9];
		document.getElementById("insert-elements").textContent =
			newArray.join(", ");

		// 对象展开示例
		const mergedObject = { ...defaultConfig, ...userConfig };
		document.getElementById("merge-objects").textContent =
			JSON.stringify(mergedObject);

		const copiedObject = { ...person };
		document.getElementById("copy-object").textContent =
			JSON.stringify(copiedObject);

		const updatedObject = { ...person, age: 26, salary: 16000 };
		document.getElementById("override-properties").textContent =
			JSON.stringify(updatedObject);

		// 函数参数展开示例
        
        const sum = (...numbers) => numbers.reduce((acc, num) => { 
            return acc + num
        }, 0);
		document.getElementById(
			"sum-function"
		).textContent = `sum(1,2,3,4,5) = ${sum(1, 2, 3, 4, 5)}`;

		const max = (...numbers) => Math.max(...numbers);
		document.getElementById(
			"max-function"
		).textContent = `max(10,5,8,12,3) = ${max(10, 5, 8, 12, 3)}`;

		// 用户信息处理示例
		const {
			name: userName2,
			email,
			profile: { age: userAge2, city: userCity },
		} = userData;
		document.getElementById(
			"user-destructure"
		).textContent = `${userName2}, ${email}, ${userAge2}岁, ${userCity}`;

		const additionalInfo = { phone: "13800138000", department: "技术部" };
		const mergedUser = { ...userData, ...additionalInfo };
		document.getElementById("merge-user").textContent =
			JSON.stringify(mergedUser);

		const updatedUser = {
			...userData,
			profile: { ...userData.profile, age: 31 },
		};
		document.getElementById("update-user").textContent =
			JSON.stringify(updatedUser);

		// 配置对象合并示例
		const finalConfig = { ...defaultConfig, ...userConfig };
		document.getElementById("final-config").textContent =
			JSON.stringify(finalConfig);
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

	.input-group {
		margin: 10px 0;
		display: inline-block;
		margin-right: 15px;
	}

	.input-group label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
		color: #2c3e50;
	}

	.input-group input {
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
		width: 120px;
	}

	.interactive button {
		padding: 8px 16px;
		margin: 5px;
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
		text-align: left;
	}
</style>

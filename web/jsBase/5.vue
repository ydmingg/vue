<template>
	<div id="app">
		<h1>JavaScript 函数详解</h1>

		<!-- 函数声明 -->
		<section class="section">
			<h2>1. 函数声明</h2>

			<h3>函数声明方式</h3>
			<div class="example">
				<div class="output">
					<p>函数声明: <span id="function-declaration"></span></p>
					<p>函数表达式: <span id="function-expression"></span></p>
					<p>立即执行函数: <span id="iife-result"></span></p>
					<p>构造函数: <span id="constructor-result"></span></p>
				</div>
			</div>

			<h3>函数参数</h3>
			<div class="example">
				<div class="output">
					<p>默认参数: <span id="default-params"></span></p>
					<p>剩余参数: <span id="rest-params"></span></p>
					<p>参数解构: <span id="param-destructure"></span></p>
				</div>
			</div>

			<h3>函数返回值</h3>
			<div class="example">
				<div class="output">
					<p>基本返回值: <span id="basic-return"></span></p>
					<p>多值返回: <span id="multiple-return"></span></p>
					<p>返回函数: <span id="return-function"></span></p>
				</div>
			</div>
		</section>

		<!-- 箭头函数 -->
		<section class="section">
			<h2>2. 箭头函数</h2>

			<h3>基本语法</h3>
			<div class="example">
				<div class="output">
					<p>单参数: <span id="arrow-single"></span></p>
					<p>多参数: <span id="arrow-multiple"></span></p>
					<p>无参数: <span id="arrow-no-params"></span></p>
					<p>多行函数体: <span id="arrow-multiline"></span></p>
				</div>
			</div>

			<h3>this 关键字</h3>
			<div class="example">
				<div class="output">
					<p>普通函数中的 this: <span id="regular-this"></span></p>
					<p>箭头函数中的 this: <span id="arrow-this"></span></p>
					<p>对象方法中的 this: <span id="object-this"></span></p>
				</div>
			</div>

			<h3>箭头函数特点</h3>
			<div class="example">
				<div class="output">
					<p>
						不能作为构造函数: <span id="arrow-constructor"></span>
					</p>
					<p>
						没有 arguments 对象: <span id="arrow-arguments"></span>
					</p>
					<p>没有原型: <span id="arrow-prototype"></span></p>
				</div>
			</div>
		</section>

		<!-- 回调函数 -->
		<section class="section">
			<h2>3. 回调函数</h2>

			<h3>基本回调</h3>
			<div class="example">
				<div class="output">
					<p>简单回调: <span id="simple-callback"></span></p>
					<p>带参数的回调: <span id="param-callback"></span></p>
					<p>错误处理回调: <span id="error-callback"></span></p>
				</div>
			</div>

			<h3>异步回调</h3>
			<div class="example">
				<div class="output">
					<p>setTimeout 回调: <span id="timeout-callback"></span></p>
					<p>事件监听回调: <span id="event-callback"></span></p>
					<p>Promise 回调: <span id="promise-callback"></span></p>
				</div>
			</div>

			<h3>高阶函数</h3>
			<div class="example">
				<div class="output">
					<p>map 回调: <span id="map-callback"></span></p>
					<p>filter 回调: <span id="filter-callback"></span></p>
					<p>reduce 回调: <span id="reduce-callback"></span></p>
				</div>
			</div>
		</section>

		<!-- 实际应用示例 -->
		<section class="section">
			<h2>4. 实际应用示例</h2>

			<h3>数据处理管道</h3>
			<div class="example">
				<p>原始数据: {{ rawData }}</p>
				<div class="output">
					<p>处理结果: <span id="data-pipeline"></span></p>
					<p>过滤结果: <span id="filtered-data"></span></p>
					<p>转换结果: <span id="transformed-data"></span></p>
				</div>
			</div>

			<h3>事件处理系统</h3>
			<div class="example">
				<div class="output">
					<p>事件处理器: <span id="event-handler"></span></p>
					<p>防抖函数: <span id="debounce-result"></span></p>
					<p>节流函数: <span id="throttle-result"></span></p>
				</div>
			</div>

			<h3>配置验证器</h3>
			<div class="example">
				<p>配置对象: {{ configObject }}</p>
				<div class="output">
					<p>验证结果: <span id="validation-result"></span></p>
					<p>默认值填充: <span id="default-fill"></span></p>
				</div>
			</div>
		</section>

		<!-- 交互式示例 -->
		<section class="section">
			<h2>5. 交互式示例</h2>
			<div class="interactive">
				<div class="input-group">
					<label>输入数字:</label>
					<input
						v-model="inputNumber"
						type="number"
						placeholder="输入一个数字" />
				</div>
				<div class="button-group">
					<button @click="calculateSquare">计算平方</button>
					<button @click="calculateFactorial">计算阶乘</button>
					<button @click="checkPrime">检查质数</button>
					<button @click="generateSequence">生成序列</button>
				</div>
				<div class="results">
					<p>平方结果: {{ squareResult }}</p>
					<p>阶乘结果: {{ factorialResult }}</p>
					<p>质数检查: {{ primeResult }}</p>
					<p>序列结果: {{ sequenceResult }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref, reactive, onMounted } from "vue";

	// 响应式数据
	const inputNumber = ref("");
	const squareResult = ref("");
	const factorialResult = ref("");
	const primeResult = ref("");
	const sequenceResult = ref("");

	const rawData = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const configObject = reactive({
		name: "",
		age: 0,
		email: "",
		theme: "light",
	});

	// 函数声明示例
	function functionDeclaration() {
		return "function fn(){}";
	}
	// 函数表达式示例
	const functionExpression = function () {
		return "const fn = function(){}";
	};
	// 函数立即执行示例
	const iife = (function () {
		return "(function(){})()";
	})();
	// 构造函数创建的对象示例
	const Constructor = function () {
		this.message =
			"const Fn = function(){this.name ='张三'};  const fnInstance = new Fn();";
	};
	const constructorInstance = new Constructor();

	// 函数参数示例
	const defaultParams = function (name = "匿名", age = 18) {
		return `${name}今年${age}岁`;
	};

	const restParams = function (first, second, ...rest) {
		return `前两个: ${first}, ${second}, 其余: ${rest.join(", ")}`;
	};

	const paramDestructure = function ({ name, age, city = "未知" }) {
		return `${name}在${city}，${age}岁`;
	};

	// 函数返回值示例
	const basicReturn = function () {
		return "function(){return 12312}";
	};

	const multipleReturn = function () {
		return [1, 2, 3];
	};

	const returnFunction = function () {
		return function () {
			return "const fn = function(){return function(){return '被回调'}}";
		};
	};

	// 箭头函数示例
	const arrowSingle = (x) => x * 2;
	const arrowMultiple = (x, y) => x + y;
	const arrowNoParams = () => "这是无参数箭头函数";
	const arrowMultiline = (x, y) => {
		const sum = x + y;
		return `和为: ${sum}`;
	};

	// this 关键字示例
	const regularThis = function () {
		return typeof this;
	};

	const arrowThis = () => typeof this;

	const objectThis = {
		name: "测试对象",
		regularMethod: function () {
			return this.name;
		},
		arrowMethod: () => `箭头方法不绑定 this(${this})`,
	};

	// 回调函数示例
	const simpleCallback = function (callback) {
		return callback("这是回调函数被调用了，【const fn = function(a){return fun()}】");
	};

	const paramCallback = function (data, callback) {
		return callback(data.toUpperCase()); //转大写
	};

	const errorCallback = function (data, successCallback, errorCallback) {
		if (data > 0) {
			return successCallback(data);
		} else {
			return errorCallback("数据必须大于0");
		}
	};

	// 异步回调示例
	const timeoutCallback = function (callback) {
		setTimeout(() => {
			callback("这是延迟执行完成");
		}, 100);
	};

	const eventCallback = function (event, callback) {
		return callback(`事件类型: ${event}`);
	};

	const promiseCallback = function (data) {
		return new Promise((resolve, reject) => {
			if (data > 0) {
				resolve(`成功: ${data}`);
			} else {
				reject(`失败: ${data}`);
			}
		});
	};

	// 高阶函数示例
	const mapCallback = function (arr, callback) {
		return arr.map(callback);
	};

	const filterCallback = function (arr, callback) {
		return arr.filter(callback);
	};

	const reduceCallback = function (arr, callback, initial) {
		return arr.reduce(callback, initial);
	};

	// 实际应用示例
	const dataPipeline = function (data) {
		return data
			.filter((x) => x % 2 === 0)
			.map((x) => x * 2)
			.reduce((sum, x) => sum + x, 0);
	};

	const debounce = function (func, delay) {
		let timeoutId;
		return function (...args) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => func.apply(this, args), delay);
		};
	};

	const throttle = function (func, limit) {
		let inThrottle;
		return function (...args) {
			if (!inThrottle) {
				func.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	};

    
    
const validateConfig = function (config, validators) {
        
        const errors = [];
		for (const [key, validator] of Object.entries(validators)) {
            // console.log(validator(config[key]));
            if (!validator(config[key])) {
                errors.push(`${key} 验证失败`);
                
			}
        }
		return errors.length === 0 ? "验证通过" : errors.join(", ");
	};

	const fillDefaults = function (config, defaults) {
		return { ...defaults, ...config };
	};

	// 交互式示例方法
	const calculateSquare = () => {
		if (inputNumber.value !== "") {
			const num = Number(inputNumber.value);
			squareResult.value = num * num;
		}
	};

	const calculateFactorial = () => {
		if (inputNumber.value !== "") {
			const num = Number(inputNumber.value);
			let result = 1;
			for (let i = 2; i <= num; i++) {
				result *= i;
			}
			factorialResult.value = result;
		}
	};

	const checkPrime = () => {
		if (inputNumber.value !== "") {
			const num = Number(inputNumber.value);
			if (num < 2) {
				primeResult.value = "不是质数";
				return;
			}
			let isPrime = true;
			for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i === 0) {
					isPrime = false;
					break;
				}
			}
			primeResult.value = isPrime ? "是质数" : "不是质数";
		}
	};

	const generateSequence = () => {
		if (inputNumber.value !== "") {
			const num = Number(inputNumber.value);
			const sequence = [];
			for (let i = 1; i <= num; i++) {
				sequence.push(i);
			}
			sequenceResult.value = sequence.join(", ");
		}
	};

	onMounted(() => {
		// 函数声明示例
		document.getElementById("function-declaration").textContent =
			functionDeclaration();
		document.getElementById("function-expression").textContent =
			functionExpression();
		document.getElementById("iife-result").textContent = iife;
		document.getElementById("constructor-result").textContent =
			constructorInstance.message;

		// 函数参数示例
		document.getElementById("default-params").textContent = defaultParams();
		document.getElementById("rest-params").textContent = restParams(
			"a",
			"b",
			"c",
			"d",
			"e"
		);
		document.getElementById("param-destructure").textContent =
			paramDestructure({ name: "张三", age: 25 });

		// 函数返回值示例
		document.getElementById("basic-return").textContent = basicReturn();
		document.getElementById("multiple-return").textContent =
			multipleReturn().join(", ");
		document.getElementById("return-function").textContent =
			returnFunction()();

		// 箭头函数示例
		document.getElementById("arrow-single").textContent = arrowSingle(5);
		document.getElementById("arrow-multiple").textContent = arrowMultiple(
			3,
			4
		);
		document.getElementById("arrow-no-params").textContent =
			arrowNoParams();
		document.getElementById("arrow-multiline").textContent = arrowMultiline(
			10,
			20
		);

		// this 关键字示例
		document.getElementById("regular-this").textContent = regularThis();
		document.getElementById("arrow-this").textContent = arrowThis();
		document.getElementById(
			"object-this"
		).textContent = `${objectThis.regularMethod()}, ${objectThis.arrowMethod()}`;

		// 箭头函数特点示例
		try {
            // const ArrowFunc = function () { };
			const ArrowFunc = () => {};
			new ArrowFunc();
			document.getElementById("arrow-constructor").textContent =
				"可以构造（❌）";
		} catch (e) {
			document.getElementById("arrow-constructor").textContent =
				"不能构造（✅）";
		}

		document.getElementById("arrow-arguments").textContent =
			"没有 arguments 对象";
		document.getElementById("arrow-prototype").textContent = "没有原型";

		// 回调函数示例
		document.getElementById("simple-callback").textContent = simpleCallback(
			(msg) => msg
		);
		document.getElementById("param-callback").textContent = paramCallback(
			"hello",
			(msg) => msg
		);
		document.getElementById("error-callback").textContent = errorCallback(
			5,
			(data) => `成功: ${data}`,
			(error) => `错误: ${error}`
		);

		// 异步回调示例
		timeoutCallback(function (result) {
			document.getElementById("timeout-callback").textContent = result;
		});
		document.getElementById("event-callback").textContent = eventCallback(
			"click",
			(msg) => msg
		);

		promiseCallback(10)
			.then((result) => {
				document.getElementById("promise-callback").textContent =
					result;
			})
			.catch((error) => {
				document.getElementById("promise-callback").textContent = error;
			});

		// 高阶函数示例
		document.getElementById("map-callback").textContent = mapCallback(
			[1, 2, 3],
			(x) => x * 2
		).join(", ");
		document.getElementById("filter-callback").textContent = filterCallback(
			[1, 2, 3, 4, 5],
			(x) => x > 3
		).join(", ");
		document.getElementById("reduce-callback").textContent = reduceCallback(
			[1, 2, 3, 4, 5],
			(sum, x) => sum + x,
			0
		);

		// 实际应用示例
		document.getElementById("data-pipeline").textContent = dataPipeline(
			rawData.value
		);
		document.getElementById("filtered-data").textContent = rawData.value
			.filter((x) => x % 2 === 0)
			.join(", ");
		document.getElementById("transformed-data").textContent = rawData.value
			.map((x) => x * x)
			.join(", ");

		document.getElementById("event-handler").textContent =
			"function handleClick(e){console.log('被点击了')}";
		document.getElementById("debounce-result").textContent =
			"function debounce(fn,delay){let timer; return function(...args){clearTimeout(timer);timer=setTimeout(()=>fn.apply(this,args),delay)}}; 使用方法：debounce(handleInput, 300)";
		document.getElementById("throttle-result").textContent =
			"function throttle(fn,limit){let inT;return fnction(...args){if(!inT){fn.apply(this,args);inT = true;setTimeout(()=>inT=false,limit)}}}; 使用方法：throttle(handleSScroll,200)";

		const validators = {
			name: (val) => val && val.length > 0,
			age: (val) => val > 0,
			email: (val) => val && val.includes("@"),
			theme: (val) => ["light", "dark"].includes(val),
		};

		document.getElementById("validation-result").textContent =
			validateConfig(configObject, validators);

		const defaults = {
			name: "默认名称",
			age: 18,
			email: "default@example.com",
			theme: "light",
		};
		document.getElementById("default-fill").textContent = JSON.stringify(
			fillDefaults(configObject, defaults)
		);
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
		margin: 15px 0;
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
		width: 150px;
	}

	.button-group {
		margin: 20px 0;
	}

	.button-group button {
		padding: 10px 20px;
		margin: 5px;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
	}

	.button-group button:hover {
		background: #2980b9;
	}

	.results {
		background: #f8f9fa;
		padding: 15px;
		border-radius: 6px;
		margin-top: 20px;
		text-align: left;
	}

	.results p {
		margin: 8px 0;
		font-weight: bold;
		color: #2c3e50;
	}
</style>

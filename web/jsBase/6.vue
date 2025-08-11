<template>
	<div id="app">
		<h1>JavaScript DOM 选择与修改、事件绑定</h1>

		<!-- DOM选择与修改 -->
		<section class="section">
			<h2>1. JavaScript DOM 选择与修改、事件绑定</h2>

			<h3>DOM 选择</h3>
			<div class="example">
				<div class="output">
					<p>通过ID选择: <span id="dom-id"></span></p>
					<p>通过类选择: <span id="dom-class"></span></p>
					<p>通过标签选择: <span id="dom-tag"></span></p>
					<p>通过 querySelector: <span id="dom-query"></span></p>
				</div>
			</div>

			<h3>DOM 修改</h3>
			<div class="example">
				<div class="output">
					<p>文本内容修改: <span id="dom-text"></span></p>
					<p>HTML 内容修改: <span id="dom-html"></span></p>
					<p>属性修改: <span id="dom-attr"></span></p>
					<p>样式修改: <span id="dom-style"></span></p>
				</div>
			</div>

			<h3>事件绑定</h3>
			<div class="example">
				<div class="output">
					<p>点击事件: <span id="event-click"></span></p>
					<p>输入事件: <span id="event-input"></span></p>
					<p>鼠标移入事件: <span id="event-mouseenter"></span></p>
					<p>事件解绑: <span id="event-remove"></span></p>
				</div>
				<div class="interactive">
					<button id="dom-btn">点击按钮</button>
					<input id="dom-input" type="text" placeholder="输入内容" />
					<div
						id="dom-hover"
						style="
							display: inline-block;
							padding: 10px 20px;
							background: #eee;
							border-radius: 6px;
							margin-top: 10px;
						">
						鼠标移入我
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { onMounted } from "vue";

	onMounted(() => {
		// DOM选择
		document.getElementById("dom-id").textContent = document.getElementById(
			"dom-btn"
		)
			? "已选中按钮"
			: "未选中";
		document.getElementById("dom-class").textContent =
			document.getElementsByClassName("interactive").length > 0
				? "已选中class类名.interactive"
				: "未选中";
		document.getElementById("dom-tag").textContent =
			document.getElementsByTagName("input").length > 0
				? "已选中 input 标签"
				: "未选中";
		document.getElementById("dom-query").textContent =
			document.querySelector("#dom-hover")
				? "已选中 querySelector"
				: "未选中";

		// DOM修改
		const btn = document.getElementById("dom-btn");
		const input = document.getElementById("dom-input");
		const hoverDiv = document.getElementById("dom-hover");

		btn.textContent = "已修改按钮文本";
		document.getElementById("dom-text").textContent = btn.textContent;

		hoverDiv.innerHTML = "<b>已修改HTML内容</b>";
		document.getElementById("dom-html").textContent = hoverDiv.innerHTML;

		input.setAttribute("placeholder", "请输入内容...");
		document.getElementById("dom-attr").textContent =
			input.getAttribute("placeholder");

		hoverDiv.style.background = "#cceeff";
		hoverDiv.style.color = "#333";
		document.getElementById(
			"dom-style"
		).textContent = `background: ${hoverDiv.style.background}; color: ${hoverDiv.style.color}`;

		// 事件绑定
		let removeClick;
		btn.addEventListener(
			"click",
			(removeClick = function () {
				document.getElementById("event-click").textContent =
					"按钮被点击";
			})
		);
		input.addEventListener("input", function () {
			document.getElementById("event-input").textContent = "输入事件触发";
		});
		hoverDiv.addEventListener("mouseenter", function () {
			document.getElementById("event-mouseenter").textContent =
				"鼠标已移入";
		});

		// 事件解绑示例：点击按钮后解绑点击事件
		btn.addEventListener("dblclick", function () {
            // console.log(removeClick);
            
            btn.removeEventListener("click", removeClick);
            
			document.getElementById("event-remove").textContent =
				"点击事件已解绑";
		});
	});
</script>

<style scoped>
	#app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	.section {
		margin-bottom: 30px;
		background: #f8f9fa;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #2c3e50;
		text-align: center;
		margin-bottom: 30px;
		font-size: 2.2em;
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
		margin-top: 15px;
	}
	button {
		padding: 10px 20px;
		margin: 5px;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
	}
	button:hover {
		background: #2980b9;
	}
	input {
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
		width: 180px;
		margin: 10px 0;
	}
</style>

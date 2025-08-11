<template>
	<div id="app">
		<h1>JavaScript 项目：待办事项应用（本地存储）</h1>

		<!-- 待办事项应用 -->
		<section class="section">
			<h2>1. JavaScript 项目：待办事项应用（本地存储）</h2>

			<h3>添加待办事项</h3>
			<div class="interactive">
				<input
					v-model="todoInput"
					id="todo-input"
					type="text"
					placeholder="输入待办事项"
					@keyup.enter="addTodo" />
				<button @click="addTodo">添加</button>
			</div>

			<h3>待办事项列表</h3>
			<div class="example">
				<ul id="todo-list">
					<li
						v-for="(todo, idx) in todos"
						:key="todo.id"
						:class="{ done: todo.done }">
						<input
							type="checkbox"
							:checked="todo.done"
							@change="toggleTodo(todo.id)" />
						<span>{{ todo.text }}</span>
						<button @click="removeTodo(todo.id)">删除</button>
					</li>
				</ul>
			</div>

			<h3>功能演示</h3>
			<div class="output">
				<p>
					任务总数: <span id="todo-count">{{ todos.length }}</span>
				</p>
				<p>
					已完成:
					<span id="todo-done">{{
						todos.filter((t) => t.done).length
					}}</span>
				</p>
				<p>
					未完成:
					<span id="todo-undone">{{
						todos.filter((t) => !t.done).length
					}}</span>
				</p>
				<button @click="clearCompleted">清除已完成</button>
				<button @click="clearAll">清空全部</button>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref, onMounted, watch } from "vue";

	// 待办事项列表
	const todos = ref([]);
	// 输入框内容
	const todoInput = ref("");

	// 本地存储键名
	const STORAGE_KEY = "todo-list-demo";

	// 加载本地存储
	const loadTodos = () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        
        
        if (stored) {
			try {
				todos.value = JSON.parse(stored);
			} catch (e) {
				todos.value = [];
			}
		}
	};

	// 保存到本地存储
	const saveTodos = () => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
	};

	// 新增待办
	const addTodo = () => {
		const text = todoInput.value.trim();
		if (text) {
			todos.value.push({
				id: Date.now(),
				text,
				done: false,
			});
			todoInput.value = "";
			saveTodos();
		}
	};

	// 切换完成状态
	const toggleTodo = (id) => {
        const todo = todos.value.find((t) => t.id === id);
        // console.log(todo);
        console.log(todos.value);
		if (todo) {
			todo.done = !todo.done;
			saveTodos();
		}
	};

// 删除单个
    
	const removeTodo = (id) => {
        // 把不相等的返回并排序
        todos.value = todos.value.filter((t) => t.id !== id);
        console.log(todos.value);
		saveTodos();
	};

// 清除全部完成项
    
    
	const clearCompleted = () => {
		todos.value = todos.value.filter((t) => !t.done);
		saveTodos();
	};

	// 清空全部
	const clearAll = () => {
		todos.value = [];
		saveTodos();
	};

	// 页面加载时初始化
	onMounted(() => {
		loadTodos();
	});

	// 监听 todos 变化自动保存
	// watch(todos, saveTodos, { deep: true });
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
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
	}
	h1 {
		color: #2c3e50;
		text-align: center;
		margin-bottom: 25px;
		font-size: 2em;
	}
	h2 {
		color: #34495e;
		border-bottom: 3px solid #3498db;
		padding-bottom: 10px;
		margin-bottom: 18px;
	}
	h3 {
		color: #2980b9;
		margin: 20px 0 10px 0;
	}
	.interactive {
		background: #e8f5e8;
		padding: 14px;
		border-radius: 6px;
		text-align: center;
		margin-bottom: 14px;
	}
	.interactive input {
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
		width: 180px;
		margin-right: 8px;
	}
	.interactive button {
		padding: 8px 16px;
		background: #3498db;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
	}
	.interactive button:hover {
		background: #2980b9;
	}
	.example {
		background: white;
		padding: 12px;
		border-radius: 6px;
		margin: 15px 0;
		border-left: 4px solid #3498db;
	}
	.example ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.example li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0;
		border-bottom: 1px solid #eee;
	}
	.example li.done span {
		text-decoration: line-through;
		color: #aaa;
	}
	.example button {
		margin-left: 10px;
		padding: 4px 10px;
		font-size: 12px;
		background: #e74c3c;
		color: #fff;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
	.example button:hover {
		background: #c0392b;
	}
	.output {
		background: #ecf0f1;
		padding: 12px;
		border-radius: 4px;
		margin: 10px 0;
	}
	.output p {
		margin: 6px 0;
		font-family: "Courier New", monospace;
	}
	.output button {
		padding: 6px 18px;
		background: #95a5a6;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 13px;
		margin-right: 10px;
	}
	.output button:hover {
		background: #7f8c8d;
	}
</style>

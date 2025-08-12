<template>
	<div class="todo-app">
		<h1>ts示例：待办事项</h1>
		<div class="input-container">
			<input
				v-model="newTodo"
				@keyup.enter="addTodo"
				placeholder="输入待办事项" />
			<button @click="addTodo">添加</button>
		</div>
		<ul class="todo-list">
			<li
				v-for="todo in todos"
				:key="todo.id"
				:class="{ completed: todo.completed }">
				<input
					type="checkbox"
					v-model="todo.completed" />
				<span>{{ todo.title + todo.completed }}</span>
				<button @click="removeTodo(todo.id)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive } from "vue";

	interface Todo {
		id: number;
		title: string;
		completed: boolean;
	}

	const newTodo = ref<string>("");
	const todos = reactive<Todo[]>([]);

	const addTodo = () => {
		if (newTodo.value.trim() === "") return;
		todos.push({
			id: Date.now(),
			title: newTodo.value.trim(),
			completed: false,
		});
		newTodo.value = "";
	};

	const removeTodo = (id: number) => {
		const index = todos.findIndex((todo) => todo.id === id);
		if (index !== -1) {
			todos.splice(index, 1);
		}
	};

	// const toggleTodo = (id: number) => {
    //     const todo = todos.find((todo) => todo.id === id);
    //     console.log(todo);
    //     if (todo) {
            
	// 		todo.completed = !todo.completed;
	// 	}
    // };
    
</script>

<style scoped>
	.todo-app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		font-family: Arial, sans-serif;
	}

	.input-container {
		display: flex;
		margin-bottom: 20px;
	}

	input[type="text"] {
		flex: 1;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 8px 12px;
		margin-left: 8px;
		background: #42b983;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.todo-list {
		list-style: none;
		padding: 0;
	}

	.todo-list li {
		display: flex;
		align-items: center;
		padding: 8px 0;
		border-bottom: 1px solid #eee;
	}

	.todo-list li.completed span {
		text-decoration: line-through;
		color: #888;
	}

	.todo-list input[type="checkbox"] {
		margin-right: 10px;
	}
</style>

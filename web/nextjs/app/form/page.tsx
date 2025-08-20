"use client";

import { useState } from "react";
import Typewriter from "./(common)/Typewriter";

interface Message {
	role: "user" | "assistant";
	content: string;
}

export default function FormPage() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!input.trim()) return;

		// 1. 先把用户输入 push 进去
		setMessages((prev) => [...prev, { role: "user", content: input }]);

		// 2. 显示“思考中...” 作为占位
		setMessages((prev) => [
			...prev,
			{ role: "assistant", content: "思考中..." },
		]);

		const question = input;
		setInput("");

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: question }),
			});

			const data = await res.json();

			// 3. 替换最后一条 "思考中..." → 真正的回复
			setMessages((prev) => {
				const updated = [...prev];
				updated[updated.length - 1] = {
					role: "assistant",
					content: data.content || data.error || "出错了",
				};
				return updated;
			});
		} catch (err) {
			setMessages((prev) => {
				const updated = [...prev];
				updated[updated.length - 1] = {
					role: "assistant",
					content: "请求失败，请重试。",
				};
				return updated;
			});
		}
	}

	return (
		<div className="p-4 space-y-4">
			<form onSubmit={handleSubmit} className="space-x-2">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="请输入你的问题..."
					className="border rounded p-2 w-80"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white rounded px-4 py-2">
					回复
				</button>
			</form>

			<section className="border p-4 rounded bg-gray-100 space-y-2">
				{messages.map((msg, i) => (
					<div
						key={i}
						className={
							msg.role === "user"
								? "text-blue-600"
								: "text-gray-800"
						}>
						{msg.role === "assistant" ? (
							msg.content === "思考中..." ? (
								<span>{msg.content}</span>
							) : (
                                    <>
                                        <Typewriter text={msg.content} />
                                        <hr />
                                    </>
                                
							)
						) : (
							<span>🙋 {msg.content}</span>
						)}
					</div>
				))}
			</section>
		</div>
	);
}

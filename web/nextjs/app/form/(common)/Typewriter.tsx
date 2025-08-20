"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
	const [displayed, setDisplayed] = useState("");

	useEffect(() => {
		if (!text) return;
		setDisplayed(""); // 每次新消息重置

		let i = 0;
		const timer = setInterval(() => {
			setDisplayed((prev) => prev + text.charAt(i));
			i++;
			if (i >= text.length) clearInterval(timer);
		}, 40);

		return () => clearInterval(timer);
	}, [text]);

	return <span>{displayed}</span>;
}

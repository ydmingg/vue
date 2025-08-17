import React, { useState, useEffect, useCallback } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

interface Article {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

interface NewsItem {
  id: string;      // headline0, headline1 ...
  title: string;
  content: string;
}

const NewsContent = () => {
	const { newsId } = useParams<{ newsId: string }>();
	const navigate = useNavigate();
	const [news, setNews] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const fetchNews = useCallback(async () => {
		try {
			setLoading(true);
			const response = await axios.get<Article[]>("https://jsonplaceholder.typicode.com/posts");
			setNews(
				response.data.map(
					(article: Article, index: number): NewsItem=> ({
						id: `headline${index}`,
						title: article.title,
						content: article.body || "暂无内容",
					})
				)
			);
		} catch (err: unknown) {
			setError(err instanceof Error ? err.message : "未知错误");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		const source = axios.CancelToken.source();
		fetchNews();
		return () => {
			source.cancel("组件卸载，取消请求");
		};
	}, [fetchNews]);

	const currentNews = news.find((item) => item.id === newsId) || news[0];

	if (loading) return <div style={{ padding: "20px" }}>加载中...</div>;
	if (error)
		return (
			<div style={{ padding: "20px", color: "red" }}>
				{error}
			</div>
		);

	return (
		<div
			className="news-container"
			style={{ display: "flex", height: "100vh" }}>
			{/* 侧边栏 */}
			<aside
				style={{
					width: "250px",
					borderRight: "1px solid #eee",
					padding: "20px",
				}}>
				<h2>今日头条</h2>
				<ul style={{ listStyle: "none", padding: 0 }}>
					{news.map((item) => (
						<li
							key={item.id}
							style={{
								padding: "10px",
								cursor: "pointer",
								backgroundColor:
									currentNews?.id === item.id
										? "#f0f0f0"
										: "transparent",
							}}
							onClick={() => navigate(`/${item.id}`)}>
							{item.title}
						</li>
					))}
				</ul>
			</aside>

			{/* 主内容区 */}
			<main style={{ flex: 1, padding: "20px", overflow: "auto" }}>
				<h2>{currentNews.title}</h2>
				<p>{currentNews.content}</p>
			</main>
		</div>
	);
};

const R9 = () => {
	return (
		<Router future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
			<Routes>
				<Route path="/:newsId" element={<NewsContent />} />
				<Route path="/" element={<NewsContent />} />
			</Routes>
		</Router>
	);
};

export default R9;

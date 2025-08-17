import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const NewsContent = () => {
	const { newsId } = useParams();
	const navigate = useNavigate();
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setLoading(true);
				const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                
				setNews(
					response.data.map((article, index) => ({
						id: `headline${index}`,
						title: article.title,
						content: article.body || "暂无内容",
					}))
				);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	const currentNews = news.find((item) => item.id === newsId) || news[0];

	if (loading) return <div style={{ padding: "20px" }}>加载中...</div>;
	if (error)
		return (
			<div style={{ padding: "20px", color: "red" }}>
				加载失败: {error}
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
				{currentNews && (
					<>
						<h2>{currentNews.title}</h2>
						<p>{currentNews.content}</p>
					</>
				)}
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

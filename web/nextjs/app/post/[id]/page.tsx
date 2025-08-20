import fs from "fs";
import path from "path";

// 定义Props对象类型
interface Props {
	params: Promise<{ id: string }>; // Next.js 自动注入
}

// 定义请求数据类型
interface PostData {
	id: number;
	content: string;
}

// 设置页面每30s更新一次内容
export const revalidate = 30;

// 请求数据处理
function getPosts(): PostData[] {
	// const res = await fetch("http://localhost:3000/posts.json");
	// const data: PostData[] = await res.json();
	const filePath = path.join(process.cwd(), "public", "posts.json");
	const dataString = fs.readFileSync(filePath, "utf8");
	return JSON.parse(dataString) as PostData[];
}

// 输出静态的HTML路由文件
export async function generateStaticParams() {
	const posts = getPosts();
	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

// 主配置函数
export default async function postHome({ params }: Props) {
	const posts = getPosts();
	const { id } = await params;
	const post = posts.find((p) => p.id === +id);

	if (!post) return <div>没有找到文章</div>;

	return (
		<div>
			<div>
				{posts.map((item) => {
					return <div key={item.id}>{item.content}</div>;
				})}
			</div>
			<div className="">渲染时间：{new Date().toString()}</div>
		</div>
	);
}

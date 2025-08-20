import fs from "fs";
import path from "path";
import Link from "next/link";
// import { useRouter } from 'next/navigation'
import styles from "./page.module.css";

// 定义Props对象类型（定义动态路由参数id）
type Props = {
	params: Promise<{id: string}>; // 动态路由参数
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // 查询参数
};


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

// 输出静态的HTML路由文件（SSG模式）
export async function generateStaticParams() {
	const posts = getPosts();
	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

// 主配置函数（SSR模式）
export default async function postHome({
	params,
	searchParams,
}: Props) {
	const posts = getPosts();
	const { id } = await params; // 获取动态路由id
	const post = posts.find((p) => p.id === +id);

	//获取动态路由参数（例：http://localhost:3000/post/1?age=value）
	// const router = searchParams
	const a = await searchParams;
	console.log(a);

	// 处理404页面
	if (!post) return <div className={styles["nopage-bg"]}>没有找到文章</div>;

	return (
		<div>
			<div>
				<Link href="/post/1">第1个页面</Link>，
				<Link href="/post/2">第2个页面</Link>，
				<Link href="/post/3">第3个页面</Link>，
				<Link href="/post/4">第4个页面</Link>，
				<Link href="/post/404">错误页面</Link>
			</div>
			<div>
				{posts.map((item) => {
					return <div key={item.id}>{item.content}</div>;
				})}
			</div>
			<div className="">渲染时间：{new Date().toString()}</div>
		</div>
	);
}

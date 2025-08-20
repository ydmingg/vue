import fs from "fs";
import path from "path";
interface Props {
	params: Promise<{ id: string }>; // Next.js 自动注入
}

interface Post {
	id: number;
	content: string;
}

function getPosts(): Post[] {
	// const res = await fetch("http://localhost:3000/posts.json");
	// const data: Post[] = await res.json();
	const filePath = path.join(process.cwd(), "public", "posts.json");
	const dataString = fs.readFileSync(filePath, "utf8");
	return JSON.parse(dataString) as Post[];
}

export async function generateStaticParams() {
	const posts = getPosts();
	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

export default async function postHome({ params }: Props) {
	const posts = getPosts();
	const { id } = await params;
	const post = posts.find((p) => p.id === +id);

	if (!post) return <div>没有找到文章</div>;

	return (
		<div>
			{posts.map((item) => {
				return <div key={item.id}>{item.content}</div>;
			})}
		</div>
	);
}

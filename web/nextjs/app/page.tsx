import fs from "fs";
import path from "path";
import Link from "next/link";

type Prop = {
	id: number;
	name: string;
	completed: boolean;
};

// export const getServerSideProps: GetServerSideProps= async () => {
//     // 读文件的方式获取数据
//     const fs = await import("fs");
//     const data1 = fs.readFileSync("data.json", "utf-8");
//     const data2 = JSON.parse(data1);
//     // return { props: { data: data2 } };

//     // 服务器请求数据
//     const res = await fetch("http://localhost:3000/data.json");
//     const data: Prop[] = await res.json();

//     return { props: { data } };
// };

// type HomeProps = {
//     data: Props[];
// };

const getPosts = () => {
	const filePath = path.join(process.cwd(), "public", "data.json");
	const dataString = fs.readFileSync(filePath, "utf8");
	return JSON.parse(dataString) as Prop[];
};

// export async function generateStaticParams() {
//     const props = getPosts();
//     return posts.map((item) => ({
//         id: item.id.toString()
//     }));
// }

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const props = getPosts();
    
    //
    const { age } = await searchParams
    console.log(age);
    

	return (
		<div className="">
			<div className="">nextjs</div>
			<Link href="/blog">lisa</Link>
			<a href="/blog">hello world</a>
			{props.map((item) => {
				return (
					<div key={item.id}>
						<input
							type="checkbox"
							defaultChecked={item.completed}
						/>
						{item.name}
					</div>
				);
			})}
		</div>
	);
}

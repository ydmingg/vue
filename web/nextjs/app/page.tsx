import { GetServerSideProps } from "next";
import Link from "next/link";

type Props = {
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
//     const data: Props[] = await res.json();
    
//     return { props: { data } };
// };

// type HomeProps = {
//     data: Props[];
// };
export default async function Home() {
    const res = await fetch("http://localhost:3000/data.json");
    const data: Props[] = await res.json();

	return (
		<div className="">
            <div className="">nextjs</div>
            <Link href="/blog">lisa</Link>
            <a href="/blog">hello world</a>
            {data.map((item) => {
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

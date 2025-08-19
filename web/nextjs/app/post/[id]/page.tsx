interface Props {
	params: Promise<{ id: string }>; // Next.js 自动注入
}

interface Post {
	id: number;
	content: string;
}

export default async function postHome({ params }: Props) {
	const { id } = await params;
    const res = await fetch("http://localhost:3000/posts.json", {
        cache: "no-store"
    });
	const data: Post[] = await res.json();

	

    const post = data.find((p: any) => p.id === params.then((p) => p.id));
    
    console.log(id,post);

	return (
		<div>
			{data.map((item) => {
				return <div key={item.id}>{item.content}</div>;
			})}
		</div>
	);
}

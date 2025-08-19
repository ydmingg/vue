// import { GetStaticProps } from "next";

type Props = {
	id: number;
	name: string;
	completed: boolean;
};

// export const getStaticProps: GetStaticProps= async () => {
// 	const res = await fetch("http://localhost:3000/data.json");
// 	const data: Props[] = await res.json();
// 	return { props: { data } };
// };

// type HomeProps = {
// 	data: Props[];
// };



export default async function Homea() {
    const res = await fetch("http://localhost:3000/data.json", {
        cache: "no-store"
    });
	const data: Props[] = await res.json();

	return (
		<div className="my-ssglist">
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
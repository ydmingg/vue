import Aside from './(common)/Aside'

// 局部的框架
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div style={{ display: "flex", border: "2px solid red" }}>
			<Aside className="show"/>
			<section>{children}</section>
		</div>
	);
}

import Wedge from "@/components/wedge";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
	
		<Wedge/>
		<img className="w-full h-40 object-cover border-b" src="./images/p1.jpg" />
		</div>
	);
}

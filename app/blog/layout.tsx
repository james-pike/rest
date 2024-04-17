import Wedge from "@/components/wedge";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
	
		<Wedge/>
		<img className="w-full h-40 object-cover border-b" 
		style={{ opacity: 0.75, height: '50vh' }}
		src="./images/p1.jpg" />
		</div>
	);
}

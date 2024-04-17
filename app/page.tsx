import { title } from "@/components/primitives";

export default function HomePage() {
	return (
		<div>
					<img className="w-full h-40 object-cover border-b" src="./images/p1.jpg" />

			<h1 className={title()}>Home Page</h1>
		</div>
	);
}

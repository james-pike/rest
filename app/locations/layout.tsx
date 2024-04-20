import BasicFooter from "@/components/footer";
import { AcmeIcon } from "@/social";
import ThemeSwitch from "@/theme-switch";
import Link from "next/link";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (

		<div>
			<img className="w-full h-40 object-cover border-b" src="./images/p1.jpg" />
      <img className="w-full h-80 object-cover border-12 border-black opacity-50" src="./images/w2.jpg" />
<BasicFooter />
		
	
	</div>
	);
}

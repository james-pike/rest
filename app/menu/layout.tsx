'use client';

import BasicFooter from "@/components/footer";
import List2 from "@/components/list2";
import MenuFooter from "@/components/menufooter";
import { AcmeIcon } from "@/social";
import ThemeSwitch from "@/theme-switch";
import Link from "next/link";



export default function MenuLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (

		<div>
			<img className="w-full h-40 object-cover border-b" src="./images/p1.jpg" />
			<MenuFooter/>
<List2/>
		
	
	</div>
	);
}

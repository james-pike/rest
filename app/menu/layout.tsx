import { AcmeIcon } from "@/social";
import ThemeSwitch from "@/theme-switch";
import Link from "next/link";

export default function MenuLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
<html>
		<head>
			
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		</head> 
		<footer className="flex w-full flex-col">
		<div className="mx-auto sm:px-6 pb-8 lg:px-8 ">
		<img className="w-full h-40 object-cover border-b" src="./images/p1.jpg" />
			<div className="xl:grid xl:grid-cols-3 xl:gap-8 px-4 py-4">
				<div className="space-y-8 md:pr-8">
					<div className="flex items-center justify-start">
						<AcmeIcon size={44} />
						
						<span className="text-medium px-1 font-medium">Joes Italian Kitchen</span>
					</div>
					<p className="text-small text-default-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
					</p>
				</div>
			</div>
			<div className="flex flex-wrap justify-between gap-2 pt-12">
				<p className="text-small text-default-400">&copy; 2024 Acme Inc. All rights reserved.</p>
				<ThemeSwitch />
			</div>
		</div>
	</footer>

	</html>
	);
}

import { title } from "@/components/primitives";
import { AcmeIcon } from "@/social";
import ThemeSwitch from "@/theme-switch";

export default function HomePage() {
	return (
		<div>
						<footer className="flex w-full flex-col">
		<div className="mx-auto sm:px-6 pb-8 lg:px-8 ">
			<video className="w-full h-80 object-cover border-b" autoPlay loop muted src="./video/wellington.mp4" />
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

			{/* <h1 className={title()}>Home Page</h1> */}
		</div>
	);
}

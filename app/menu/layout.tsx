import BasicFooter from "@/components/footer";
import List2 from "@/components/list2";
import Tab1 from "@/components/tabs";
import Tabs2 from "@/components/tabs2";
import ThemeDropdown from "@/components/theme-dropdown";
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

			<Tabs2 />
			 {/* <img className="w-full h-10 object-cover border-b" src="./images/w1.jpg" />  */}
			<footer className="flex w-full flex-col border-t border-gray-700">
				<div className="mx-auto px-2 pb-8 pt-4 sm:pt-24 lg:px-8 lg:pt-32">



					<div className="xl:grid xl:grid-cols-3 xl:gap-8">
						
						

							{/* <p className="text-small text-default-500 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing menu neque elit, tristique  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
            </p> */}

						{/* <Tabs2 /> */}
							{/* <Tab1 /> */}

						

					</div>

					{/* <List2 /> */}


					{/* <div className="flex flex-wrap justify-between gap-2 pt-5">
          <p className="text-small text-default-400">&copy; 2024 Acme Inc. All rights reserved.</p>
          <ThemeSwitch />
        </div> */}
				</div>
			</footer>
			<List2></List2>


		</div>
	);
}

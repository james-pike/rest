import BasicFooter from "@/components/footer";
import List2 from "@/components/list2";
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
			<img className="w-full h-40 object-cover border-b" src="./images/w1.jpg" />
			<footer className="flex w-full flex-col border-t-2 border-white">
      <div className="mx-auto px-5 pb-8 pt-6 sm:pt-24 lg:px-8 lg:pt-32">
        
        

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-3 md:pr-8">
            <div className="flex items-center justify-between">
              <AcmeIcon size={44} />
              
              <span className="text-medium px-1 font-medium">Menu: Wellington</span>
              <ThemeDropdown />
            </div>
            <p className="text-small text-default-500 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
            </p>
            <h1>Apetizers</h1>
           
          </div>
       
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

import BasicFooter from "@/components/footer";
import { WellingtonCarousel } from "@/components/location-carousel";
import { Carousel } from "@/components/ui/carousel";
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


      {/* <img 
      	style={{ opacity: 0.75, height: '33vh' }} 
      className="w-full  object-cover border-black border-8" src="./images/p1.jpg" /> */}

{/* <img 
      	style={{ opacity: 0.75, height: '33vh' }} 
      className="w-full  object-cover aspect-square border-8 border-black" src="./images/a2.jpg" /> */}



      <WellingtonCarousel/>
    



<BasicFooter />
		
	
	</div>
	);
}

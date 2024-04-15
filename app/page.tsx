import BrandBanner from "@/components/brand-banner";
import BasicFooter from "@/components/footer";
import Pricing from "@/components/pricing";
import { title } from "@/components/primitives";
import Video from "@/components/video";

export default function MenuPage() {
    return (
        <div className="">
            {/* background */}
            {/* <div className="relative">
                <video
                    src={"/video/wellington.mp4"}
                    loop
                    autoPlay
                    muted
                    style={{ opacity: 0.75, height: '25vh' }}
                    className='object-cover w-full h-full border-b-2'
                >
                </video>
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 z-20 space-y-3">
                    <h1 className="text-6xl text-white font-bold">Joe's Italian Kitchen</h1>
                    <p className="text-2xl text-white">Now serving Almonte, Nepean & Wellington</p>
                </div>
            </div>


            <div className="bg-blue-500 h-20"></div> */}
           
            <section className="mx-auto w-full lg:px-5 ">
            <Video />
            {/* <BasicFooter/> */}
    </section>

   
        </div>
    );
}

import Image from "next/image"
import puyallup from '/public/puyallup.JPG'

export default function Services() {
    return (
        <div className="flex flex-col space-y-10 text-justify">

            <div>
                
                <div className="flex flex-col-reverse md:flex-row gap-4 m-4 justify-around mt-8 md:mt-4">
                    
                    <div className="mx-auto "><Image src={puyallup} alt="" width={600} height={452} className="border-black border-4 rounded-[10px]" /></div>
                    <div className="mx-auto max-w-[600px] max-h-[452px]  text-xl flex flex-col justify-center  ">
                        <h2 className="mb-auto text-center text-cyan-800 text-2xl md:text-4xl border-black  border-b-4 pb-2 ">Arial Photography</h2>
                        <p className="md:mb-20 mb-4 p-4 md:p-0">Are you looking for a unique and captivating way to capture breathtaking aerial imagery? Look no further than our professional drone photography services. We combine cutting-edge drone technology with skilled pilots and photographers to deliver stunning visuals that will leave a lasting impression. Unlock the unlimited potential of aerial photography with our professional drone services. Elevate your visual storytelling and make a lasting impact with stunning aerial imagery. Contact us today to discuss your project and let us bring your vision to new heights!</p>
                    </div>
                </div>
            </div>

            <div className="">
                
                <div className="flex flex-col md:flex-row gap-4 m-4 justify-around">
                <div className="mx-auto max-w-[600px]  mx-h-[452px]  text-xl flex flex-col justify-center  ">
                        <h2 className="mb-auto text-center text-cyan-800 text-2xl md:text-4xl border-black  border-b-4 pb-2 ">Inspections</h2>
                        <p className="md:mb-20 p-4 md:p-0">Are you tired of costly and time-consuming manual inspections that put your personnel at risk? Step into the future of industrial inspections with our cutting-edge drone technology. Our drone inspection solutions offer a game-changing approach to assessing assets, infrastructure, and facilities with unparalleled efficiency and safety.</p>
                    </div>
                    <div className="mx-auto"><Image  src={puyallup} alt="" width={600} height={600} className="border-black border-4 rounded-[10px]"  /></div>
                    
                </div>
            </div>

           

            <div>
                
                <div className="flex flex-col-reverse md:flex-row gap-4 m-4 justify-around">
                    
                    <div className="mx-auto "><Image src={puyallup} alt="" width={600} height={452} className="border-black border-4 rounded-[10px]" /></div>
                    <div className="mx-auto max-w-[600px] max-h-[452px]  text-xl flex flex-col justify-center  ">
                        <h2 className="mb-auto text-center text-cyan-800 text-2xl md:text-4xl border-black  border-b-4 pb-2 ">Search and Rescue</h2>
                        <p className="md:mb-20 p-4 md:p-0">When it comes to <span className="text-red-600 font-bold">critical search and rescue</span>  missions, <span className="text-red-600 font-bold">every second counts! </span>
                            Traditional methods can be slow and limited, putting lives at risk. Drones equipped with high-resolution cameras and <span className="text-red-600 font-bold">thermal</span> imaging sensors can <span className="text-red-600 font-bold">cover vast areas quickly</span>.  They can navigate challenging terrain, fly at different altitudes, and access hard-to-reach locations that are difficult for traditional search and rescue teams to reach. Expand your search radius and increase the chances of locating missing individuals or <span className="text-red-600 font-bold">identifying hazards</span>.</p>
                    </div>
                </div>
            </div>
            <span className="text-red-600 font-bold"></span>
            

        </div>
    )
}
import Image from "next/image"
import puyallup from '/public/puyallup.JPG'

export default function Services() {
    return (
        <div className="flex flex-col">

            <div>
                <h2 className="my-8 text-center text-cyan-800 text-2xl md:text-4xl">Arial Photogrophy</h2>
                <div className="flex flex-col md:flex-row gap-4 m-4 justify-around">
                    <div className="mx-auto w-[600px] h-[600px] text-center py-">
                        Are you looking for a unique and captivating way to capture breathtaking aerial imagery? Look no further than our professional drone photography services. We combine cutting-edge drone technology with skilled pilots and photographers to deliver stunning visuals that will leave a lasting impression. Unlock the unlimited potential of aerial photography with our professional drone services. Elevate your visual storytelling and make a lasting impact with stunning aerial imagery. Contact us today to discuss your project and let us bring your vision to new heights!
                    </div>
                    <div className="mx-auto "><Image src={puyallup} alt="" width={600} height={600} className="border-black border-4 rounded-[10px]" /></div>
                </div>
            </div>

            <div>
                <h2 className="my-8 text-center text-cyan-800 text-2xl md:text-4xl">Inspections</h2>
                <div className="flex flex-col md:flex-row gap-4 m-4 justify-around">
                    <div className="mx-auto"><Image  src={puyallup} alt="" width={600} height={600} /></div>
                    <div className="mx-auto"><Image src={puyallup} alt="" width={600} height={600} /></div>
                </div>
            </div>

        </div>
    )
}
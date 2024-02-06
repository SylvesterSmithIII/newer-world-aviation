import Image from "next/image"
import Drone1 from '/public/drone-1.png'
import Drone2 from '/public/drone-2.png'
import Drone3 from '/public/drone-3.png'

export default function Fleet() {
    return (
        <div className="flex flex-col max-w-[1400px] mx-auto mt-4">
            <div className="flex gap-4">
            <div className="w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    <h1 className="text-2xl">DJI M30T</h1>
                    <ul className="my-auto">
                        <li>8K Photos / 4K Videos</li>
                        <li>200x Zoom</li>
                        <li>Thermal Camera</li>
                        <li>3600ft Range Finder</li>
                    </ul>
                </div>
                
                <div className="flex-1"><Image alt="" src={Drone1} width={400} height={500}></Image></div>
                
                <div className="w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    
                    <ul className="my-auto font-bold text-lg">
                        <li>Inspections</li>
                        <li>Search & Rescue</li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-4">
            <div className="w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
            <h1 className="text-2xl">DJI P4 ADV</h1>
                    <ul className="my-auto">
                        <li>Mechanical Shutter</li>
                        <li>20MP 1" CMOS Sensor</li>
                    </ul>
                </div>
                
                <div><Image alt="" src={Drone2} width={400} height={500}></Image></div>
                
                <div className="w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    
                    <ul className="my-auto font-bold text-lg">
                        <li>Photography</li>
                        <li>Drone Mapping</li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-4">
            <div className="w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                <h1 className="text-2xl">DJI FPV</h1>
                    <ul className="my-auto">
                        <li>Speeds up to 90MPH</li>
                        <li>Manual Flight</li>
                       
                    </ul>
                </div>
                
                <div><Image alt="" src={Drone3} width={400} height={500}></Image></div>
                
                <div className="w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    
                    <ul className="my-auto font-bold text-lg">
                        <li>FPV Shots</li>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}
import Image from "next/image"

export default function Card({ image }) {
    return (
        <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    <h1 className="text-2xl">DJI M30T</h1>
                    <ul className="my-auto">
                    <li>8K Photos / 4K Videos</li>
                    <li>200x Zoom</li>
                    <li>Thermal Camera</li>
                    <li>3600ft Range Finder</li>
                    </ul>
                </div>

                <div className=" hidden md:block">
                    <Image alt="" src={image} width={400} height={500} />
                </div>

                <div className="md:w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    <ul className="my-auto font-bold text-lg">
                    <li>Inspections</li>
                    <li>Search & Rescue</li>
                    </ul>
                </div>

                <div className="flex justify-center md:hidden">
                    <Image alt="" src={Drone1} width={400} height={500} />
                </div>
            </div>
    )
}
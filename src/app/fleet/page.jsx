import Image from "next/image"
import Drone1 from '/public/drone-1.png'
import Drone2 from '/public/drone-2.png'
import Drone3 from '/public/drone-3.png'
import Card from "./card"

export default function Fleet() {

    const fleet = [
        {
            name: "DJI M30T",
            stats: [
                "8K Photos / 4K Videos",
                "200x Zoom",
                "Thermal Camera",
                "3600ft Range Finder"
            ],
            services: [
                "Inspections",
                "Search & Rescue"
            ],
            image: Drone1
        },
        {
            name: "DJI P4 ADV",
            stats: [
                "Mechanical Shutter",
                "20MP 1&ldquo; CMOS Sensor",
            ],
            services: [
                "Photography",
                "Drone Mapping"
            ],
            image: Drone2
        },
        {
            name: "DJI FPV",
            stats: [
                "Speeds up to 90MPH",
                "Manual Flight",
            ],
            services: [
                "FPV Shots",
            ],
            image: Drone3
        }
    ]



    const fleetElements = fleet.map((fleet, idx) => <Card key={idx} name={fleet.name} stats={fleet.stats} services={fleet.services} image={fleet.image} />)

    return (
        <div className="flex flex-col w-full mx-auto mt-4 pb-4">

           {fleetElements}

        </div>
    )
}
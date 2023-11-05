import Image from "next/image"
import puyallup from '/public/puyallup.JPG'

export default function Services() {
    return (
        <div className="flex flex-col">

            <div>
                <h2 className="m-4 text-xl">Arial Photogrophy</h2>
                <div className="flex flex-col md:flex-row gap-4 m-4 justify-around">
                    <div className="mx-auto"><Image src={puyallup} alt="" width={600} height={600}  /></div>
                    <div className="mx-auto"><Image src={puyallup} alt="" width={600} height={600} /></div>
                </div>
            </div>

            <div>
                <h2 className="m-4 text-xl">Inspection</h2>
                <div className="flex flex-col md:flex-row gap-4 m-4 justify-around">
                    <div className="mx-auto"><Image  src={puyallup} alt="" width={600} height={600} /></div>
                    <div className="mx-auto"><Image src={puyallup} alt="" width={600} height={600} /></div>
                </div>
            </div>

        </div>
    )
}
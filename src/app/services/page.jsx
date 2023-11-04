import Image from "next/image"

export default function Services() {
    return (
        <div className="flex flex-col">

            <div>
                <h2 className="m-4 text-xl">Arial Photogrophy</h2>
                <div className="flex gap-4 m-4">
                    <div><Image src="/puyallup.jpg" alt="" width={300} height={300}  /></div>
                    <div><Image src="/puyallup.jpg" alt="" width={300} height={300} /></div>
                </div>
            </div>

            <div>
                <h2 className="m-4 text-xl">Inspection</h2>
                <div className="flex gap-4 m-4 ">
                    <div><Image  src="/puyallup.jpg" alt="" width={300} height={300} /></div>
                    <div><Image src="/puyallup.jpg" alt="" width={300} height={300} /></div>
                </div>
            </div>

        </div>
    )
}
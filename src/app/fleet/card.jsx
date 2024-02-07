import Image from "next/image"

export default function Card({ name, stats, services, image }) {

    const statElements = stats.map((stat, idx) => <li key={idx} >{stat}</li>)
    const serviceElements = services.map((service, idx) => <li key={idx}>{service}</li>)

    console.log(name)

    return (
        <div className="bg-stone-100 shadow-lg bg-opacity-40  mx-6 hover:-translate-y-2 transition-transform ease-in-out duration-300 py-4 rounded-3xl mt-8">
            <h1 className="md:hidden text-center text-2xl">{name}</h1>

            <div className="flex gap-4">
                <div className="md:w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    <h1 className="hidden md:block text-2xl">{name}</h1>
                    <ul className="my-auto">
                        {statElements}
                    </ul>
                </div>

                <div className=" hidden md:block">
                    <Image alt="" src={image} width={300} height={500} />
                </div>

                <div className="md:w-[400px] text-center flex flex-col justify-between h-[200px] px-12 flex-1">
                    <ul className="my-auto font-bold text-lg">
                        {serviceElements}
                    </ul>
                </div>
                
            </div>

            <div className="flex justify-center md:hidden">
                    <Image alt="" src={image} width={400} height={500} />
            </div>

        </div>
        
    )
}


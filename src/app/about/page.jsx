import Image from "next/image"
import smallLogo from '/public/small-logo.PNG'

export default function About() {
    return (
        <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly ">
            <div className="lg:w-1/2">
                <Image src={smallLogo} alt="Picture of Lantz Smith" className="mx-auto" width={450} height={450} />
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl text-cyan-800 text-center mt-6 mb-8 md:my-12 md:text-4xl">About Newer World Aviation</h3>
                <p className="mt-4 px-8 text-justify leading-loose tracking-wider text-xl text-opacity-50">I am Lantz Smith an aviation enthusiast and the founder of this platform. With years of experience in the field of aviation and a deep love for drones, I decided to create this space to share my knowledge and insights with fellow drone enthusiasts, professionals, and anyone curious about the incredible world of unmanned aerial vehicles. Whether you&apos;re a hobbyist looking to capture stunning aerial imagery or a professional seeking the latest industry updates, you&apos;ll find a wealth of information, guides, and news here. Our mission is to foster a community of drone enthusiasts, foster safety awareness, and showcase the endless possibilities that drones offer in various industries. I&apos;m excited to have you on board as we soar to new heights together in the ever-evolving world of aviation drones.</p>
            </div>
        </div>
    )
}
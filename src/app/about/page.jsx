import Image from "next/image"
import smallLogo from '/public/small-logo.PNG'

export default function About() {
    return (
        <div className="flex flex-row">
            <div className="">
                <Image src={smallLogo} alt="Picture of Lantz Smith" width={400} height={600} />
            </div>
            <div>
                <h3 className="text-xl">Lantz Smith</h3>
                <p className="mt-4">I am passionate aviation enthusiast and the founder of this platform. With years of experience in the field of aviation and a deep love for drones, I decided to create this space to share my knowledge and insights with fellow drone enthusiasts, professionals, and anyone curious about the incredible world of unmanned aerial vehicles. Whether you&apos;re a hobbyist looking to capture stunning aerial imagery or a professional seeking the latest industry updates, you&apos;ll find a wealth of information, guides, and news here. Our mission is to foster a community of drone enthusiasts, foster safety awareness, and showcase the endless possibilities that drones offer in various industries. I&apos;m excited to have you on board as we soar to new heights together in the ever-evolving world of aviation drones.</p>
            </div>
        </div>
    )
}
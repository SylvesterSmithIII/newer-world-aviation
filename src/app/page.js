import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col my-8 mx-16">         
      <div className="flex-1 mx-auto max-w-[900px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="aspect-auto border-black border-4 mt-8"
        >
          <source src="/fujw2816.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mx-auto my-auto text-xl flex flex-col justify-center">
    
          <h2 className="mb-4 text-center  text-2xl md:text-4xl  ">Call Now For A Quote!</h2>
          <p className=" p-4 mb-4 text-center">Cell: 206-359-5016</p>
      </div>
      
    </main>
  );
}

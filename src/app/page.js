import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1 bg-cover bg-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/fujw2816.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="absolute top-12 left-0 right-0 text-center">
        <h1 className="text-6xl">Taking Quality To New Heights</h1>
      </div> */}
    </main>
  );
}


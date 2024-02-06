import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1 bg-cover bg-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/1yNoVJZKYq4?autoplay=1&controls=0&mute=1"
          title="Embedded Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="absolute top-12 left-0 right-0 text-center">
        <h1 className="text-6xl">Taking Quality To New Heights</h1>
      </div> */}
    </main>
  );
}


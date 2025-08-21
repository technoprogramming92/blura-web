// Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Navbar */}
      {/* <div className="flex items-center justify-between !px-20 sm:px-12 py-12">
        
        <Image
          src="/blura-logo-header.png"
          alt="Blüra Logo"
          width={120}
          height={40}
          priority
        />

      
        <nav className="hidden sm:flex gap-8 text-sm font-medium text-[#0A2342]">
          <a href="#">Our Story</a>
          <a href="#">Contact Us Now</a>
        </nav>
      </div> */}

      {/* Hero Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between !px-20 sm:px-12 py-12 lg:py-20 gap-10">
        {/* Left */}
        <div className="flex flex-col max-w-xl">
          <h2 className="text-2xl font-semibold text-[#0A2342] font-['Frank_Ruhl_Libre']">
            For Souls That Seek Silence. Every Sip Returns You
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2342] mt-2 leading-snug font-['Frank_Ruhl_Libre'] text-nowrap">
            TO STILLNESS, TO NATURE, TO YOU.
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed font-['Frank_Ruhl_Libre']">
            Premium natural mineral water sourced from the Himalayan foothills,
            sealed in sleek, sustainable aluminium cans.
          </p>
          <button className="mt-6 bg-[#0A2342] text-white px-6 py-3 rounded-sm font-medium hover:bg-[#0c2c54] transition">
            Elevate Your Hydration
          </button>
        </div>

        {/* Right (Can Image) */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-[45%]">
          <Image
            src="/hero-img.png" // replace with your image path
            alt="bliira can"
            width={350}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Scrolling Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0A2342] py-2">
        <div className="flex gap-8 whitespace-nowrap overflow-x-auto no-scrollbar px-4 text-white font-medium text-sm">
          {Array(6)
            .fill("A Moment Of Clarity In a Chaotic World")
            .map((text, i) => (
              <span key={i} className="flex items-center gap-2 shrink-0">
                {text} <span>📱</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

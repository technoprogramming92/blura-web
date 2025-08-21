import React from "react";

export default function Main() {
  return (
    <section className="relative w-full bg-white">
      {/* Right Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/7XVqib79GW.png')] bg-cover bg-no-repeat z-[1]" />

      {/* Text Block */}
      <div className="relative z-[3] max-w-2xl px-6 sm:px-12 lg:px-20 pt-20 lg:pt-24">
        <h1 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug text-[#071f43]">
          for <span className="capitalize">Souls</span> that seek silence. Every
          sip returns you to stillness, to nature, to you.
        </h1>

        <p className="mt-4 text-sm sm:text-base lg:text-lg font-['Frank_Ruhl_Libre'] text-gray-600">
          Premium natural mineral water sourced from the Himalayan foothills,
          sealed in sleek, sustainable aluminium cans.
        </p>

        <button className="mt-8 px-6 py-3 bg-[#071f43] text-white font-['Frank_Ruhl_Libre'] text-base font-semibold shadow hover:bg-[#0a2859] transition">
          Elevate Your Hydration
        </button>
      </div>

      {/* Bottom Strip with Icons */}
      <div className="absolute bottom-0 left-0 w-full bg-[#071f43] py-4 flex flex-col sm:flex-row justify-center items-center gap-6">
        {[
          "E6Kx4dGY3h.png",
          "s2Z7T5JDdP.png",
          "kvvXBGY2Uf.png",
          "sMRnxM9n1h.png",
        ].map((img, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-white font-['Frank_Ruhl_Libre'] text-sm sm:text-base"
          >
            <span>A Moment Of Clarity In a Chaotic World</span>
            <div
              className="w-6 h-6 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/${img})`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

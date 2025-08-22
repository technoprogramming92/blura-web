export default function Hero4() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1460px] relative mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Right Image (order 1 in mobile, stays right in desktop) */}
        <div className="order-2 lg:order-2 w-full lg:w-[560px] h-[400px] lg:h-[634px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/NE1XZKpKVi.png')] bg-cover bg-no-repeat lg:self-end lg:translate-y-12 z-0" />

        {/* Left Content (order 2 in mobile) */}
        <div className="order-1 lg:order-1 flex flex-col gap-8 items-start max-w-[735px] mt-10 lg:mt-0 lg:pr-12">
          <h1 className="font-['Frank_Ruhl_Libre'] text-[26px] sm:text-[26px] lg:text-[30px] font-semibold leading-snug text-[#071f43]">
            For Souls That Seek Silence Every Sip Returns You
          </h1>
          <h1 className="font-['Frank_Ruhl_Libre'] text-[26px] sm:text-[32px] lg:text-[40px] lg:text-nowrap font-semibold leading-snug text-[#071f43]">
            TO STILLNESS, TO NATURE, TO YOU.
          </h1>
          <p className="text-[16px] sm:text-[18px] font-light leading-7 text-gray-600">
            Premium natural mineral water sourced from the Himalayan foothills,
            sealed in sleek, sustainable aluminium cans.
          </p>

          <button className="px-6 py-3 bg-[#071f43] text-white font-['Frank_Ruhl_Libre'] text-[16px] font-semibold shadow hover:bg-[#0a2859] transition">
            Elevate Your Hydration
          </button>
        </div>
      </div>

      {/* Marquee Bar */}
      <div className="relative w-full z-10">
        <div className="w-full bg-[#071f43] overflow-hidden mt-[-140px] lg:mt-[-80px] overflow-hidden z-20">
          <div className="flex animate-marquee whitespace-nowrap gap-12 py-4 px-6">
            {[
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white text-[18px] font-medium"
              >
                <span>{text}</span>
                <div
                  className="w-6 h-6 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/${
                      [
                        "V64XdgD2CL.png",
                        "NT6M5XPjxy.png",
                        "AhT98fD6qs.png",
                        "thqYuzu7qL.png",
                      ][i]
                    })`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

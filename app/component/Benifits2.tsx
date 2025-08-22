export default function Benefits() {
  const benefits = [
    {
      title: "Balances Your Body’s pH",
      desc: "With a natural pH of 7–8, BLÜRA helps neutralise acidity",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/JZfxUgA2iq.png",
    },
    {
      title: "Hydrates Smarter",
      desc: "Rich in minerals like calcium and magnesium for deeper, more efficient hydration.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/cQxrA5nM87.png",
    },
    {
      title: "Boosts Skin & Detox",
      desc: "Flushes toxins, supports organ function, and promotes a healthier glow.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/8rCYY45kTQ.png",
    },
    {
      title: "Strengthens from Within",
      desc: "Minerals that support bone health, muscle recovery, and nerve function.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/ZgU7xyOFeP.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-12 font-['Frank_Ruhl_Libre']">
        Benefits of Drinking blüra Water
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col gap-4 hover:bg-[#071f43] cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[55px] h-[55px] transition duration-300 group-hover:invert group-hover:brightness-0"
            />
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

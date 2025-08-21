import Image from "next/image";
export default function Contact() {
  return (
    <section className="w-full bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Info */}
        <div className="bg-[#071f43] text-white px-6 sm:px-12 lg:px-24 py-12 flex-1 flex flex-col gap-6">
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl font-bold capitalize">
            be a blüra being
          </h2>
          <p className="text-sm sm:text-base font-light leading-relaxed">
            blüra is our answer to your luxury that doesn’t come at a planetary
            cost. It’s a brand built on transparency and taste. A chilled can
            against your palm. The first sip. The sudden pause inside you.
            That’s not hydration. That’s healing. That’s nature, grounding you
            again. <br />
            <br />
            If that’s you, welcome. You’re one of us. A{" "}
            <strong>blüra being</strong>.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/CK6SNG0NLD.png)] bg-cover bg-no-repeat" />
              <span>754568953</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/WF6wqEaxAH.png)] bg-cover bg-no-repeat" />
              <span>johndeo@yopmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white px-6 sm:px-12 lg:px-24 py-12 flex-1">
          <h3 className="text-2xl font-['Frank_Ruhl_Libre'] mb-2">
            Have Questions? Let’s Connect!
          </h3>
          <p className="text-gray-700 mb-6">
            We’re here to help - reach out to learn more
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border-b border-black px-2 py-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border-b border-black px-2 py-2 outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="border-b border-black px-2 py-2 outline-none"
            />
            <select className="border-b border-black px-2 py-2 outline-none">
              <option>Select Business</option>
              <option>B2B</option>
              <option>B2C</option>
            </select>
            <textarea
              placeholder="Write your message..."
              rows={3}
              className="border-b border-black px-2 py-2 outline-none"
            />
            <button
              type="submit"
              className="self-start w-fit inline-flex px-6 py-3 bg-[#071f43] text-white font-['Frank_Ruhl_Libre'] text-[16px] font-semibold shadow hover:bg-[#0a2859] transition"
            >
              Contact Us Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-[#071f43] text-white py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Logo */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <Image
            src="/footer-logo.png"
            alt="Blüra Logo"
            width={96} // 24 * 4 (Tailwind rem-based width)
            height={24} // 6 * 4
            className="object-contain"
          />
        </div>
        {/* Center Social */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
          <span className="text-sm">Follow us:</span>
          <div className="flex gap-4">
            <a href="#">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/SNH4g6c2xs.png)] bg-cover" />
            </a>
            <a href="#">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/CnuVmABEOQ.png)] bg-cover" />
            </a>
            <a href="#">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/SFavkccuQP.png)] bg-cover" />
            </a>
          </div>
        </div>
        {/* Right Links */}
        <div className="flex gap-8 w-full sm:w-auto justify-center sm:justify-end">
          <a href="#" className="text-sm">
            Terms & Conditions
          </a>
          <a href="#" className="text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}

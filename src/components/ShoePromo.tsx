"use client";

import Image from "next/image";

const ShoePromo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="w-full h-14 p-2 bg-gray-200 text-center">
        <h1 className="text-[15px] font-medium sm:text-[18px]">Hello Nike App</h1>
        <p className="text-[11px] sm:text-[13px]">
          Download the app to access everything Nike. Get Started!
        </p>
      </header>

      <div className="relative w-full md:w-[95%] lg:w-[95%] h-[40vh] sm:h-[60vh] lg:h-screen">
        <Image
          src="/images/nike-brand.png"
          alt="Nike Air Max Pulse"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col items-center justify-center p-6">
        <span className="text-[15px] font-medium">First Look</span>
        <h2 className="text-[32px] sm:text-[56px] uppercase font-medium text-center">
          Nike Air Max Pulse
        </h2>
        <p className="text-[15px] font-normal text-center max-w-2xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
          —designed to push you past your limits and help you go to the max.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 px-4">
        <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-normal hover:bg-white hover:border hover:border-black hover:text-black transition duration-300">
          Notify Me
        </button>
        <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-normal hover:bg-white hover:border hover:border-black hover:text-black transition duration-300">
          Shop Air Max
        </button>
      </div>
    </div>
  );
};

export default ShoePromo;
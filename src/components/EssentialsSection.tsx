"use client";  

import Image from "next/image";  

const EssentialsSection = () => {  
  return (  
    <div className="w-full px-4 py-12 mx-auto max-w-7xl">  
      <div className="flex justify-start w-full mb-4">  
        <span className="text-[18px] font-medium">The Essentials</span>  
      </div>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
        {/* Men's Section */}  
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">  
          <Image  
            src="/images/men.png"   
            alt="Men's Apparel"  
            fill  
            className="object-cover transition duration-300"  
          />  
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300"></div>  
          <button className="absolute bottom-4 left-4 bg-white text-black rounded-full py-2 px-6 text-sm font-normal hover:bg-black hover:border hover:border-black hover:text-white transition duration-300">  
            Men's  
          </button>  
        </div>  

        {/* Women's Section */}  
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">  
          <Image  
            src="/images/womens.png"   
            alt="Women's Apparel"  
            fill  
            className="object-cover transition duration-300"  
          />  
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300"></div>  
          <button className="absolute bottom-4 left-4 bg-white text-black rounded-full py-2 px-6 text-sm font-normal hover:bg-black hover:border hover:border-black hover:text-white transition duration-300">  
            Women's  
          </button>  
        </div>  

        {/* Kids' Section */}  
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">  
          <Image  
            src="/images/kids.png"   
            alt="Kids' Apparel"  
            fill  
            className="object-cover transition duration-300"  
          />  
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300"></div>  
          <button className="absolute bottom-4 left-4 bg-white text-black rounded-full py-2 px-6 text-sm font-normal hover:bg-black hover:border hover:border-black hover:text-white transition duration-300">  
            Kids'  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default EssentialsSection;
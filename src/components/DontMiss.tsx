"use client";  

import Image from "next/image";  
import Link from "next/link";  

const DontMiss = () => {  
  return (  
    <div className="flex flex-col items-center justify-center">  
      
      <div className="flex justify-start w-full mb-4 pl-12">  
        <span className="text-[18px] font-medium">Don't Miss</span>  
      </div>  
      
      <div className="relative w-full md:w-[95%] lg:w-[95%] h-[40vh] sm:h-[60vh] lg:h-screen">  
        <Image  
          src="/images/dontmiss.png"  
          alt="Modeling of men "  
          fill  
          className="object-cover"  
          priority  
        />  
      </div>  
    
      <div className="flex flex-col items-center justify-center p-6 text-center">  
        <h2 className="text-[32px] sm:text-[56px] uppercase font-medium">  
        FLIGHT ESSENTIALS
        </h2>  
        <p className="text-[15px] font-normal max-w-2xl">  
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.  
        </p>  
      </div>  
    
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 px-4">  
        <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-normal hover:bg-white hover:border hover:border-black hover:text-black transition duration-300">  
        Shop 
        </button>  
      </div>  
    </div>  
  );  
};  

export default DontMiss;
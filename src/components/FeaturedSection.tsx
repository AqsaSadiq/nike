"use client";  

import Image from "next/image";  
import Link from "next/link";  

const FeaturedSection = () => {  
  return (  
    <div className="flex flex-col items-center justify-center">  
      
      <div className="flex justify-start w-full mb-4 pl-12">  
        <span className="text-[18px] font-medium">Featured</span>  
      </div>  
      
      <div className="relative w-full md:w-[95%] lg:w-[95%] h-[40vh] sm:h-[60vh] lg:h-screen">  
        <Image  
          src="/images/featured.png"  
          alt="Running men"  
          fill  
          className="object-cover"  
          priority  
        />  
      </div>  
    
      <div className="flex flex-col items-center justify-center p-6 text-center">  
        <h2 className="text-[32px] sm:text-[56px] uppercase font-medium">  
          STEP INTO WHAT FEELS GOOD  
        </h2>  
        <p className="text-[15px] font-normal max-w-2xl">  
          Cause everyone should know the feeling of running in that perfect pair.  
        </p>  
      </div>  
    
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 px-4">  
        <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-normal hover:bg-white hover:border hover:border-black hover:text-black transition duration-300">  
          Find Your Shoe  
        </button>  
      </div>  
    </div>  
  );  
};  

export default FeaturedSection;
"use client";  

import { FC } from "react";  
import Image from "next/image";  
import { ChevronDown } from "lucide-react";  

const Header: FC = () => {  
  return (  
    <div className="flex items-center justify-between p-4 bg-white">  
      <h1 className="text-2xl font-bold">New (500)</h1>  

      <div className="flex items-center space-x-4">  
        
        <button className="flex items-center text-black hover:underline">  
          <span className="mr-1">Hide Filters</span>   
          <Image src="/images/filter.png" alt="Filter Icon" width={20} height={20} className="align-middle" />   
        </button>  

        <div className="flex items-center">  
          <span className="mr-1">Sort By</span>  
          <ChevronDown className="h-5 w-5" />  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Header;
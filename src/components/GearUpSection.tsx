"use client";  

import Image from "next/image";  
import { useState } from "react";  
import { products } from "@/lib/products";   
import { useRouter } from "next/navigation";   
import { ChevronLeft, ChevronRight } from "lucide-react";   

const GearUpSection = () => {  
  const gearProducts = products.slice(-8);  
  const menProducts = gearProducts.slice(0, 4);  
  const womenProducts = gearProducts.slice(4, 8);  

  const [menStartIndex, setMenStartIndex] = useState(0);  
  const [womenStartIndex, setWomenStartIndex] = useState(0);  
  const router = useRouter();   

  const handleMenPrevious = () => {  
    setMenStartIndex((current) => (current === 0 ? menProducts.length - 2 : current - 2));  
  };  

  const handleMenNext = () => {  
    setMenStartIndex((current) => (current >= menProducts.length - 2 ? 0 : current + 2));  
  };  

  const handleWomenPrevious = () => {  
    setWomenStartIndex((current) => (current === 0 ? womenProducts.length - 2 : current - 2));  
  };  

  const handleWomenNext = () => {  
    setWomenStartIndex((current) => (current >= womenProducts.length - 2 ? 0 : current + 2));  
  };  

  const handleProductClick = (id: string) => {  
    router.push(`/product/${id}`);  
  };  

  return (  
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">  
      <div className="flex justify-start w-full mb-4">  
        <span className="text-[18px] font-medium">Gear Up</span>  
      </div>  

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">  
        <div className="flex items-center space-x-2 sm:space-x-4">  
          <h3 className="text-lg sm:text-xl font-medium">Shop Men's</h3>  
          <button onClick={handleMenPrevious} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Previous men's products">  
            <ChevronLeft className="w-5 h-5 text-black" />  
          </button>  
          <button onClick={handleMenNext} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Next men's products">  
            <ChevronRight className="w-5 h-5 text-black" />  
          </button>  
        </div>  
        <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">  
          <h3 className="text-lg sm:text-xl font-medium">Shop Women's</h3>  
          <button onClick={handleWomenPrevious} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Previous women's products">  
            <ChevronLeft className="w-5 h-5 text-black" />  
          </button>  
          <button onClick={handleWomenNext} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" aria-label="Next women's products">  
            <ChevronRight className="w-5 h-5 text-black" />  
          </button>  
        </div>  
      </div>  

      {/* Products Grid */}  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
        {/* Men's Products */}  
        {menProducts.slice(menStartIndex, menStartIndex + 2).map((product) => (  
          <div key={product.id} className="bg-white overflow-hidden cursor-pointer" onClick={() => handleProductClick(product.id)}>  
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gray-100">  
              <Image   
                src={product.imageUrl}  
                alt={product.name}  
                fill  
                sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw" // Responsive images  
                className="object-cover hover:scale-105 transition-transform duration-300"   
              />  
            </div>  
            <div className="p-4">  
              <h4 className="text-md sm:text-lg font-medium text-gray-900 truncate">{product.name}</h4>  
              <p className="text-sm text-gray-600">{product.category}</p>  
              <p className="text-lg font-semibold text-black mt-2">₹ {product.price.toLocaleString()}</p>  
            </div>  
          </div>  
        ))}  

        {/* Women's Products */}  
        {womenProducts.slice(womenStartIndex, womenStartIndex + 2).map((product) => (  
          <div key={product.id} className="bg-white overflow-hidden cursor-pointer" onClick={() => handleProductClick(product.id)}>  
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gray-100">  
              <Image   
                src={product.imageUrl}  
                alt={product.name}  
                fill  
                sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw" // Responsive images  
                className="object-cover hover:scale-105 transition-transform duration-300"   
              />  
            </div>  
            <div className="p-4">  
              <h4 className="text-md sm:text-lg font-medium text-gray-900 truncate">{product.name}</h4>  
              <p className="text-sm text-gray-600">{product.category}</p>  
              <p className="text-lg font-semibold text-black mt-2">₹ {product.price.toLocaleString()}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default GearUpSection;
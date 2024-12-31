"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

const ProductCarousel = () => {
 
  const extendedProducts = [...products, ...products, ...products];
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((current) => 
      current === 0 ? extendedProducts.length - 3 : current - 1
    );
  };

  const handleNext = () => {
    setStartIndex((current) => 
      current >= extendedProducts.length - 3 ? 0 : current + 1
    );
  };

  const visibleProducts = [
    extendedProducts[startIndex],
    extendedProducts[startIndex + 1],
    extendedProducts[startIndex + 2],
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-normal">Best of Air Max</h2>
        <div className="flex items-center gap-4">
          <span className="text-lg">Shop</span>
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-100"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-8 h-8 text-black/80" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-100"
            aria-label="Next products"
          >
            <ChevronRight className="w-8 h-8 text-black/80" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-8 overflow-hidden">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel; 
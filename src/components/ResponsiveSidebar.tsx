"use client";

import { FC, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";  

interface ResponsiveSidebarProps {
  setSelectedGender: (gender: string | null) => void;
  setSelectedKids: (kids: string | null) => void;
  setSelectedPrice: (price: string | null) => void;
}

const ResponsiveSidebar: FC<ResponsiveSidebarProps> = ({ setSelectedGender, setSelectedKids, setSelectedPrice }) => {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 max-h-[80vh] overflow-y-auto p-4 bg-white shadow-md">
    
      <div className="max-h-[300px] overflow-y-auto">
        <ul className="space-y-2">
          {[
            "Shoes",
            "Sports Bras",
            "Tops & T-Shirts",
            "Hoodies & Sweatshirts",
            "Jackets",
            "Trousers & Tights",
            "Shorts",
            "Tracksuits",
            "Jumpsuits & Rompers",
            "Skirts & Dresses",
            "Socks",
            "Accessories & Equipment",
          ].map((category) => (
            <li key={category} className="cursor-pointer hover:underline">{category}</li>
          ))}
        </ul>
      </div>

      {/* Gender Section */}
      <div className="mt-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsGenderOpen(!isGenderOpen)}>
          <h2 className="text-lg font-semibold">Gender</h2>
          {isGenderOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
        {isGenderOpen && (
          <ul className="space-y-2 mt-2">
            {["Men", "Women", "Unisex"].map((gender) => (
              <li key={gender} className="flex items-center">
                <input type="radio" name="gender" id={gender} onChange={() => setSelectedGender(gender)} />
                <label htmlFor={gender} className="ml-2 cursor-pointer">{gender}</label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Kids Section */}
      <div className="mt-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsKidsOpen(!isKidsOpen)}>
          <h2 className="text-lg font-semibold">Kids</h2>
          {isKidsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
        {isKidsOpen && (
          <ul className="space-y-2 mt-2">
            {["Boys", "Girls"].map((kid) => (
              <li key={kid} className="flex items-center">
                <input type="checkbox" id={kid} onChange={() => setSelectedKids(kid)} />
                <label htmlFor={kid} className="ml-2 cursor-pointer">{kid}</label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop By Price Section */}
      <div className="mt-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsPriceOpen(!isPriceOpen)}>
          <h2 className="text-lg font-semibold">Shop By Price</h2>
          {isPriceOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
        {isPriceOpen && (
          <ul className="space-y-2 mt-2">
            {["Under ₹ 2,500.00", "₹ 2,501.00 - ₹ 5,000.00"].map((price) => (
              <li key={price} className="flex items-center">
                <input type="checkbox" id={price} onChange={() => setSelectedPrice(price)} />
                <label htmlFor={price} className="ml-2 cursor-pointer">{price}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
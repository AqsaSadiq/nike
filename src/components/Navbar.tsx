"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
 
    console.log("Searching for:", searchQuery);
  };

  const navLinks = [
    { href: "/new", label: "New & Featured" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/kids", label: "Kids" },
    { href: "/sale", label: "Sale" },
    { href: "/snkrs", label: "SNKRS" },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/headerLogo.png"
                alt="Nike"
                width={58}
                height={58}
                className="w-auto"
              />
            </Link>
          </div>

    
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

    
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-gray-100 rounded-full">
                <Search className="h-5 w-5 ml-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent py-2 pl-2 pr-4 text-sm focus:outline-none"
                />
              </div>
            </form>
            <button aria-label="Favorites">
              <Link href="/cart">
                <Heart className="h-6 w-6 text-gray-700 hover:text-black" />
              </Link>
              
            </button>
            <button aria-label="Shopping bag">
              <Link href="/cart">
              <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
              </Link>
              
            </button>
          </div>

    
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

 
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-base text-gray-700 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 space-y-3">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-gray-100 rounded-full">
                <Search className="h-5 w-5 ml-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent py-2 pl-2 pr-4 text-sm focus:outline-none w-full"
                />
              </div>
            </form>
            <div className="flex space-x-4">
              <button aria-label="Favorites">
                <Heart className="h-6 w-6 text-gray-700" />
              </button>
              <button aria-label="Shopping bag">
                <ShoppingBag className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
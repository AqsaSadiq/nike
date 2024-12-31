"use client";

import { useState } from "react";
import { products } from "@/lib/products";  
import Sidebar from "@/components/ResponsiveSidebar";  
import ProductGrid from "@/components/ProductGrid"; 
import Header from "@/components/Header";  
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const AllProductsPage = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedKids, setSelectedKids] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesGender = selectedGender ? product.gender === selectedGender : true;
    const matchesKids = selectedKids ? product.kids === selectedKids : true;
    const matchesPrice = selectedPrice ? product.priceRange === selectedPrice : true;
    return matchesGender && matchesKids && matchesPrice;
  });

  return (
    <>
    <Banner />
    <Navbar />
    <div className="max-w-[1200px] mx-auto p-4">
      {/* Header */}
      <Header />

      {/* Filters and Products */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar 
          setSelectedGender={setSelectedGender} 
          setSelectedKids={setSelectedKids} 
          setSelectedPrice={setSelectedPrice} 
        />

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AllProductsPage;
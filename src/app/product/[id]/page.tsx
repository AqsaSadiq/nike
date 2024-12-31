"use client";

import Navbar from "@/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Product } from "@/types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { getProductById } from "@/lib/products";
import Banner from "@/components/Banner";

const ProductPage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (params?.id) {
      const productData = getProductById(params.id as string);
      setProduct(productData || null);
    }
  }, [params?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found!</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:opacity-90"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Banner />
    <Navbar />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-2 mb-6 mt-8 text-gray-500 hover:text-black"
      >
        <span>&larr; Back</span>
      </button>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-[400px] sm:h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-6"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">
              {product.category}
            </p>
           
            <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>

            <p className="text-3xl font-bold text-black mt-4">
              ₹ {product.price.toLocaleString()}
            </p>
          </div>

        {/* Add to Cart Button */}  
        <button   
          className="flex items-center justify-center w-52 h-9 bg-black text-white rounded-full py-2 px-6 text-sm font-normal hover:bg-white hover:border hover:border-black hover:text-black transition duration-300"  
          aria-label="Add to Cart"  
        >  
          <ShoppingCart className="mr-2" />  
          Add to Cart  
        </button>  
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;

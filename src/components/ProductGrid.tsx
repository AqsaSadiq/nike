"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
          <div className="bg-white w-[345px] h-[455px] p-4 cursor-pointer">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={280}
              height={200}
              className="object-cover rounded"
            />
            <span className="text-[15px] font-medium text-[#9E3500]">{product.sale}</span>
            <h3 className="text-[15px] font-medium mt-2">{product.name}</h3>
            <p className="text-sm text-[#757575]">{product.category}</p>
            <p className="text-sm text-[#757575]">{product.colors.join(", ")}</p>
            <p className="text-sm font-medium mt-1">MRP: ₹ {product.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
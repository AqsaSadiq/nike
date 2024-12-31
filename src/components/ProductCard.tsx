import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push(`/product/${product.id}`)}
      className="w-[441px] space-y-3 cursor-pointer"
    >
      <div className="relative w-[441px] h-[441px] bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-normal text-black">{product.name}</h3>
        <p className="text-lg font-normal text-black">₹ {product.price.toLocaleString()}</p>
        <p className="text-lg font-normal text-[#8F8F8F]">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
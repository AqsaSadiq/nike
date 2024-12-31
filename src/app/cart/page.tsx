import React from 'react';
import { Heart, Trash2, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';

const CartPage = () => {
  return (
    <>
    <Banner />
    <Navbar />
    <div className="max-w-6xl mx-auto p-6">
      {/* Free Delivery Banner */}
      <div className="bg-gray-100 p-4 mb-8 flex items-center justify-between">
        <div>
          <p className="font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">Applies to orders of ₹ 14,000.00 or more.</p>
        </div>
        <button className="text-gray-900 font-medium flex items-center">
          View details
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-medium mb-6">Bag</h2>

          {/* Cart Item 1 */}
          <div className="border-t py-6">
            <div className="flex gap-4">
              <Image 
                src="/images/jursey.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={120}
                height={120}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <p className="text-gray-600">Men's Short-Sleeve Running Top</p>
                    <p className="text-gray-600 mt-1">Ashen Slate/Cobalt Bliss</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">Size: L</p>
                      <p className="text-gray-600">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">MRP ₹ 3,895.00</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="border-t py-6">
            <div className="flex gap-4">
              <Image 
                src="/images/shoe1.png"
                alt="Nike Air Max 97 SE"
                width={120}
                height={120}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Nike Air Max 97 SE</h3>
                    <p className="text-gray-600">Men's Shoes</p>
                    <p className="text-gray-600 mt-1">Flat Pewter/Light Bone/Black/White</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">Size: 8</p>
                      <p className="text-gray-600">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">MRP ₹ 16,995.00</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-xl font-medium mb-6">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="border-t pt-4 flex justify-between">
              <p className="font-medium">Total</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full font-medium mt-6">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CartPage;
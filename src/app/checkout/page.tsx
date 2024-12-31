import React from 'react';  
import Image from 'next/image';  
import Link from 'next/link';  
import { ChevronDown } from 'lucide-react';  
import { FaBox, FaMapMarkerAlt } from 'react-icons/fa';  
import { BiMessageAltDetail } from "react-icons/bi";  
import { BsBag } from "react-icons/bs";  

const CheckoutPage = () => {  
  return (  
    <>  
    <header className="bg-white shadow">  
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">  
        {/* Logo */}  
        <Link href="/">  
          <Image  
            src="/images/headerLogo.png"  
            alt="Nike"  
            width={58}  
            height={58}  
            className="w-auto"  
          />  
        </Link>  

        {/* Phone Number */}  
        <div className="text-center">  
          <p className="text-black">000 800 100 9538</p>  
        </div>  

        {/* Icons */}  
        <div className="flex items-center space-x-4">  
          <BiMessageAltDetail className="text-black" />  
          <BsBag className="text-black" />  
        </div>  
      </div>  
    </header>  

    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">  
      {/* Left Column - Form */}  
      <div className="md:col-span-8">  
        
        {/* How would you like to get your order? */}  
        <div className="mb-8">  
          <h2 className="text-xl font-medium mb-4">How would you like to get your order?</h2>  
          <p className="text-sm w-full md:w-96 text-gray-600 mb-6">  
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address...  
            <span className='underline cursor-pointer'>Learn More</span>.  
          </p>  
          <div className="relative mb-4">  
            <FaBox className="absolute left-4 top-3 text-gray-400 w-5 h-5" />  
            <input   
              type="text"  
              placeholder="Deliver It"  
              className="w-full md:w-[50%] pl-12 pr-4 py-3 border border-black rounded-lg"  
            />  
          </div>  
        </div>  

        <div className="mb-8">  
          <h2 className="text-xl font-medium mb-6">Enter your name and address:</h2>  
          <div className="space-y-4">  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
              <input type="text" placeholder="First Name" className="p-3 border rounded-lg" />  
              <input type="text" placeholder="Last Name" className="p-3 border rounded-lg" />  
            </div>  
            <input type="text" placeholder="Address line 1" className="w-full p-3 border rounded-lg" />  
            <input type="text" placeholder="Address line 2" className="w-full p-3 border rounded-lg" />  
            <input type="text" placeholder="Address line 3" className="w-full p-3 border rounded-lg" />  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
              <input type="text" placeholder="Postal Code" className="p-3 border rounded-lg" />  
              <div className="relative">  
                <select className="w-full p-3 border rounded-lg appearance-none bg-white">  
                  <option>Country</option>  
                </select>  
                <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />  
              </div>  
            </div>  
            <div className="flex items-center gap-2">  
              <input type="checkbox" id="updates" className="h-4 w-4" />  
              <label htmlFor="updates" className="text-sm text-gray-600">Save this address to my profile</label>  
            </div>  
          </div>  
        </div>  

        {/* Contact Information */}  
        <div className="mb-8">  
          <h2 className="text-xl font-medium mb-4">WHAT'S YOUR CONTACT INFORMATION?</h2>  
          <div className="space-y-4">  
            <input   
              type="email"  
              placeholder="Email"  
              className="w-full p-3 border rounded-lg"  
            />  
            <input   
              type="tel"  
              placeholder="Phone Number"  
              className="w-full p-3 border rounded-lg"  
            />  
          </div>  
        </div>  

        {/* Additional Information */}  
        <div className="mb-8">  
          <h2 className="text-xl font-medium mb-4">WHAT'S YOUR PAN?</h2>  
          <div className="space-y-2">  
            <input   
              type="text"  
              placeholder="PAN"  
              className="w-full md:w-[50%] p-3 border rounded-lg"  
            />  
            <p className="text-xs text-gray-500">Enter your PAN to enable payment with UPI, Net Banking or local card methods.</p>  
            <div className="flex items-center gap-2">  
              <input type="checkbox" id="savePan" className="h-4 w-4" />  
              <label htmlFor="savePan" className="text-sm text-gray-600">Save PAN details to Nike Profile</label>  
            </div>  
            <div className="flex items-center gap-2">  
              <input type="checkbox" id="consent" className="h-4 w-4" />  
              <label htmlFor="consent" className="text-sm text-gray-600">  
                I have read and consent to eShopWorld processing my information in accordance with the <Link href="/privacy-statement" className="underline">Privacy Statement</Link> and   
                <Link href="/cookie-policy" className="underline"> Cookie Policy</Link>. eShopWorld is a trusted Nike partner.  
              </label>  
            </div>  
            {/* Continue Button */}  
            <button className="w-full md:w-[50%] justify-center flex p-3 bg-[#F5F5F5] text-black rounded-full mt-4">  
              Continue  
            </button>   
          </div>  
        </div>  

        {/* Sections */}  
        <div className="space-y-4">  
          <button className="w-full p-4 border rounded-lg flex justify-between items-center">  
            <span className="font-medium">Delivery</span>  
            <ChevronDown className="w-5 h-5" />  
          </button>  
          <button className="w-full p-4 border rounded-lg flex justify-between items-center">  
            <span className="font-medium">Billing</span>  
            <ChevronDown className="w-5 h-5" />  
          </button>  
          <button className="w-full p-4 border rounded-lg flex justify-between items-center">  
            <span className="font-medium">Payment</span>  
            <ChevronDown className="w-5 h-5" />  
          </button>  
        </div>  
      </div>  

      {/* Right Column - Order Summary */}  
      <div className="md:col-span-4">  
        <div className="sticky top-6">  
          <h2 className="text-xl font-medium mb-6">Order Summary</h2>  
          <div className="space-y-4">  
            {/* Product 1 */}  
            <div className="flex gap-4">  
              <Image   
                src="/images/twelve.png"   
                alt="Nike Dri-FIT"   
                width={100}  
                height={100}  
                className="w-20 h-20 object-cover rounded"  
              />  
              <div>  
                <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>  
                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>  
                <p className="text-sm text-gray-600">Size L</p>  
                <p className="text-sm text-gray-600">Quantity 1</p>  
                <p className="text-sm font-medium mt-1">₹ 3,895.00</p>  
              </div>  
            </div>  

            {/* Product 2 */}  
            <div className="flex gap-4">  
              <Image   
                src="/images/shoe3.png"   
                alt="Nike Dri-FIT"   
                width={100}  
                height={100}  
                className="w-20 h-20 object-cover rounded"  
              />  
              <div>  
                <h3 className="font-medium">Nike Air Max 97 SE</h3>  
                <p className="text-sm text-gray-600">Men's Shoes</p>  
                <p className="text-sm text-gray-600">Size 8</p>  
                <p className="text-sm text-gray-600">Quantity 1</p>  
                <p className="text-sm font-medium mt-1">₹ 16,995.00</p>  
              </div>  
            </div>  

            <div className="border-t pt-4 space-y-4">  
              <div className="flex justify-between">  
                <span className="text-gray-600">Subtotal</span>  
                <span>₹ 20,890.00</span>  
              </div>  
              <div className="flex justify-between">  
                <span className="text-gray-600">Estimated Delivery & Handling</span>  
                <span>Free</span>  
              </div>  
              <div className="flex justify-between font-medium">  
                <span>Total</span>  
                <span>₹ 20,890.00</span>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  

    <footer className="bg-black text-white/80 py-4">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 px-4">  
        {/* Location and Rights */}  
        <div className="flex items-center">  
          <FaMapMarkerAlt className="mr-1" />  
          <p className="mr-4">India</p>  
          <p>© 2023 Nike, Inc. All Rights Reserved</p>  
        </div>  

        {/* Additional Links */}  
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">  
          <Link href="#" className="hover:underline">Guides</Link>  
          <Link href="#" className="hover:underline">Terms of Sale</Link>  
          <Link href="#" className="hover:underline">Terms of Use</Link>  
          <Link href="#" className="hover:underline">Nike Privacy Policy</Link>  
        </div>  

        {/* Payment Methods */}  
        <div className="flex items-center justify-center md:justify-end space-x-2 mt-4 md:mt-0">  
          <Image src="/images/f1.png" alt="Visa" width={40} height={25} />  
          <Image src="/images/f2.png" alt="MasterCard" width={40} height={25} />  
          <Image src="/images/f3.png" alt="American Express" width={40} height={25} />  
          <Image src="/images/f4.png" alt="Discover" width={40} height={25} />  
          <Image src="/images/f5.png" alt="UPI" width={40} height={25} />  
          <Image src="/images/f6.png" alt="Paytm" width={40} height={25} />  
         
        </div>  
      </div>  
    </footer>   
    </>  
  );  
};  

export default CheckoutPage;
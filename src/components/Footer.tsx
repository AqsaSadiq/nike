"use client";  

import Link from 'next/link';  
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';  

const Footer = () => {  
  return (  
    <footer className="bg-black text-white/70 py-8">  
      <div className="max-w-7xl mx-auto px-4">  
        {/* Social Media Links at the Top Right */}  
        <div className="flex justify-center md:justify-end space-x-4 mb-6">  
          <Link href="#">  
            <div className="bg-gray-300 p-2 rounded-full hover:bg-gray-500 transition duration-300">  
              <FaTwitter className="text-lg text-black" />  
            </div>  
          </Link>  
          <Link href="#">  
            <div className="bg-gray-300 p-2 rounded-full hover:bg-gray-500 transition duration-300">  
              <FaFacebookF className="text-lg text-black" />  
            </div>  
          </Link>  
          <Link href="#">  
            <div className="bg-gray-300 p-2 rounded-full hover:bg-gray-500 transition duration-300">  
              <FaYoutube className="text-lg text-black" />  
            </div>  
          </Link>  
          <Link href="#">  
            <div className="bg-gray-300 p-2 rounded-full hover:bg-gray-500 transition duration-300">  
              <FaInstagram className="text-lg text-black" />  
            </div>  
          </Link>  
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">  
          {/* FIND A STORE */}  
          <div>  
            <h4 className="font-bold text-md mb-3">FIND A STORE</h4>  
            <ul className="space-y-2">  
              <li><Link href="/joinus" className="hover:underline">Become A Member</Link></li>  
              <li><Link href="/login" className="hover:underline">Sign Up For Email</Link></li>  
              <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>  
              <li><Link href="#" className="hover:underline">Student Discounts</Link></li>  
            </ul>  
          </div>  

          {/* GET HELP */}  
          <div>  
            <h4 className="font-bold text-md mb-3">GET HELP</h4>  
            <ul className="space-y-2">  
              <li><Link href="/cart" className="hover:underline">Order Status</Link></li>  
              <li><Link href="/cart" className="hover:underline">Delivery</Link></li>  
              <li><Link href="/cart" className="hover:underline">Returns</Link></li>  
              <li><Link href="/help" className="hover:underline">Payment Options</Link></li>  
              <li><Link href="#" className="hover:underline">Contact Us On Nike.com Inquiries</Link></li>  
              <li><Link href="#" className="hover:underline">Contact Us On All Other Inquiries</Link></li>  
            </ul>  
          </div>  

          {/* ABOUT NIKE */}  
          <div>  
            <h4 className="font-bold text-md mb-3">ABOUT NIKE</h4>  
            <ul className="space-y-2">  
              <li><Link href="#" className="hover:underline">News</Link></li>  
              <li><Link href="#" className="hover:underline">Careers</Link></li>  
              <li><Link href="#" className="hover:underline">Investors</Link></li>  
              <li><Link href="#" className="hover:underline">Sustainability</Link></li>  
            </ul>  
          </div>  
        </div>  


        <div className="flex flex-col md:flex-row items-center justify-between text-sm mt-8">  
          <div className="flex items-center">  
            <FaMapMarkerAlt className="mr-1" /> {/* Location Icon */}  
            <p className="mr-2">India</p>  
            <p>© 2023 Nike, Inc. All Rights Reserved</p>  
          </div>  
          {/* Additional Links */}  
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 md:mt-0">  
            <Link href="/cart" className="hover:underline">Guides</Link>  
            <Link href="#" className="hover:underline">Terms of Sale</Link>  
            <Link href="#" className="hover:underline">Terms of Use</Link>  
            <Link href="#" className="hover:underline">Nike Privacy Policy</Link>  
          </div>  
        </div>  
      </div>  
    </footer>  
  );  
};  

export default Footer;
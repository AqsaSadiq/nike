import React from 'react';
import Image from 'next/image';
import { ThumbsUp, ThumbsDown, Search } from 'lucide-react';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HelpPage = () => {
  return (
    <>
    <Banner />
    <Navbar />
    <div className="max-w-6xl mx-auto p-6">
      {/* Search Section */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-6 justify-center text-center">GET HELP</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full text-center p-3 border rounded-lg pr-12"
          />
          <Search className="absolute right-4 top-3 text-center text-gray-400" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - FAQs */}
        <div>
          {/* Payment Options Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            <p className="mb-4 text-gray-700">
              We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <p className="mb-4 text-gray-700">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
            </p>
            <p className="mb-4 text-gray-700">
              If you enter your PIN information at checkout, you'll be able to pay for your order with PayPal or a local credit or debit card.
            </p>
            <p className="mb-4 text-gray-700">
              Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
            </p>
            <div className="flex gap-4 mb-8">
              <button className="bg-black text-white px-6 py-2 rounded-full">JOIN US</button>
              <button className="border border-black px-6 py-2 rounded-full">SHOP NIKE</button>
            </div>

            {/* FAQs Section */}
            <div className="space-y-6">
              <h3 className="font-bold">FAQs</h3>
              <div>
                <h4 className="font-bold mb-2">Does my card need international purchases enabled?</h4>
                <p className="text-gray-700">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                <p className="text-sm text-gray-600 mt-2">Please note, some banks may charge a small transaction fee for international orders.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Can I pay for my order with multiple methods?</h4>
                <p className="text-gray-700">No, payment for Nike orders can't be split between multiple payment methods.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
                <p className="text-gray-700">You can use any accepted credit card to buy for your SNKRS order.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Why don't I see Apple Pay as an option?</h4>
                <p className="text-gray-700">To use Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest iOS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="mt-8 border-t pt-6">
              <p className="text-gray-700 mb-4">Was this answer helpful?</p>
              <div className="flex gap-4 mb-6">
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <ThumbsUp className="w-6 h-6" />
                </button>
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <ThumbsDown className="w-6 h-6" />
                </button>
              </div>
              
              {/* Related Links */}
              <div className="space-y-4">
                <p className="font-bold text-gray-500">RELATED</p>
                <div className="space-y-3">
                  <a href="#" className="block text-black hover:underline">
                    WHAT ARE NIKE'S DELIVERY OPTIONS?
                  </a>
                  <a href="#" className="block text-black hover:underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-8 text-center">CONTACT US</h2>

          {/* Phone Support */}
          <div className="border-b pb-8 mb-8 text-center">
            <Image 
              src="/images/mobile.png"
              alt="Phone" 
              width={100} 
              height={100} 
              className="mx-auto"
            />
            <p className="font-bold text-lg mt-4">080 800 910 0566</p>
            <p className="text-gray-700">Products & Orders: 24 hours a day,</p>
            <p className="text-gray-700">7 days a week</p>
            <p className="text-gray-700 mt-2">Company & All Other Inquiries: 07:30 -</p>
            <p className="text-gray-700">16:30, Monday - Friday</p>
          </div>

          {/* Chat Support */}
          <div className="border-b pb-8 mb-8 text-center">
            <Image 
              src="/images/sms.png"
              alt="Chat" 
              width={100} 
              height={100} 
              className="mx-auto"
            />
            <p className="text-gray-700 mt-4">24 hours a day</p>
            <p className="text-gray-700">7 days a week</p>
          </div>

          {/* Email Support */}
          <div className="border-b pb-8 mb-8 text-center">
            <Image 
              src="/images/mail.png"
              alt="Email" 
              width={100} 
              height={100} 
              className="mx-auto"
            />
            <p className="text-gray-700 mt-4">We'll reply within:</p>
            <p className="text-gray-700">5 business days</p>
          </div>

          {/* Store Locator */}
          <div className="text-center">
            <Image 
              src="/images/map.png"
              alt="Store Locator" 
              width={100} 
              height={100} 
              className="mx-auto"
            />
            <p className="font-bold mt-4">STORE LOCATOR</p>
            <p className="text-gray-700">Find a Nike retail store near you</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default HelpPage;

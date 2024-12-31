"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return(
    <div className="w-full bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-8 text-xs">
                <div className="flex-shrink-0">
                    <Link href= "#" >
                        <Image 
                            src="/images/BannerLogo.png"
                            alt="Banner Logo"
                            width={20}
                            height={20}
                            className="w-7 h-7"
                        />
                    </Link>
                </div>

                <div className="flex items-center space-x-6 text-black">
                    <Link
                        href="/all-products"
                        className="hover:text-black transition-colors"
                    >
                        Find a Store
                    </Link>
                    <span className="h-4 w-px bg-gray-300" />
                    <Link
                        href="/help"
                        className="hover:text-black transition-colors"
                    >
                        Help
                    </Link>
                    <span className="h-4 w-px bg-gray-300" />
                    <Link
                        href="/joinus"
                        className="hover:text-black transition-colors"
                    >
                        Join Us
                    </Link>
                    <span className="h-4 w-px bg-gray-300" />
                    <Link
                        href="/login"
                        className="hover:text-black transition-colors"
                    >
                        Sign In
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner;

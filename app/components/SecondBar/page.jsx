"use client"

import Link from 'next/link';
import Image from 'next/image';

const Secondbar = () => {
  return (
    <div className="bg-[#10623d] text-white py-6 px-10">

      <div className="container mx-auto flex items-center">
        <div>
          <Image
          src="/logo.png"
          width={60}
          height={60}
          alt='logo'
          />
        </div>
        {/* Left Side: Navigation Links */}
        <div className="flex space-x-8">
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>
          <Link href="/reviews" className="hover:text-black">
            Reviews
          </Link>
          <Link href="/gallery" className="hover:text-black">
            Gallery
          </Link>
          <Link href="/about-us" className="hover:text-black">
            About Us
          </Link>
          <Link href="/faqs" className="hover:text-black">
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Secondbar;

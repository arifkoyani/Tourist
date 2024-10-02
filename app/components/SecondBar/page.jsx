'use client';

import Link from 'next/link';
import Image from 'next/image';

const Secondbar = () => {
  return (
    <div className="bg-gradient-to-l from-[#14918b] to-[#0c6478] text-white py-6 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
          />
        </div>

        {/* Left Side: Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/components/blog" className="hover:text-black">
            Blog
          </Link>
          <Link href="/components/ClientReviews" className="hover:text-black">
            Reviews
          </Link>
          <Link href="/components/gallery" className="hover:text-black">
            Gallery
          </Link>
          <Link href="/components/aboutUs" className="hover:text-black">
            About Us
          </Link>
          <Link href="/components/Faqs" className="hover:text-black">
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Secondbar;

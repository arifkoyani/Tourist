'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-[#0b698b] text-[#e6e1ca] py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        {/* Left Side: Phone and Email */}
      

        {/* Center: Tagline */}
        <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#f97316] leading-tight tracking-wide uppercase transition-colors duration-500 hover:text-black animate-pulse">
  Your Trusted Partner in Exceptional Travel Experiences
</h2>


        </div>

        {/* Right Side: Social Links */}
        <div className="flex space-x-4 justify-center">
          <Link href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaTwitter />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </Link>
          <Link href="https://www.instagram.com/travelat.ease?utm_source=qr&igsh=dm1iY2IxZ2lzbWk3" target='_blank' className="hover:text-gray-400">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

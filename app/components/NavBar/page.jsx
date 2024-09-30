'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-[#10623d] text-white py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        {/* Left Side: Phone and Email */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-1">
            <FiPhone />
            <span className="text-[12px]">051-4106110</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiMail />
            <span className="text-[12px]">travelatease.tae@gmail.com</span>
          </div>
        </div>

        {/* Center: Tagline */}
        <div className="text-center">
          <h2 className="text-[12px]">
            YOUR TRUSTED PARTNER IN EXCEPTIONAL TRAVEL EXPERIENCES
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
          <Link href="#" className="hover:text-gray-400">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

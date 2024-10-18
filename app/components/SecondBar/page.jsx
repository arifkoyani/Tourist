'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';


const Secondbar = () => {
  return (
<div className="bg-[#0b698b] text-white py-6 px-4 sm:px-6 md:px-10 shadow-lg shadow-gray-500/80">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex w-fit  mt-2 gap-5 mb-4 md:mb-0">
        <Link href="/">
          <Image
            src="/logoo.png"
            width={90}
            height={60}
            alt="logo"
          />
        </Link>

          <div>
          
        
            <div className='mb-1'>
            <div className="flex items-center space-x-1">
            <FiPhone />
            <span className="text-[12px]">051-4106110</span>
          </div>
            </div>
            <div className='mb-1'>
            <div className="flex items-center space-x-1">
            <FiMail />
            <span className="text-[12px]">travelatease.tae@gmail.com</span>
          </div>
            </div>

            <div>
            <div className="flex items-center space-x-1">
            <FaWhatsapp />
            <span className="text-[12px]">+923350823823</span>
          </div>
            </div>


          </div>
       

        </div>

        {/* Left Side: Navigation Links */}
        <div className="flex  rounded-lg md:space-y-0 md:space-x-8  text-[14px] gap-2">
        <Link href="/" className='hover:bg-[#22c55e] p-1 rounded-md '>
            Home
          </Link>
          <Link href="/components/blog" className='hover:bg-[#22c55e] p-1 rounded-md '>
            Blog
          </Link>
          <Link href="/components/ClientReviews" className='hover:bg-[#22c55e] p-1 rounded-md'>
            Reviews
          </Link>
          <Link href="/components/gallery" className='hover:bg-[#22c55e] p-1 rounded-md '>
            Gallery
          </Link>
          <Link href="/components/aboutUs" className='hover:bg-[#22c55e] p-1 rounded-md '>
            About Us
          </Link>
          <Link href="/components/Faqs" className='hover:bg-[#22c55e] p-1 rounded-md'>
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Secondbar;

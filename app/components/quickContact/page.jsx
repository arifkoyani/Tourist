'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

const QuickContact = () => {
  return (
    <div className="bg-[#10623d] text-white my-20 py-10 h-[250px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]  mx-auto">
        {/* Photo Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-4 gap-2">
            {/* Image 1 */}
            <div className="w-30 h-30 relative">
              <Image src="/hello.jpg" alt="Image 1" width={100} height={100} objectFit="cover" />
            </div>
            {/* Image 2 */}
            <div className="w-30 h-30 relative">
              <Image src="/hello.jpg" alt="Image 2" width={100} height={100} objectFit="cover" />
            </div>
            {/* Image 3 */}
            <div className="w-30 h-30 relative">
              <Image src="/hello.jpg" alt="Image 3" width={100} height={100} objectFit="cover" />
            </div>
            {/* Image 4 */}
            <div className="w-30 h-30 relative">
              <Image src="/hello.jpg" alt="Image 4" width={100} height={100} objectFit="cover" />
            </div>
          </div>
          <Link href="/gallery" className="text-gray-400 mt-4 block">View All...</Link>
        </div>

<div>
  {/* Quick Contact */}


        {/* Connect with us */}
        <div className='flex flex-col'>
        <div >
          <h3 className="text-sm font-bold text-[25px]  mb-4">Quick Contact</h3>
          <p className='font-light text-[12px]'>Mobile: <span className="font-light text-[12px] text-gray-300">+92 3004287493</span></p>
          <p>
            <Link href="mailto:travelpakistan66@gmail.com" className="font-light text-gray-300">travelpakistan66@gmail.com</Link>
          </p>
        </div>
          <h3 className="text-xl font-bold mt-4  mb-2">Connect with us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-300">
              <FaEnvelope className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

</div>
      


      </div>
    </div>
  );
};

export default QuickContact;

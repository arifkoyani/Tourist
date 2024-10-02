'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

const QuickContact = () => {
  return (
    <div className="bg-[#10623d] text-white my-20 py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
        {/* Photo Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {/* Image 1 */}
            <div className="relative w-full h-20 md:h-24">
              <Image src="/vllo.jpg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            {/* Image 2 */}
            <div className="relative w-full h-20 md:h-24">
              <Image src="/maz.jpg" alt="Image 2" layout="fill" objectFit="cover" />
            </div>
            {/* Image 3 */}
            <div className="relative w-full h-20 md:h-24">
              <Image src="/hunza.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            {/* Image 4 */}
            <div className="relative w-full h-20 md:h-24">
              <Image src="/naz.jpg" alt="Image 4" layout="fill" objectFit="cover" />
            </div>
          </div>
          <Link href="/components/gallery" className="text-gray-400 mt-4 block">View All...</Link>
        </div>

        {/* Quick Contact */}
        <div className='flex flex-col'>
          <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
          <p className='font-light text-sm'>
            Mobile: <span className="font-light text-sm text-gray-300">+92 3004287493</span>
          </p>
          <p>
            <Link href="mailto:travelpakistan66@gmail.com" className="font-light text-gray-300">travelpakistan66@gmail.com</Link>
          </p>

          <h3 className="text-lg font-bold mt-4 mb-2">Connect with us</h3>
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
  );
};

export default QuickContact;

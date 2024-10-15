'use client';

import Link from 'next/link';
import { FaQuestionCircle } from 'react-icons/fa'; // Import a relevant icon from react-icons

const WhyUsCard = () => {
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-xl border-[1px] border-[#10623d] overflow-hidden p-6">
      <div className="flex justify-center">
        <div className="bg-[#10623d] rounded-full p-4">
          {/* Replace the Image component with an icon from react-icons */}
          <FaQuestionCircle size={40} color="white" /> {/* Example: Why Us related icon */}
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold italic text-gray-700 mt-4 mb-1">
        Why Us
      </h2>
      <p className="text-center text-gray-600 text-sm">
      We are experts in the travel and tourism sector, supported by a passionate team of skilled young professionals who understand the fundamental principles of the industry. Our unwavering commitment to providing high-quality services guarantees an outstanding experience for our valued clients.
      </p>
      <div className="flex justify-center mt-1">
   
   <Link href="/components/ClientReviews">
   
      <button className="bg-[#10623d] text-[12px] text-white py-1 px-4 rounded-full hover:bg-[#18925b] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Learn More
</button>

</Link>

      </div>
    </div>
  );
};

export default WhyUsCard;

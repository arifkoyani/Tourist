"use client";
import Link from 'next/link';
import { FaConciergeBell } from 'react-icons/fa'; // Importing a service-related icon from react-icons

const ServicesCard = () => {
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-xl border-[1px] border-[#10623d] overflow-hidden p-6">
      <div className="flex justify-center">
        <div className="bg-[#10623d] rounded-full p-4">
          {/* Replace the Image component with an icon from react-icons */}
          <FaConciergeBell size={40} color="white" /> {/* Example: Service-related icon */}
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold italic text-gray-700 mt-4 mb-4">
        Services
      </h2>
      <p className="text-center text-gray-600 text-sm">
        At <span className="font-bold">Pakistan travel & Tours</span>, our personalized tour plans are designed for relaxation, to rejuvenate your energy and to get your precious time spent along with your loved ones in a remarkable and memorable...
      </p>
      <div className="flex justify-center mt-6">
   
   <Link  href="/components/blog">
   
      <button className="bg-[#10623d] text-[12px] text-white py-1 px-4 rounded-full hover:bg-[#18925b] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Learn More
</button>

</Link>


      </div>
    </div>
  );
};

export default ServicesCard;

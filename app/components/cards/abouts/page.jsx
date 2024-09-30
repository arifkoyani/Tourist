'use client';
import { FaInstagram } from 'react-icons/fa';


const AboutUsCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-xl border-[1px] border-[#10623d] p-6">
      <div className="flex justify-center">
        <div className="bg-[#10623d] rounded-full p-4">
          {/* Replace the Image component with an icon from react-icons */}
          <FaInstagram size={40} color="white" /> {/* Example: Instagram icon */}
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold text-gray-700 mt-4 mb-4">
        About Us
      </h2>
      <p className="text-center text-gray-600 text-sm">
        We are a team of enthusiastic young professionals who understand the ethos of tourism trade and are ready to render high-quality services to our valued clients through a range of pleasing, adventurous...
      </p>
      <div className="flex justify-center mt-6">
      <button className="bg-[#10623d] text-[12px] text-white py-1 px-4 rounded-full hover:bg-[#18925b] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Learn More
</button>
      </div>
    </div>
  );
};

export default AboutUsCard;

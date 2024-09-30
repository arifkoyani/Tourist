'use client';
import Image from 'next/image';

const ExplorePakistanCard = () => {
  return (
    <div className="relative w-[350px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
      <div className="relative w-full h-64">
        <Image
          src="/exporepk.jpg" // Replace with the correct image path
          alt="Explore Pakistan Tours"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Explore Pakistan Tours
        </h2>
        <button className="bg-[#10603c] text-white text-[12px] py-1 px-8 rounded hover:bg-[#0d7a49]">
          Click here
        </button>
      </div>
      {/* Inner bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#10603c]"></div>
    </div>
  );
};

export default ExplorePakistanCard;

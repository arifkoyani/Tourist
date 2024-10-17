'use client';
import Image from 'next/image';

const HunzaValleyCard = () => {
  return (
    <div className="relative  mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
      <div className="relative w-full h-64">
        <Image
          src="https://i.ytimg.com/vi/A5kmqftmWjc/maxresdefault.jpg" // Replace with the correct image path
          alt="Hunza Valley Tours"
          width={270}
          height={200}
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Hunza Valley
        </h2>
      
      </div>
      {/* Add bottom border if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#10603c]"></div>
    </div>
  );
};

export default HunzaValleyCard;

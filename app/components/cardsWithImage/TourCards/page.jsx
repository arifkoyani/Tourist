'use client';
import Image from 'next/image';

const TourCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10">
      
      {/* Kalash Valley Tours */}
      <div className=" mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
        <div className="relative w-full h-64 border-b-2 border-black">
          <Image
            src="/chitral.jpg" // Replace with the correct image path
            alt="Kalash Valley Tours"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Kalash Valley Tours
          </h2>
        
        </div>
      </div>

      {/* Karakoram Highway Tours */}
      <div className=" mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
        <div className="relative w-full h-64 border-b-2 border-black">
          <Image
            src="/highway.webp" // Replace with the correct image path
            alt="Karakoram Highway Tours"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Karakoram Highway Tours
          </h2>
          
        </div>
      </div>

      {/* Man & Mountain Tours */}
      <div className=" mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-4">
        <div className="relative w-full h-64 border-b-2 border-black">
          <Image
            src="/mountain.png" // Replace with the correct image path
            alt="Man & Mountain Tours"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Man & Mountain Tours
          </h2>
        
        </div>
      </div>
      
    </div>
  );
};

export default TourCards;

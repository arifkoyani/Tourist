"use client";
import Image from "next/image";
import Link from "next/link";


const ChilamFestival = () => {
  return (
    <div className="bg-white  border border-gray-200 rounded-md p-6 shadow-sm  mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src="https://www.natureadventureclub.pk/wp-content/uploads/2023/03/chilam-1-600x438.jpg" // Replace with the actual image path or URL
          alt="K2 Base Camp Trek"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mt-1">
      Chilam Joshi Festival
      </h2>

    

      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 mb-4">
      Chilam Joshi Festival (2024-25) – 15 Days Chilam Joshi festival is one of the top cultural fes
        <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
        <Link href="/components/BookNow/pages/HunzaAndSkardu" target="_blank">
        
          More info
        </Link>
        </span>
      </p>

      {/* Divider */}
      <hr className="my-4" />

      {/* Book Now Button */}

      <Link 
      href="https://wa.me/+923350823823" target="_blank"
      >
      
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
        BOOK NOW
      </button>

      </Link>

    </div>
  );
};

export default ChilamFestival;

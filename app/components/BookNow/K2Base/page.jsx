"use client";
import Image from "next/image";
import Link from "next/link";


const K2BaseCampTrek = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src="/k2.jpg" // Replace with the actual image path or URL
          alt="K2 Base Camp Trek"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mt-16">
        K2 Base Camp Trek
      </h2>

      {/* Price and Rating */}
      {/* <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-700">Price per person from</span>
        <div className="flex items-center space-x-1">
          <FaThumbsUp className="text-gray-700" />
          <span className="text-sm text-gray-700">10 / 10</span>
          <span className="text-xl font-bold text-gray-800">US$ 2,090</span>
        </div>
      </div> */}

      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 mb-4">
        K2 Base Camp Trek (2024-25) – 21 days <br />
        K2 base camp trek is the most popular trekking holiday for{" "}
        <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
          More info
        </span>
      </p>

      {/* Divider */}
      <hr className="my-4" />

      {/* Book Now Button */}

      <Link href="/components/BookNow/pages/k2base">
      
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
        BOOK NOW
      </button>

      </Link>

    </div>
  );
};

export default K2BaseCampTrek;

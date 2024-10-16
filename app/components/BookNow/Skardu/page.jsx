"use client";
import Image from "next/image";
import Link from "next/link";


const SkarduShigarGhanche = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src="https://www.apricottours.pk/wp-content/uploads/2017/03/airport-gilgit-baltistan-3.jpg" // Replace with the actual image path or URL
          alt="K2 Base Camp Trek"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mt-1">
      Skardu, Shigar, Ghanche and Kharmang (6 Days)
      </h2>

    

      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 mb-4">
      Itinerary Code: AT 164 Duration: 6 Days Mode of Transport: Air Travel (Flight) Day 1 Fly to Skardu
        <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
        <Link href="/components/BookNow/pages/skardushigar" target="_blank">
        
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

export default SkarduShigarGhanche;

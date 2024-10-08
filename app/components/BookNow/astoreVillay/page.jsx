"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

const AstoreFairyMeadows = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src="/astoree.jpg" // Replace with actual image path
          alt="Astore Valley & Fairy Meadows"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Astore Valley & Fairy Meadows (5 Days)
      </h2>

      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 mb-4">
        Itinerary Code: AT 194 <br />
        Duration: 5 Days <br />
        Mode of Transport: Land Travel <br />
        Day 1 Departure from Islamabad{" "}
        <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
          More info
          <FaInfoCircle className="ml-1" />
        </span>
      </p>

      {/* Divider */}
      <hr className="my-4" />

      {/* Book Now Button */}
      <Link href="/components/BookNow/pages/astorevillage">
      
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
        BOOK NOW
      </button>

      </Link>

    </div>
  );
};

export default AstoreFairyMeadows;

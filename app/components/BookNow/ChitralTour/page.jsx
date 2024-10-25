"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

const ChitralTour = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full  h-48 mb-2">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Meadows_of_Chitral_Gol_National_Park%3B_Tahsin_Shah_03.jpg/1200px-Meadows_of_Chitral_Gol_National_Park%3B_Tahsin_Shah_03.jpg" // Replace with actual image path
          alt="Chitral – The Living Heritage of the Kalash Community"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">
        Chitral – The Living Heritage of the Kalash Community (6 Days)
      </h2>

      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 ">
        Duration: 6 Days <br />
        Mode of Transport: Land Travel <br />
        Day 1 Departure from Islamabad{" "}
        <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
          <Link href="/components/BookNow/pages/ChitralTour" target="-blank">
            More info
          </Link>
          <FaInfoCircle className="ml-1" />
        </span>
      </p>

      {/* Divider */}
      <hr className="my-1" />

      {/* Book Now Button */}
      <Link href="https://wa.me/+923350823823" target="_blank">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2  rounded-md w-full">
          BOOK NOW
        </button>
      </Link>
    </div>
  );
};

export default ChitralTour;

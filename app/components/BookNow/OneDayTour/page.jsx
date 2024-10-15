"use client";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

const OneDayTour = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src="https://www.apricottours.pk/wp-content/uploads/2024/04/shimshal-chafchingol-chapchingol-6.png" // replace this with the actual image path
          alt="Skardu & Hunza"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">
  Murree Taxila &quot;old mussem&quot;, Lahore (1 day Tours)
</h2>


      {/* Itinerary Information */}
      <p className="text-sm text-gray-700 mb-4">
  Duration: 1 Days <br />
  Mode of Transport: Land Travel <br />
  Day 1 Pickup and departure fr{" "}
  <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
   <Link href="/components/BookNow/pages/OnedayTour" target="_blank">

    More info
   </Link>
    <FaInfoCircle className="ml-1" />
  </span>
</p>


      {/* Divider */}

      {/* Book Now Button */}

      <Link href="https://wa.me/+923350823823" target="_blank" >
      
    
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
        BOOK NOW
      </button>
      </Link>
    </div>
  );
};

export default OneDayTour;

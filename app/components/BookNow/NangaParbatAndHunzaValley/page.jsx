import Image from 'next/image';
import Link from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';

const TourCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src="/nanga.jpeg" // replace this with the actual image path
          alt="Nanga Parbat Base Camp and Hunza Valley"
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Nanga Parbat Base Camp and Hunza Valley (13 Days)
        </h2>

        {/* Itinerary Information */}
        <p className="text-sm text-gray-700 mb-4">
          Nanga Parbat Base Camp and Hunza Valley (2024-25) – 13 Days Nanga Parbat Trek and Hunza Valley{" "}
          <span className="text-orange-500 font-medium hover:underline inline-flex items-center">
            More info
            <FaInfoCircle className="ml-1" />
          </span>
        </p>

        {/* Divider */}
        <hr className="my-4" />

        {/* Book Now Button */}

        <Link href="/components/BookNow/pages/NangaParbat">
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full">
          BOOK NOW
        </button>

        </Link>

      </div>
    </div>
  );
};

export default TourCard;

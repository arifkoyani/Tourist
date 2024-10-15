'use client';
import Image from 'next/image';

const Indroduce = () => {
  return (
    <div className="flex flex-col bg-[#e6e1ca]  py-[50px] px-4 md:py-[200px] md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 font-serif text-[#004b91]">
        Welcome to Travel at Ease
        </h1>
        <p className="text-[12px] md:text-sm text-black">
          Pakistan boasts an extraordinary blend of natural beauty, where its landscapes range from serene beaches along the Makran Coast to the expansive Thar Desert. The country offers a stunning array of natural wonders, with its plains flourishing in greenery and its towering peaks, such as K2 and Nanga Parbat, standing proudly against the sky. Pakistan&apos;s historical heritage is equally rich, with ancient archaeological treasures like Mohenjo-Daro, a UNESCO World Heritage Site that offers a window into the Indus Valley Civilization, and Taxila, a relic of the Buddhist era. The grandeur of the Mughal era can still be seen in the form of awe-inspiring tombs, mosques, and forts scattered across the land. Cities like Lahore, with its Mughal architectural marvels, and Islamabad, the modern capital, present a juxtaposition of history and contemporary life. Smaller towns like Hunza and Skardu preserve the essence of traditional Pakistani culture, while Karachi pulsates with urban dynamism. A journey through Pakistan is a journey through breathtaking landscapes and a rich historical legacy, leaving visitors with unforgettable memories.
        </p>
      </div>
      <div className="w-full md:w-1/2 h-full relative mt-8 md:mt-0">
        <Image
          src="/cover.jpg"
          width={600}
          height={300}
          alt="Service Image"
          className="rounded-md shadow-lg border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Indroduce;

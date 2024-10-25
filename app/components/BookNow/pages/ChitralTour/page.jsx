"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import GlitchButton from "../../../whatsapp/page";

const ChitralTour = () => {
  return (
    <>
      <div>
        <div>
        
          <div className="w-full bg-[#e6e1ca] flex justify-center pt-5 h-screen mx-auto p-1 relative">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={50}
              className="w-[70%] h-full"
            >
              <div className="relative w-full h-screen">
                <Image
                  src="https://prestinetravels.com/wp-content/uploads/2023/03/LAKES-OF-CHITRAL4-1.jpg"
                  layout="fill"
                  objectFit="cover"
                   alt="Chitral Scenery"
                />
               <p className="legend">Chitral-Valley</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chitral_Museum_-_panoramio_(1).jpg/512px-Chitral_Museum_-_panoramio_(1).jpg"
                  alt="Chitral Scenery"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Chitral Museum</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Meadows_of_Chitral_Gol_National_Park%3B_Tahsin_Shah_03.jpg/1200px-Meadows_of_Chitral_Gol_National_Park%3B_Tahsin_Shah_03.jpg"
                  alt="Khunjerab Pass"
                  layout="fill"
                  objectFit="cover"
                />
               <p className="legend">Chitral-Valley</p>
              </div>


              <div className="relative w-full h-screen">
                <Image
                  src="https://pakistanadventurous.com/wp-content/uploads/2017/01/Chitral-Valley-1800x844.jpg"
                  layout="fill"
                  objectFit="cover"
                   alt="Chitral Scenery"
                />
                <p className="legend">Chitral-Valley</p>
              </div>

              
              <div className="relative w-full h-screen">
                <Image
                  src="https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1674901981/blogs/ovsgdgnrqr3tximwwftc.jpg"
                  layout="fill"
                  objectFit="cover"
                   alt="Chitral Scenery"
                />
                <p className="legend">Chitral-Valley</p>
              </div>
            </Carousel>
          </div>


          <span className="flex justify-center text-5xl font-bold p-10 bg-[#e6e1ca]">
            <h6 className="text-black px-4 ">
              Chitral & Kalash Valley Tour (2024-25) – 5 Days
            </h6>
          </span>

          <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl pt-32 mx-auto mb-6">
            {/* General Section */}
            <div className="flex justify-center items-center mb-4">
              <div className="bg-orange-500 h-6 w-6 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
            </div>

            <p className="text-lg text-gray-700 mb-4">
  Embark on a unique journey to uncover the hidden treasures of
  Chitral and the Kalash Valley, a region rich in culture and
  natural beauty. This tour provides an intimate glimpse into one of
  Pakistan&apos;s most stunning and culturally vibrant areas, where
  ancient traditions seamlessly blend with breathtaking landscapes.
</p>

<p className="text-lg text-gray-700 mb-4">
  Start your adventure with a trek through Chitral&apos;s enchanting
  scenery, featuring rolling hills adorned with traditional
  villages, majestic snow-capped peaks, and shimmering glaciers.
  Dive deep into the local culture as you explore historic sites and
  gain insights into the customs and beliefs of the region.
</p>

            <p className="text-lg text-gray-700 mb-4">
              The highlight of your journey will be a visit to the Kalash
              Valley, where you can immerse yourself in a way of life that has
              remained largely unchanged for centuries. Engage with the
              warm-hearted Kalash people, discovering their distinctive beliefs
              and customs. Participate in their traditional festivals and
              ceremonies, and appreciate their intricate clothing and ancient
              spiritual practices, offering a fascinating window into a unique
              culture.
            </p>

            {/* Itinerary */}
            <div className="flex justify-center items-center mb-4">
              <div className="bg-orange-500 h-6 w-6 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Itinerary</h2>
            </div>

            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700">
                <strong>Day 1: Islamabad - Dir - Ayun</strong> - Morning drive
                from Islamabad to Dir. On the way, lunch at a suitable place.
                Continue traveling to Ayun. Arrive and transfer to your hotel.
                Overnight at the hotel in Ayun.
              </li>
              <li className="text-gray-700">
                <strong>Day 2: Ayun - Bamboret (Kalash Valley)</strong> - Explore
                the valley and its surroundings, immersing in local culture.
              </li>
              <li className="text-gray-700">
                <strong>Day 3: Bamboret - Birir Valley - Chitral</strong> - Travel
                through the valleys and stay overnight in Chitral.
              </li>
              <li className="text-gray-700">
                <strong>Day 4: Chitral</strong> - Discover the historic city,
                visiting Chitral Fort and Shahi Mosque.
              </li>
              <li className="text-gray-700">
                <strong>Day 5: Chitral - Dir - Swat</strong> - Drive back through
                scenic routes, stopping at Dir and reaching Swat.
              </li>
            </ul>
            <div className="mt-12">

            </div>

          <GlitchButton />

          </div>

        </div>
      </div>
    </>
  );
};

export default ChitralTour;

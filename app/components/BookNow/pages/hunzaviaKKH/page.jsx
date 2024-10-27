"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import GlitchButton from "../../../whatsapp/page";
const HunzaViaKKH = () => {
  return (
    <>
      <div>
        <div>
        <span className="flex justify-center text-5xl font-bold p-10 bg-[#e6e1ca]">
        </span>
          <div className="w-full bg-[#e6e1ca] flex justify-center pt-5 h-screen mx-auto p-1 relative">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={20}
              className="w-[70%] h-full"
            >
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/peaks-2.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet The World</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/passu-3.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet The World</p>
              </div>
              {/* Image 1 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/khunjerab-4.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet The World</p>
              </div>

              {/* Image 2 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/karimabad.jpg" // Replace with the correct image path
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Find The Difference</p>
              </div>

              {/* Image 3 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/baltit-8.jpg" // Replace with the correct image path
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Discover The Nature</p>
              </div>

              {/* Image 4 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/attabad-tunnel-1.jpg"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Tour Pakistan</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/attabad-tunnel-3.jpg"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Tour Pakistan</p>
              </div>
            </Carousel>
          </div>


          <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl pt-32 mx-auto mb-6">
  {/* General Section */}
  <div className="flex justify-center items-center mb-4">
    <div className="bg-orange-500 h-6 w-6 mr-3"></div>
    <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
  </div>

  {/* Itinerary Code and Duration */}
  <div className="mb-4">
    <p className="text-lg text-gray-700">
    </p>
    <p className="text-lg text-gray-700">
      <strong>Duration:</strong> 7 Days
    </p>
    <p className="text-lg text-gray-700">
      <strong>Mode of Transport:</strong> Land Travel
    </p>
  </div>

  {/* Itinerary */}
  <div className="space-y-6">
    {/* Day 1 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Departure from Islamabad (early morning)</li>
        <li className="text-gray-700">Journey through Mansehra, Shinkiari, Battagram on Karakoram Highway (KKH)</li>
        <li className="text-gray-700">Crossing through Indus River and passing through Besham, Dasu and Diamer-Bhasha dam sites</li>
        <li className="text-gray-700">Stops at Tata Pani (hot spring), Raikot Bridge, Nanga Parbat peak view point</li>
        <li className="text-gray-700">Check-in and rest at hotel in Karimabad (Hunza)</li>
        <li className="text-gray-700">Night stay in Karimabad</li>
      </ul>
    </div>

    {/* Day 2 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Visit to Baltit Fort (900+ years old)</li>
        <li className="text-gray-700">Excursion/Hike to Duikar (view sunset on white peaks)</li>
        <li className="text-gray-700">Visit to Eagle’s nest</li>
        <li className="text-gray-700">Night stay in Karimabad</li>
      </ul>
    </div>

    {/* Day 3 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Departure for Pak-China Border (Khunjerab Pass)</li>
        <li className="text-gray-700">Travel along Attabad lake, Passu Catheral/Cones, Batura glacier</li>
        <li className="text-gray-700">Enter Khunjerab National Park, view wildlife habitats</li>
        <li className="text-gray-700">Picnic lunch at Pak-China Border</li>
        <li className="text-gray-700">Night stay in Karimabad</li>
      </ul>
    </div>

    {/* Day 4 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 4</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Trip to Altit Fort (700+ years old)</li>
        <li className="text-gray-700">Walk in Hunza, visit snow-capped peaks</li>
        <li className="text-gray-700">Visit Hunza De Café – famous for walnut cake (optional)</li>
        <li className="text-gray-700">Night stay in Karimabad</li>
      </ul>
    </div>

    {/* Day 5 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 5</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Visit to Aliabad market</li>
        <li className="text-gray-700">Free-roaming in Karimabad</li>
        <li className="text-gray-700">Night stay in Karimabad</li>
      </ul>
    </div>

    {/* Day 6 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 6</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Drive to Gilgit, rest at Rakaposhi view point</li>
        <li className="text-gray-700">Visit of Gilgit Bazaar, Buddha Rock Carving near Kargah stream</li>
        <li className="text-gray-700">Night stay in Gilgit</li>
      </ul>
    </div>

    {/* Day 7 */}
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Day 7</h3>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Departure for Islamabad</li>
        <li className="text-gray-700">Arrival and drop in Islamabad</li>
        <li className="text-gray-700">Dream your journey 😉</li>
      </ul>
    </div>
  </div>
  <div>


            <GlitchButton />
      
</div>
</div>



        </div>
      </div>
        
    

    </>
  );
};

export default HunzaViaKKH ;

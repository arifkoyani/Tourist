"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import GlitchButton from "../../../whatsapp/page";
const IslamabadKhanpur = () => {
  return (
    <>
      <div>
        <div>
        <span className="flex justify-center text-5xl font-bold p-10 bg-[#e6e1ca]">
        <h1 className="text-[#118485] px-4 ">

        Islamabad, Khanpur, Ayubia and Murree (3 Days)
        </h1>
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/taxila-museum232322.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet New World</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/taxila-museum.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet New World</p>
              </div>
              {/* Image 1 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/faisal-mosque.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet New World</p>
              </div>

              {/* Image 2 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/taxila-sirkap-3.jpg" // Replace with the correct image path
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Find Difference</p>
              </div>

              {/* Image 3 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/skardu-buddha-rock.jpg" // Replace with the correct image path
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Discover Nature</p>
              </div>

              {/* Image 4 */}
              <div className="relative w-full h-screen">
                <Image
                  src="/islamabd.jpg"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Tour Pakistan</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/khanpur-dam-lake-diving-3.jpg"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Tour Pakistan</p>
              </div>


              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/murree-kpk-1.jpg"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Tour Pakistan</p>
              </div>
            </Carousel>
          </div>

        </div>
      </div>

      <div className="bg-[#e6e1ca] text-[12px] py-10 px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h5 className="text-3xl font-bold text-gray-800">
          Islamabad, Khanpur, Ayubia and Murree (3 Days)
          </h5>
          <p className="text-gray-600 mt-2">Itinerary Overview</p>
        </div>
        <div>



        </div>
        <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* General Section */}
  <div className="flex justify-center items-center mb-4">
    <div className="bg-orange-500 h-6 w-6 mr-3"></div>
    <h2 className="text-2xl font-bold text-gray-800">General</h2>
  </div>

  {/* Itinerary Code and Duration */}
  <div className="mb-4 text-center">
    <p className="text-lg text-gray-700">
      <strong>Itinerary Code:</strong> AT 199
    </p>
    <p className="text-lg text-gray-700">
      <strong>Duration:</strong> 3 Days
    </p>
    <p className="text-lg text-gray-700">
      <strong>Mode of Transport:</strong> Land Travel
    </p>
  </div>

  {/* Day 1 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 1</h3>
    <p className="text-gray-700">
      Departure from Islamabad (early morning)<br />
      Visit Taxila Museum<br />
      Departure for Khanpur Dam<br />
      Boating or cliff Diving at Khanpur Dam<br />
      Return to Islamabad<br />
      Visit to Faisal Mosque and Pir Sohawa (Monal)<br />
      Night Stay in Islamabad
    </p>
  </div>

  {/* Day 2 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 2</h3>
    <p className="text-gray-700">
      Departure for Ayubia<br />
      Drive through the Margalla Hills<br />
      Stop at Kashmir point for tea<br />
      Chairlifts in Ayubia<br />
      Night Stay in Murree
    </p>
  </div>

  {/* Day 3 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 3</h3>
    <p className="text-gray-700">
      Day for Murree<br />
      Visit to lower Patriata<br />
      Departure for Islamabad<br />
      Drop off in Islamabad<br />
      Dream Your Journey 😉
    </p>
  </div>
  <GlitchButton />

</div>




        
     


      </div>
    </>
  );
};

export default IslamabadKhanpur;

"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import GlitchButton from "../../../whatsapp/page";
const BaturaGlacier = () => {
  return (
    <>
      <div>
        <div>
        <span className="flex justify-center text-5xl font-bold p-10 bg-[#e6e1ca]">
        <h6 className="text-black px-4 ">
        Batura Glacier is world’s 7th longest non-polar glacier and Pakistan’s 4th longest glacier.
        </h6>
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
                  src="https://i.pinimg.com/564x/e8/7d/e2/e87de21bd111d975c3f7431bfa15e93a.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet The World</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://i.pinimg.com/564x/cd/e7/60/cde760970175e9801f5a1addb05f1ba9.jpg" // Replace with the correct image path
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
                  src="https://i.pinimg.com/564x/7c/fa/41/7cfa41fc0f8616e63933beccab41c40a.jpg" // Replace with the correct image path
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/Deosai-Plain-plateau-baltistan-karakoram-west-4.jpg" // Replace with the correct image path
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Find The Difference</p>
              </div>

              {/* Image 3 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/skardu-buddha-rock.jpg" // Replace with the correct image path
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Discover The Nature</p>
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/ghanche-7.jpg"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Tour Pakistan</p>
              </div>
            </Carousel>
          </div>


<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* General Section */}
  <div className="flex justify-center items-center mb-4 py-10">
    <div className="bg-orange-500 h-6 w-6 mr-3"></div>
    <h2 className="text-2xl font-bold text-gray-800"> Itinerary Overview</h2>
  </div>

  {/* Batura Glacier Description */}
  <p className="text-lg text-gray-700 text-center mb-6">
    Batura Glacier is the world’s 7th longest non-polar glacier and Pakistan’s 4th longest glacier.
  </p>

  {/* Itinerary */}
  {/* Day 01 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 01</h3>
    <p className="text-gray-700">
      Arrive to Islamabad. Hotel.
    </p>
  </div>

  {/* Day 02 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 02</h3>
    <p className="text-gray-700">
      Fly to Gilgit or Drive to Chilas in case of flight cancellation. Hotel.
    </p>
  </div>

  {/* Day 03 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 03</h3>
    <p className="text-gray-700">
      Drive to Passu either from Gilgit or Chilas. Hotel.
    </p>
  </div>

  {/* Day 04 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 04</h3>
    <p className="text-gray-700">
      Trek to Yunzben. Tent.
    </p>
  </div>

  {/* Day 05 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 05</h3>
    <p className="text-gray-700">
      Trek to Ujhoupirt. Tent.
    </p>
  </div>

  {/* Day 06 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 06</h3>
    <p className="text-gray-700">
      Trek to Yashpirt. Tent.
    </p>
  </div>

  {/* Day 07 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 07</h3>
    <p className="text-gray-700">
      Trek to Gutshism. Tent.
    </p>
  </div>

  {/* Day 08 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 08</h3>
    <p className="text-gray-700">
      Free day. Tent.
    </p>
  </div>

  {/* Day 09 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 09</h3>
    <p className="text-gray-700">
      Trek to Yashpirt. Tent.
    </p>
  </div>

  {/* Day 10 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 10</h3>
    <p className="text-gray-700">
      Trek to Yunzben. Tent.
    </p>
  </div>

  {/* Day 11 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 11</h3>
    <p className="text-gray-700">
      Trek to KKH and drive to Hunza. Hotel.
    </p>
  </div>

  {/* Day 12 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 12</h3>
    <p className="text-gray-700">
      Free day. Hotel.
    </p>
  </div>

  {/* Day 13 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 13</h3>
    <p className="text-gray-700">
      Drive to Gilgit. Hotel.
    </p>
  </div>

  {/* Day 14 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 14</h3>
    <p className="text-gray-700">
      Fly to Islamabad or drive to Chilas in case of flight cancellation. Hotel.
    </p>
  </div>

  {/* Day 15 */}
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-900 mb-2">Day 15</h3>
    <p className="text-gray-700">
      Free day or complete road journey from Chilas to Islamabad. Hotel.
    </p>
  </div>
  <span>
            <GlitchButton />
          </span>
</div>

</div>
        </div>
      </div>
        
    

    </>
  );
};

export default BaturaGlacier ;

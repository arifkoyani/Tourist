'use client';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const ImageCarousel = () => {
  return (
    <div className="w-full h-screen mx-auto p-4 relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        className="w-full h-full"
      >
        {/* Image 1 */}
        <div className="relative w-full h-screen">
          <Image
            
            src="/company.jpg" // Replace with the correct image path
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
            src="/pak-china-scaled.jpg" // Replace with the correct image path
            alt="Image 2"
            layout="fill"
            objectFit="cover"
          />
          <p className="legend">Find Difference</p>
        </div>

        {/* Image 3 */}
        <div className="relative w-full h-screen">
          <Image
            src="/kalash_valley.jpg" // Replace with the correct image path
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
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

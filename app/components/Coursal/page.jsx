'use client';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const ImageCarousel = () => {
  return (
    <div>
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
            <div className="relative w-full h-screen">
              <Image
                src="/company.jpg" // Replace with the correct image path
                // Replace with the correct image path
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Meet The World</p>
            </div>

            {/* <div className="relative w-full h-screen">
              <Image
                src="https://the.ismaili/sites/default/files/styles/carousel_banner/public/image_003.jpg?itok=7lJ_zsmr" // Replace with the correct image path
                // Replace with the correct image path
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Meet New World</p>
            </div> */}
            {/* Image 1 */}
            <div className="relative w-full h-screen">
              <Image
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a8/43/f7/caption.jpg?w=1400&h=-1&s=1" // Replace with the correct image path
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
                src="/pak-china-scaled.jpg" // Replace with the correct image path
                alt="Image 2"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Find The Difference</p>
            </div>

            <div className="relative w-full h-screen">
              <Image
                src="https://images.unsplash.com/photo-1633595726913-68e037dff159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the correct image path
                alt="Image 2"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Find Difference</p>
            </div>

            {/* Image 3 */}
            <div className="relative w-full h-screen">
              <Image
                src="/astoree.jpg" // Replace with the correct image path
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
                src="https://images.unsplash.com/photo-1587547131116-a0655a526190?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 4"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Tour Pakistan</p>
            </div>
            <div className="relative w-full h-screen">
              <Image
                src="https://lh3.googleusercontent.com/ci/AL18g_SHvOLFwp3RUWGU0L-ra_CcD3D8bqrIExhfO2VtVxpK3LVofSCnZCfGeg9W7v8vuubKg3XLVq5k=s1200"
                alt="Image 4"
                layout="fill"
                objectFit="cover"
              />
              <p className="legend">Tour Pakistan</p>
            </div>
          </Carousel>
        </div>
      </div>
  );
};

export default ImageCarousel;

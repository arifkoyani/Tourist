"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import GlitchButton from "../../../whatsapp/page";
const ChilamJoshi = () => {
  return (
    <>
      <div>
        <div>
        <span className="flex justify-center text-5xl font-bold p-10 bg-[#e6e1ca]">
        <h6 className="text-black px-4 ">
        Chilam Joshi Festival (2024-25) – 15 Days
        </h6>
        </span>
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
                  src="https://trangoadventure.com/wp-content/uploads/2018/09/kelash-1200x675.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet New World</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://trangoadventure.com/wp-content/uploads/2018/10/5569a66ce194b-1200x900.jpg" // Replace with the correct image path
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/khunjerab-4.jpg" // Replace with the correct image path
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/karimabad.jpg" // Replace with the correct image path
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Find Difference</p>
              </div>

              {/* Image 3 */}
              <div className="relative w-full h-screen">
                <Image
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/baltit-8.jpg" // Replace with the correct image path
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Discover Nature</p>
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
    <h2 className="text-2xl font-bold text-gray-800">General</h2>
  </div>

  {/* Itinerary Code and Duration */}
  <div className="mb-4">
    <p className="text-lg text-gray-700">
    Chilam Joshi festival is one of the top cultural festivals of Pakistan. Kalasha tribe celebrates many festivals around the year. The three main Kalash Festivals are Chilam Joshi (spring festival), Choimus (winter festival) and Uchal (summer festival). The spring festival of Chilam Joshi is an amazing cultural experience in the Hindukush mountain ranges. UNESCO listed Kalash culture as “Intangible Cultural Heritage” in November 2018. The decision was announced during the 13th session of UNESCO’s Intergovernmental Committee meeting organised in Mauritius.
    </p>
  </div>
  <>
  <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Highlights Section */}
  <div className="flex justify-center items-center mb-4">
    <div className="bg-orange-500 h-6 w-6 mr-3"></div>
    <h2 className="text-2xl font-bold text-gray-800">Highlights</h2>
  </div>

  <ul className="list-disc list-inside space-y-2">
    {/* Kalash Highlights */}
    <li className="text-gray-700">Experience the spring festival of ethnic minority community of Kalash</li>
    <li className="text-gray-700">Participate and dance to the tunes of Kalasha music</li>
    <li className="text-gray-700">Enjoy Kalasha and Pakistani cuisine</li>
    <li className="text-gray-700">Hear stories from Kalasha community members including men and women</li>
    <li className="text-gray-700">Juniper, Oak, and Pine forest in Kalash</li>
    <li className="text-gray-700">View of hundreds of peaks including Tirich Mir (7,708m) in the Hindukush Range</li>
    <li className="text-gray-700">Rivers (Kunar, Dir, Chitral), tributaries, and streams</li>
    <li className="text-gray-700">Malakand pass, Lowari Pass (3,118m) or Lowari Tunnel (10.4 kms)</li>
    <li className="text-gray-700">Valleys of Khyber including Dir, Chitral, and Kalash</li>
    <li className="text-gray-700">Views of forts (Malakand, Nagar, Ayun & Chitral) and Mosques (Shahi Masjid)</li>
    <li className="text-gray-700">Churchil Picket, Malakand</li>

    {/* Hunza Highlights */}
    <li className="text-gray-700">Experience the culture of ethnic minority communities of Hunza</li>
    <li className="text-gray-700">Participate and dance to the tunes of Hunza drums</li>
    <li className="text-gray-700">Enjoy Hunzai and Pakistani cuisine</li>
    <li className="text-gray-700">Opportunity to interact with Hunza's community members including men, women, and children</li>
    <li className="text-gray-700">View of hundreds of peaks including Rakaposhi (7,788m), Passu Sar (7,478m), and Ultar Sar (7,388m) in the Karakoram Range</li>
    <li className="text-gray-700">Rivers (Hunza, Nagar, Gilgit, Indus, Kunhar), tributaries, and streams</li>
    <li className="text-gray-700">Babusar Pass (4,173m), Khunjerab Pass (4,733m), and Attabad Tunnel (7km)</li>
    <li className="text-gray-700">Valleys of northern Pakistan including Hunza, Nagar, Naltar, Besham/Kaghan, and Naran</li>
    <li className="text-gray-700">Lakes including Attabad, Lulusar, Borith, Shandur, Khalti, Phandar, and Batura</li>
    <li className="text-gray-700">Glaciers including Bualtar, Passu, Batura, and Hussaini</li>
    <li className="text-gray-700">Khunjerab National Park</li>
    <li className="text-gray-700">Sightseeing of forts (Altit and Baltit)</li>
    <li className="text-gray-700">Bazaars of Karimabad, Aliabad, and Naran</li>
    <li className="text-gray-700">Karakoram Highway and Ancient Silk Route</li>
    <li className="text-gray-700">Drive through the towns of Haripur, Abbottabad, Mansehra</li>
    <li className="text-gray-700">Sightseeing in Islamabad & Rawalpindi</li>
    <li className="text-gray-700">Make new friends</li>
    <li className="text-gray-700">Discounted culture travel</li>
  </ul>
</div>

<>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
<h1>All Days activity in festival tour</h1>

  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 01: Arrive at Islamabad International Airport, Islamabad</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On the first day of this great adventure we will start by exploring Islamabad in the afternoon. We will visit Heritage Museum to understand and explore the culture of multi nations living in Pakistan. Afterwards we will have lunch and go ahead to explore Pakistan Museum. Later, we will visit Faisal Mosque, the famous landmark of the city and then continue to drive towards the highest view point of Islamabad (Pir Sohawa/Daman e Koh). We will also explore Super Market and after a taste of traditional food, we will call it a day after having a scoop of ice cream from a famous ice cream shop.
    </p>
    
    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 540 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Chateau Royale (see pictures), Prestige Residence (see pictures), or equivalent standard partner hotel (depends on occupancy) in Islamabad.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

<div>


<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 02: Drive to Swat Valley</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      This day we will set towards Swat, a beautiful hill station in the Khyber-Pakhtunkhwa Province, formerly known as NWFP. We will drive on the newly constructed motorway that has shortened the journey from Islamabad to Swat. Swat was a former princely state and also a center of Buddhist Civilization centuries ago. We will explore the white palace, archaeological sites of ancient Buddhist civilization, and the bazar.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 975 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Shelton's Rezidor (see pictures), PTDC Motel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Swat.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>
<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 03: Drive to Chitral</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      Today we will set off from Swat to Chitral. We will travel through the Lowari Tunnel, which is about 10.4 kms long and connects Dir and Chitral. Before the construction of the tunnel, passengers traveled via Lowari Pass, and the Chitral Region was disconnected from the rest of the country for 6 months. We will reach Ayun, a village close to the Kalasha Tribes, and a beautiful valley to explore. Our stay will be at the Ayun Fort, known for its biological gardens and stunning bird’s-eye view of the valley and river. We will spend the night at Ayun Fort.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 1,050 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Pamir Inn (see pictures), Tirich Mir View Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Chitral.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>
<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 04: Drive to Rumbur Valley to experience Chilam Joshi Festival</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      Today we will go to Rumbur Valley, one of the main villages of the Kalasha Tribe, to experience the Chilam Joshi Festival. This is one of the main festivals of the Kalasha Tribe, celebrated to welcome spring in the region. We will walk to the town center to experience the unique culture of the Kalasha people. For lunch, we will have the opportunity to eat in a local house and enjoy traditional Kalasha cuisine. In the evening, we will drive to Bumburet for an overnight stay.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 1,100 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at PTDC Motel (see pictures) or equivalent standard partner hotel (depends on occupancy) in Kalash.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>
</div>

<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 05: Explore Bumburet Valley, Kalash</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will start exploring the Bumburet Valley. We will visit the local museum, the Kalasha Graveyard, and the Town Centre. Later, we will join the mega festival as all the tribes gather in Bumburet. There will be dancing, photography, and interactions with the Kalasha Tribe to experience this unique culture firsthand. Afterward, we will travel to Chitral and stay overnight at Pamir Hotel alongside the Chitral River.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 1,100 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Pamir Inn (see pictures), Tirich Mir View Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Chitral.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>
<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 06: Explore Chitral</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      Today we will explore Chitral Town. We will visit Chitral Fort, the capital of the ancient kingdom of Chitral, which served as the seat of power for the region. Later, we will visit the Shahi Mosque of Chitral located within the premises of the fort. Following that, we will travel to Birmoglasht, situated on a mountaintop, offering a bird’s-eye view of the valley. We might even spot the indigenous Markhor in this area. We will enjoy lunch at Birmoglasht. If there is a polo match happening in Chitral Town, we will visit the polo ground to experience the thrilling event. Later, we will explore the Chitral Bazaar and return to the hotel for dinner.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 1,494 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Pamir Inn (see pictures), Tirich Mir View Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Chitral.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>
<div>
<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 07: Drive to Mastuj Village</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will travel from Chitral Town to Mastuj, the main village of Yarkhud Valley. This valley borders Gilgit-Baltistan on one side and Afghanistan on the other. We will pass many villages along the river gorge. Upon arrival in Mastuj, we will take a walk around the village to meet and greet the local community. We will stay in Mastuj for the night.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 2,359 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at PTDC Motel Mastuj (see pictures) or equivalent standard partner hotel (depends on occupancy) in Mastuj.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>

<div>
<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 08: Travel towards Ghizer District via Shandur Pass</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will travel from Chitral to Gupis, also known as Khalti, which is part of the Ghizer District in the Gilgit-Baltistan Region. Our journey will take us through the Shandur Pass and the villages of Laspur. We will stop briefly at Shandur to experience the high alpine Shandur Lake and the Shandur Polo Ground, the highest polo ground in the world. The drive will take us through the pastures and meadows of Barsit, Langar, and Teru. We will also make a short stop at Phandar Valley, known for its lush green landscape and beautiful still lake. Upon arrival at Khalti, we will check in to the hotel and later explore the nearby villages and take photographs at Khalti Lake. We will enjoy Trout Fish as one of our cuisines on this day.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 2,217 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at PTDC Motel (see pictures) or equivalent standard partner hotel (depends on occupancy) in Gupis.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>
<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 09: Drive to Gilgit</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will travel from Khalti to Gilgit, the capital city of the Gilgit-Baltistan Region. Upon arrival, we will check in to the hotel and rest. After lunch, we will visit Kargah Nala and the famous Buddha Carving. Later, we will explore the Gilgit Bazaar and taste the local delicacy “Mantu” (Dumplings). We will spend a relaxing night in Gilgit before starting our journey to the “Land of Legends” – Hunza.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 1,500 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Riveria Hotel Gilgit (see pictures), MarcoPolo Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Gilgit.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>

<div>
<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 10: Drive to Hunza Valley</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      This day will be exciting as we will travel to Hunza, a region offering beautiful scenery, glaciers, towering mountains, lakes, rich culture, and heritage. We will also see the 8th wonder of the world, the Karakoram Highway. During our journey along this highway, we will view the old silk route used for trade centuries ago. We will stop at Rakaposhi View Point, enjoying a cup of tea or coffee while taking in the breeze from the "Mother of Mist." As we proceed to Hunza, we will see magnificent peaks through the windows. Upon arrival in Karimabad, the stunning view of Rakaposhi will awe every nature lover. We will visit Baltit Fort, Altit Fort, explore the Karimabad Market, and later head to the famous Eagle’s Nest View Point to experience the sunset over the mighty peaks.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 2,500 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Hilltop Hotel Hunza (see pictures), World Roof Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Hunza.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>


<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 11: Explore Hunza</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will travel to Northern Hunza, where we will enjoy boating on the pristine Atabad Lake. The glacial water and the lake’s vibrant color against the barren mountains will leave you in awe. We will continue traveling further, passing through many villages in Upper Hunza and entering Khunjerab National Park at Deh, experiencing an unforgettable journey on the Karakoram Highway. On our return, we will stay at Passu for the night.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 2,700 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Sarai Silk Route (see pictures), Passu Ambassador Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Passu.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>

<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 12: Explore Passu Village</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will explore Passu Village, starting with a walk around the village, experiencing the local community working in the fields. We will visit a local house to observe the architecture and daily life of the Wakhi Community of Pakistan. We will visit Borith Lake, an alpine lake with stunning colors, and take a walk on the Hussaini Suspension Bridge for a thrilling mountain experience. Later, we will travel to Hopper Valley, known for its beauty, and hike to the Bualtar Glacier. In the evening, we will enjoy dances and music from the people of Hunza.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 4,693 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Sarai Silk Route (see pictures), Passu Ambassador Hotel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Passu.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>

<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 13: Drive to Besham from Hunza</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will travel from Hunza to Besham, another beautiful hill station offering stunning views. We will make short stops along the way to enjoy the scenery.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 2,409 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Besham Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation in Besham</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing tent/cottage at Besham Hilton Hotel (see pictures), PTDC Motel (see pictures), or equivalent standard partner hotel (depends on occupancy) in Besham.
      </p>
    </div>

    {/* Besham Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals in Besham</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>

  {/* Accommodation and Meals in Naran */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    {/* Naran Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation in Naran</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Parhena Cottages (see pictures), Hotel deManchi (see pictures), or equivalent standard partner hotel (depends on occupancy) in Naran.
      </p>
    </div>

    {/* Naran Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals in Naran</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>
</div>
<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 14: Drive towards Islamabad</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      On this day, we will travel back to Islamabad. Along the way, we will visit the Taxila Museum and explore ancient Buddhist sites from the Gandhara Civilization. After our visit to Taxila, we will continue to Islamabad, which is just a 45-minute drive from Taxila. We will have our farewell dinner at the Monal Restaurant, overlooking the city.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 540 m</p>
    </div>
  </div>

  {/* Accommodation and Meals */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Accommodation */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Accommodation</h4>
      <p className="mt-2 text-gray-200">
        Twin-sharing room at Chateau Royale (see pictures), Prestige Residence (see pictures), or equivalent standard partner hotel (depends on occupancy) in Islamabad.
      </p>
    </div>

    {/* Meals */}
    <div className="bg-green-600 text-white p-4 rounded-lg">
      <h4 className="font-bold text-lg">Meals</h4>
      <p className="mt-2 text-gray-200">
        Breakfast, lunch, and dinner + tea/coffee and snacks.
      </p>
    </div>
  </div>
</div>

</div>

<div>

<div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto mb-6">
  {/* Day Heading */}
  <div className="bg-orange-500 text-white p-3 rounded-t-lg mb-4">
    <h3 className="text-xl font-bold">Day 15: Fly to Home Country</h3>
  </div>

  {/* On this Day Section */}
  <div className="mb-6">
    <h4 className="font-bold text-lg mb-2">On this Day</h4>
    <p className="text-gray-700 mb-4">
      Every good thing must come to an end. This is the day when we finally bid farewell to our guests and fellow travelers. The tour ends today, as everyone prepares for their journey back home.
    </p>

    {/* GPS Data */}
    <div className="mb-4">
      <h4 className="font-bold text-lg mb-2">GPS Data</h4>
      <p className="text-gray-700">Altitude: 540 m</p>
    </div>
  </div>

  {/* Farewell Message */}
  <div className="bg-green-600 text-white p-4 rounded-lg">
    <h4 className="font-bold text-lg">Farewell and Safe Travels</h4>
    <p className="mt-2 text-gray-200">
      We hope you had a wonderful experience, and we look forward to welcoming you again on another adventure!
    </p>
  </div>
</div>

</div>


</>
  </>


            <GlitchButton />
      

</div>



        </div>
      </div>
        
    

    </>
  );
};

export default ChilamJoshi ;

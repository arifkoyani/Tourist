"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import GlitchButton from "../../../whatsapp/page";
const K2BaseCampTrek = () => {
  return (
    <>
      <div>
        <div>
        <span className="flex justify-center text-5xl font-bold p-10 bg-[#e6e1ca]">
        <h1 className="text-[#118485] px-4 ">K2 Base Camp Trek</h1>
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/Nagar-Hopar-glacier-1.jpg" // Replace with the correct image path
                  // Replace with the correct image path
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
                <p className="legend">Meet New World</p>
              </div>

              <div className="relative w-full h-screen">
                <Image
                  src="https://the.ismaili/sites/default/files/styles/carousel_banner/public/image_003.jpg?itok=7lJ_zsmr" // Replace with the correct image path
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/skardu-shangrila-resort-skardu-12.jpg" // Replace with the correct image path
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/Deosai-Plain-plateau-baltistan-karakoram-west-4.jpg" // Replace with the correct image path
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
                  src="https://www.apricottours.pk/wp-content/uploads/2017/03/ghanche-7.jpg"
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
          <h1 className="text-3xl font-bold text-gray-800">
            K2 Base Camp Trek - 2024
          </h1>
          <p className="text-gray-600 mt-2">Itinerary Overview</p>
        </div>

        {/* Itinerary */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Day 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">
  Day 01: Arrive at Islamabad International Airport, Islamabad
</h2>

            <p className="text-sm text-gray-600 mt-2">Altitude: 540 m</p>

            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                Our guide(s) will receive you at the airport and transfer you to
                the hotel.
              </li>
              <li>Rest and recover from your long journey.</li>
            </ul>

            <h3 className="text-md font-semibold mt-4">Pickup Information</h3>
            <p className="text-gray-700">
  Our guide will hold orange placards with the company logo and your
  name. Ensure to give us your flight details at least five days
  before arrival. Our staff will meet you at the gates of
  international arrivals unless you&apos;re taking a connecting flight
  within Pakistan.
</p>


            <p className="text-gray-700 mt-2">
              After lunch and some rest, participants arriving in the morning
              will meet around 6pm for a briefing and any remaining payments at
              our office followed by dinner. If you arrive late, the briefing
              will be managed in Skardu.
            </p>
          </div>

          {/* Day 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 02: Fly to Skardu, Karakoram
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 2,498 m</p>

            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                Take a spectacular morning flight from Islamabad to Skardu.
                Enjoy potential views of Nanga Parbat during the flight.
              </li>
              <li>
                After arrival, the day is free for you to explore or relax.
              </li>
            </ul>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">
              Twin-sharing room at Concordia Motel, Mountain Lodge, or a similar
              standard hotel (depending on occupancy) in Skardu.
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + tea/coffee and snacks.
            </p>
          </div>

          {/* Day 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 03: Spend free day in Skardu
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 2,498 m</p>

            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                Visit Kharpocho Fort, offering a splendid view of the Indus
                River and Skardu town.
              </li>
              <li>
                Optionally, visit Sadpara Lake and enjoy free shopping time in
                Skardu Bazaar.
              </li>
            </ul>

            <p className="text-gray-700 mt-2">
              During sightseeing, our staff will handle further government
              documentation required in Skardu. This process may take one or two
              days, but contingency days are planned towards the end of the trek
              to accommodate any delays.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">
              Twin-sharing room at Concordia Motel, Mountain Lodge, or a similar
              standard hotel (depending on occupancy) in Skardu.
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + tea/coffee and snacks.
            </p>
          </div>

          {/* More Days can be added similarly */}

          {/* Day 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 04: Drive to Askole village
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,015 m</p>

            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                The participants will begin the jeep safari towards Daso,
                passing through Shigar valley.
              </li>
              <li>
                The journey follows the sides of the Braldu River, extending to
                Askole, the last village on the route.
              </li>
              <li>
                Participants may start walking before arriving in Askole,
                depending on road conditions. The total travel time is between
                six to eight hours.
              </li>
            </ul>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 5 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 05: Trek from Askole to Jhola via the snout of Biafo Glacier
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Altitude: 3,103 m | Distance: 20 km | Time: 5-8 hours
            </p>

            <p className="text-gray-700 mt-2">
              After the completion of necessary supplies and equipment, the
              porters will load up for the trek to Jhola. The valley is the
              gateway to Biafo Glacier, which flows over fifty kilometers from
              Hispar La to Braldu. Participants will experience moraine walking
              as they cross the snout of the glacier, descending to the lunch
              spot beside the Korofon River.
            </p>

            <p className="text-gray-700 mt-2">
              The route will take us to the confluence of the Braldu and Domordo
              rivers. The former trail is not used for the trek; instead, a
              newer trail will lead us upstream where participants will cross
              the river by bridge. After crossing, participants will descend to
              the edge of the Braldu River and follow the riverbank to reach the
              camp at Jhola.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 6 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 06: Trek from Jhola to Paiju following the Braldu River
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Altitude: 3,418 m | Distance: 19.8 km | Time: 6-7 hours
            </p>

            <p className="text-gray-700 mt-2">
              On this day of our K2 base camp trek, participants will follow the
              Braldu Gorge, trekking along the bank of the Braldu River. Along
              the way, participants will witness the astonishing rock formations
              of Trango Tower and Cathedral Peak. It is important to protect
              yourself from possible sunburns, as the walking conditions can be
              dry and hot.
            </p>

            <p className="text-gray-700 mt-2">
              Several streams from glaciers flow down into the valley, and
              depending on the water levels, participants may need to use river
              crossing shoes. On a clear day, participants may spot the snout of
              the Baltoro Glacier. The day will end by climbing away from the
              river to reach the camp at Paiju, which is the last camp with
              trees for a while.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for the
              trek, appetizer (soup/fried-snacks) before dinner, and
              dessert/fruits after dinner.
            </p>
          </div>

          {/* Day 7 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 07: Acclimatize and Rest in Paiju
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,418 m</p>

            <p className="text-gray-700 mt-2">
              The participants will spend the day at Paiju Camp for
              acclimatization and rest. Meanwhile, the porters will take their
              time to bake bread for the next week on the glacier. Participants
              may also take an acclimatization walk towards Paiju Peak base camp
              if they feel ready.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for the
              trek, appetizer (soup/fried-snacks) before dinner, and
              dessert/fruits after dinner.
            </p>
          </div>

          {/* Day 8 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 08: Trek from Paiju to Khoburtse
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,788 m</p>
            <p className="text-sm text-gray-600">Distance: 14.7 km</p>
            <p className="text-sm text-gray-600">Time: 5-7 hours</p>

            <p className="text-gray-700 mt-2">
              On this day, the trek will become more challenging, but the
              stunning scenery will make it worth the effort. As participants
              ascend onto the snout of the Baltoro Glacier, the trail will
              feature continuous ups and downs on the glacial moraine. Though
              the trail is generally safe, caution is advised.
            </p>

            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                Witness breathtaking views of Trango Tower and Uli Biaho along
                the way.
              </li>
              <li>
                Cross the glacier to Liligo and follow a rocky trail along the
                edge of the Baltoro Glacier to reach Khoburtse.
              </li>
            </ul>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for the
              trek, appetizer (soup/fried-snacks) before dinner, and
              dessert/fruits after dinner.
            </p>
          </div>

          {/* Day 9 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 09: Cross small glaciers and walk to Urdukus
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,905 m</p>
            <p className="text-sm text-gray-600">Distance: 6.4 km</p>
            <p className="text-sm text-gray-600">Time: 4-6 hours</p>

            <p className="text-gray-700 mt-2">
              On this day, participants will cross two small glaciers before
              arriving at Urdukus. Along the way, the majestic Trango Towers
              will come into view, providing a spectacular backdrop. The camp
              for the night will be set near the army camp, approximately 100m
              above the glacier.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for the
              trek, appetizer (soup/fried-snacks) before dinner, and
              dessert/fruits after dinner.
            </p>
          </div>
          {/* Day 10 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 10: Trek to Goro II, the junction of the Baltoro glaciers and
              Younghusband
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 4,285 m</p>
            <p className="text-sm text-gray-600">Distance: 11.9 km</p>
            <p className="text-sm text-gray-600">Time: 6-8 hours</p>

            <p className="text-gray-700 mt-2">
              On this day, participants will trek through the middle of the
              glacier, following the medial moraine. To the south, Masherbrum
              (7,821m) will be visible. The trail involves climbing up and down
              the rocky moraine, and the participants will pass by massive ice
              seracs.
            </p>

            <p className="text-gray-700 mt-2">
              This will be the first camp night on Baltoro Glacier at Goro II,
              where the Baltoro Glacier meets the Younghusband Glacier. The
              temperature can drop significantly during the night. Masherbrum
              and Muztagh Tower will be revealed for a breathtaking view.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for the
              trek, appetizer (soup/fried-snacks) before dinner, and
              dessert/fruits after dinner.
            </p>
          </div>

          {/* Day 11 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 11: Trek to Concordia through a rocky moraine
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 4,512 m</p>
            <p className="text-sm text-gray-600">Distance: 11.7 km</p>
            <p className="text-sm text-gray-600">Time: 5-7 hours</p>

            <p className="text-gray-700 mt-2">
              On this day, participants will trek towards Concordia,
              continuously walking up the rocky moraine. As they move ahead,
              more and more high snowcapped peaks will become visible. This day
              offers the culmination for sighting the majestic K2. Other
              towering peaks such as Broad Peak, Mitre Peak, Gasherbrum, and Sia
              Kangri will also be visible.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for the
              trek, appetizer (soup/fried-snacks) before dinner, and
              dessert/fruits after dinner.
            </p>
          </div>

          {/* Day 12 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 12: Trek to Broad Peak BC, Gilkey Memorial and K2 Base Camp
              (optional)
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Return time K2 BC (5,155m) + Gilkey (5,230m) + Broad Peak
              (4,844m): 10-12 hours
            </p>
            <p className="text-sm text-gray-600">
              Return time Broad Peak BC (4,844m): 6-7 hours
            </p>

            <p className="text-gray-700 mt-2">
              Today offers the opportunity to trek up the Godwin-Austen glacier
              to the Art Gilkey Memorial (an American geologist and mountaineer)
              just before K2 Base Camp. This is a long, but spectacular day.
            </p>

            <p className="text-gray-700 mt-2">
              We will depart early, crossing glaciers onto a faint trail leading
              towards K2. As we follow the glacier, K2 will grow larger with
              each step. Broad Peak rises to the right, and after about 3 hours,
              we will pass Broad Peak Base Camp, where there is an option to
              turn back. We usually stop here for lunch. For those continuing,
              K2 will tower above as we approach it.
            </p>

            <p className="text-gray-700 mt-2">
              Just before reaching base camp, we will visit the Art Gilkey
              Memorial, a place of remembrance for those whose lives K2 has
              claimed. The memorial is located amidst a boulder-strewn
              landscape, and a short scramble leads to plaques and engraved tin
              plates attached to a rocky outcrop at the foot of K2. We will have
              lunch here before retracing our steps back to Concordia.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 13 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 13: Trek to Goro I/Biango
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 4,010 m</p>
            <p className="text-sm text-gray-600">Distance: 15.9 km</p>
            <p className="text-sm text-gray-600">Time: 6-7 hours</p>

            <p className="text-gray-700 mt-2">
              On this day of the K2 base camp trek, the participants will leave
              the current camp and head back towards Goro I. The trek on this
              day will be relatively easier as it will involve descending.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 14 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 14: Trek to Khoburtse with views of Trango Towers
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,788 m</p>
            <p className="text-sm text-gray-600">Distance: 13.8 km</p>
            <p className="text-sm text-gray-600">Time: 5-7 hours</p>

            <p className="text-gray-700 mt-2">
              On this day, the participants will trek to the Khoburtse campsite,
              following the same trail down via the glacier to Goro I. Along the
              way, they will be treated to magnificent views of Trango Towers.
              Although the route is the same, the experience will offer
              different perspectives and sights compared to the trek up.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 15 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 15: Trek back to camp Paiju
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,418 m</p>
            <p className="text-sm text-gray-600">Distance: 14.7 km</p>
            <p className="text-sm text-gray-600">Time: 5-7 hours</p>

            <p className="text-gray-700 mt-2">
              On this day of the K2 base camp trek, participants will walk down
              from the side of the glacier via Liligo. This will be the last
              area where they shift their trail from the moraine to more stable
              ground. After a short break, participants will finally experience
              the comfort of walking amongst trees and enjoy their stay at the
              Paiju campsite.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 16 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 16: Trek to Jhola campsite
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 3,418 m</p>
            <p className="text-sm text-gray-600">Distance: 19.8 km</p>
            <p className="text-sm text-gray-600">Time: 5-7 hours</p>

            <p className="text-gray-700 mt-2">
              Walking on this day will be relatively easier as participants
              follow the same trail back through the Braldu gorge. Some river
              crossings may be required along the way, but the day’s trek will
              end with camp set up at Jhola.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">Camping in twin-sharing dome tents.</p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, dinner + snacks (dry fruit/chocolate) for trek,
              appetizer (soup/fried-snacks) before dinner, and dessert/fruits
              after dinner.
            </p>
          </div>

          {/* Day 17 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 17: Trek to Askole and drive to Skardu town
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 2,498 m</p>
            <p className="text-sm text-gray-600">
              Distance: 20 km trek + 127 km drive
            </p>
            <p className="text-sm text-gray-600">
              Time: 5-7 hours trek + 6 hours drive
            </p>

            <p className="text-gray-700 mt-2">
              Participants will complete the trek back to Askole village,
              following the river to the bridge. After lunch, they will get a
              chance to rest their feet and be transferred by jeep to Skardu.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">
              Twin-sharing room at Concordia Motel, Mountain Lodge, or
              equivalent standard partner hotel in Skardu (depending on
              occupancy).
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, and dinner + tea/coffee and snacks.
            </p>
          </div>

          {/* Day 18 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 18: Contingency days for trek delays
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 538 m</p>

            <p className="text-gray-700 mt-2">
              This day is reserved for any potential delays that may occur
              during the trek. Delays can be caused by factors like roadblocks
              or weather conditions. Guests can use this time for sightseeing in
              Skardu.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">
              Twin-sharing room at Concordia Motel, Mountain Lodge, or
              equivalent standard partner hotel in Skardu (depending on
              occupancy).
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, and dinner + tea/coffee and snacks.
            </p>
          </div>

          {/* Day 19 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 19: Fly to Islamabad
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 538 m</p>

            <p className="text-gray-700 mt-2">
  On this day, the participants will take a flight from Skardu
  airport to Islamabad airport. After arrival, you&apos;ll have ample
  time to relax at the hotel in Islamabad.
</p>


            <p className="text-gray-700 mt-2">
              Domestic flights can sometimes be canceled due to weather
              conditions. In case of a cancellation, participants will drive to
              Chilas for an overnight stay. The drive takes about 8 to 10 hours.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">
              Twin-sharing room at Chateau Royale, Prestige Residence, or an
              equivalent standard partner hotel in Islamabad (depending on
              occupancy).
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, and dinner + tea/coffee and snacks.
            </p>
          </div>

          {/* Day 20 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 20: Contingency day for flight cancellation
            </h2>
            <p className="text-sm text-gray-600 mt-2">Altitude: 538 m</p>

            <p className="text-gray-700 mt-2">
              This day is allocated for any potential delays in case the
              domestic flight does not operate the previous day. Guests will
              depart early morning from Chilas to Islamabad, which can take up
              to ten hours. However, it will be a free day for sightseeing in
              Islamabad if participants make it to the city via the domestic
              flight.
            </p>

            <h3 className="text-md font-semibold mt-4">Accommodation</h3>
            <p className="text-gray-700">
              Twin-sharing room at Chateau Royale, Prestige Residence, or an
              equivalent standard partner hotel in Islamabad (depending on
              occupancy).
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">
              Breakfast, lunch, and dinner + tea/coffee and snacks.
            </p>
          </div>

          {/* Day 21 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Day 21: Fly to home country
            </h2>

            <p className="text-gray-700 mt-2">
              Our staff will transfer all our guests to the airport according to
              their respective departure timings. The checkout time for all our
              partner hotels is 12pm.
            </p>

            <h3 className="text-md font-semibold mt-4">Meals</h3>
            <p className="text-gray-700">Breakfast included.</p>
          </div>

          {/* Important Notes Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-t-md">
              Important Notes
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-orange-600 mb-4">
                Why Register Now?
              </h2>

              <ul className="list-decimal list-inside space-y-4">
  <li>
    <strong>Early Bird Discount:</strong> The given prices for the
    holiday are limited-time discount offers and are subject to
    change.{" "}
    <span className="font-semibold">Service providers</span>{" "}
    including (but not limited to) airlines and hotels{" "}
    <span className="font-semibold">increase prices</span> in
    peak-season. Early reservations cost us less than peak-season.
  </li>
  <li>
    <strong>Limited Space in Peak Months:</strong> The peak months
    in the peak season attract the highest number of international
    guests and are therefore sold out earlier. We have restricted
    one group size to a maximum of 12 travelers. We are taking
    registrations on a{" "}
    <span className="font-semibold">
      &quot;first-come, first-served&quot;
    </span>{" "}
    basis.
  </li>
  <li>
    <strong>Limited Flight Seats:</strong> Domestic flight seats
    to the Karakorams and Himalayas are sold out way ahead of time
    because there are only two daily flights during peak season.
    Among other things, the deposit is used to book domestic
    flights for you in advance.
  </li>
  <li>
    <strong>Pay Balance after arrival in Pakistan:</strong> We
    appreciate that paying the final balance for your trip may
    cause concern. Our policy is to only receive your final
    balance once you arrive in Pakistan. The only payment before
    arrival is the deposit.
  </li>
  <li>
    <strong>Pay Minimum Deposit:</strong> The deposits for the
    holiday are also{" "}
    <span className="font-semibold">early-bird discounts </span>{" "}
    and automatically change according to the late deposit
    schedule above. The same dates apply to next season&apos;s
    deposits.
  </li>
</ul>

            </div>
          </div>
          <span>
            <GlitchButton />
          </span>
        </div>
      </div>
    </>
  );
};

export default K2BaseCampTrek;

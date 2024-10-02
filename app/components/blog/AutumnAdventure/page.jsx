'use client';
import { FaMapMarkerAlt, FaLeaf, FaCamera } from 'react-icons/fa';
import Image from 'next/image';

const AutumnAdventure = () => {
  return (
    <div className="container  bg-[#128887] mx-auto py-12 px-4">
      <h1 className="text-center text-4xl font-bold  mb-8">Autumn Adventure Travel Guide</h1>

      {/* Section: Hunza Valley */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/414933704_870419881760509_7937458457191957951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGv1Lty3pfr9E2RK-prSxgk-9YGO0tEefb71gY7S0R59mKbuYfFj4w--ye8b-jvNiECIIzcK-M_LT08wH8XVXeg&_nc_ohc=oXikPPyW0BwQ7kNvgF2Z_Pf&_nc_ht=scontent.fisb29-1.fna&_nc_gid=Aw_zJGi_kRz8jYlOzpqiqN9&oh=00_AYC5uRfS3Ccmu6F1LNk28544KesJTKaFPiztzKOdPzJaaA&oe=670356B5" // Replace with actual image path
            width={600}
            height={400}
            alt="Hunza Valley"
            className="rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">1. Hunza Valley</h2>
            <ul className="space-y-4">
              <li><FaMapMarkerAlt className="inline mr-2" /> <strong>Eagle’s Nest:</strong> Trek to the viewpoint for breathtaking panoramic views of the surrounding peaks, especially stunning with autumn foliage.</li>
              <li><FaMapMarkerAlt className="inline mr-2" /> <strong>Passu Cones:</strong> Hike around the iconic Passu Cones, where the fall colors create a picturesque landscape.</li>
              <li><FaMapMarkerAlt className="inline mr-2" /> <strong>Attabad Lake:</strong> Try boating or kayaking in the crystal-clear waters, surrounded by vibrant autumn hues. Don’t forget your camera for those Insta-worthy shots!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Nagar Valley */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/393811798_820541280081703_8204051059744672323_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHgf-kSZYBXZdbj9GTzB9JGxO2otzWVCCPE7ai3NZUIIwmXGeQKvMpWUlKHWOMoPyxXiv3nv3sPJF6LWymRdhbm&_nc_ohc=GOh8rlh997IQ7kNvgFgJ5fM&_nc_ht=scontent.fisb29-1.fna&_nc_gid=AWVhF3AKv3VQBcJ41MTzxEs&oh=00_AYDeqz7VrurEHl1o6IwrNQp7Krf-aB2zBbd9P7fZD8njwQ&oe=670359F2" // Replace with actual image path
            width={600}
            height={400}
            alt="Nagar Valley"
            className="rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">2. Nagar Valley</h2>
            <ul className="space-y-4">
              <li><FaLeaf className="inline mr-2" /> <strong>Husseini Suspension Bridge:</strong> Experience the thrill of walking across one of the most beautiful suspension bridges in the world, offering stunning views of the valley below.</li>
              <li><FaLeaf className="inline mr-2" /> <strong>Nagar Khas Fort:</strong> Explore this ancient fort with its historical significance and panoramic views of the autumn landscape.</li>
              <li><FaLeaf className="inline mr-2" /> <strong>Trekking Trails:</strong> Discover lesser-known trails that take you through lush orchards and quaint villages, showcasing the rich colors of autumn.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Skardu */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="https://scontent.fisb29-1.fna.fbcdn.net/v/t45.1600-4/408518489_6581789680224_4709567433761460988_n.png?stp=c0.383.1283.1283a_cp0_dst-jpg_q90_s960x960_spS444&_nc_cat=106&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeEjsAKRXA23E_am0QDTXnuQUrUvJMrgyGdStS8kyuDIZyumCnTmCqtP7KKDU31wkNRViD64NRd27WzoDvrAbvOM&_nc_ohc=w3XhOa7Hmb8Q7kNvgF6SHX4&_nc_ht=scontent.fisb29-1.fna&_nc_gid=AHGordrqXw1SeHdW6zMZP8H&oh=00_AYAiTpLLe4VkmxkchEE9MTWC6L8B0lB82RoVvSBSz4TLZw&oe=6703520E" // Replace with actual image path
            width={600}
            height={400}
            alt="Skardu"
            className="rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">3. Skardu</h2>
            <ul className="space-y-4">
              <li><FaMapMarkerAlt className="inline mr-2" /> <strong>Shangrila Resort:</strong> Visit this stunning resort and enjoy a hike around Upper Kachura Lake, where the reflections of the fall foliage in the water are breathtaking.</li>
              <li><FaMapMarkerAlt className="inline mr-2" /> <strong>Deosai National Park:</strong> Embark on a jeep safari or hike in this high-altitude park, famous for its vast plateaus and diverse wildlife, with the added beauty of autumn colors.</li>
              <li><FaMapMarkerAlt className="inline mr-2" /> <strong>Skardu Valley Trekking:</strong> Try out short treks in the Skardu region, such as the trek to Kachura Lake, offering mesmerizing views of the landscape bathed in autumn shades.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Baltoro Glacier */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="https://scontent.fisb29-1.fna.fbcdn.net/v/t39.30808-6/458715207_2784266768407357_1200713020088707664_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeGdK_rPPZCPuwrRw7FZJGdDHlsjODLhqK8eWyM4MuGor6WdBL7YM2P9aIj7Vycycc9ikbwc0vRkeO1pNgZ1kc-s&_nc_ohc=VNbzMZz1TMQQ7kNvgEAah1e&_nc_ht=scontent.fisb29-1.fna&_nc_gid=AsVJp_o2NzpgUfSvEqdG9qW&oh=00_AYCyqqKY0dHQQ0a3Vv1EpYcQe8bXeTN_wY1OmM-vtWXeIg&oe=67033CC5" // Replace with actual image path
            width={600}
            height={400}
            alt="Baltoro Glacier"
            className="rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">4. Baltoro Glacier</h2>
            <ul className="space-y-4">
              <li><FaMapMarkerAlt className="inline mr-2" /> For the more adventurous, consider a trek to the Baltoro Glacier. The views of the autumn colors contrasting with the icy expanse are truly unforgettable.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Local Festivals and Culture */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="https://scontent.fisb29-1.fna.fbcdn.net/v/t1.6435-9/44086267_1124765147686870_4485928250719076352_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHz5IkFN1dlnnsos8Syv3BCq5OAam-OM3erk4Bqb44zd6TJCl8-fahZQrns65I32L_S4Qy5uk-gvIlu-uLphW9-&_nc_ohc=7iB1Oy80rz4Q7kNvgGMemJR&_nc_ht=scontent.fisb29-1.fna&_nc_gid=A46-f4RWbmIzx7kdRYI8eSU&oh=00_AYBbmkwMimuAV9jdW6Kl-iaMd-6RZ5m8M3coi27h7R00Pg&oe=6724CE49" // Replace with actual image path
            width={600}
            height={400}
            alt="Local Festivals"
            className="rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">5. Local Festivals and Culture</h2>
            <ul className="space-y-4">
              <li><FaCamera className="inline mr-2" /> Look out for local autumn festivals celebrating harvest and culture. Engaging with locals can offer unique insights into traditions and perhaps some tasty seasonal treats.</li>
              <li><FaCamera className="inline mr-2" /> <strong>Tips for Adventure:</strong> Always pack for variable weather and keep a camera ready for those stunning autumn landscapes!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutumnAdventure;

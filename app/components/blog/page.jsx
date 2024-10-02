'use client';

import Navbar from '../NavBar/page';
import Secondbar from '../SecondBar/page';
import Footer from '../Footer/page';
import AutumnAdventure from "./AutumnAdventure/page"
const BlogWelcome = () => {
  return (
  <>
        <Navbar/>
        <Secondbar/>


    <div className="relative py-5  w-full">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hunza.jpg")', // Replace with your image path
        }}
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content (heading and link) */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-4">
     Our 7-Day Adventure: Islamabad to Hunza, Nagar, and Skardu
     </h1>
      

     <div className="p-4">
      {/* Day 1: Islamabad to Gilgit */}
      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
        <label className="grow px-4 py-3 font-medium" htmlFor="collapse1">Day 1: Islamabad to Gilgit</label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse1"
          id="collapse1"
        />
       
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          <p><strong>Kickoff:</strong> We plan to leave early from Islamabad.</p>
          <p><strong>Route:</strong> We’ll take the N-15 (Karakoram Highway) through Naran and over Babusar Pass.</p>
          <p><strong>Stops:</strong></p>
          <ul className="list-disc list-inside">
            <li>Breakfast in Naran sounds perfect.</li>
            <li>We’ll definitely stop at Babusar Pass for some breathtaking views (weather permitting).</li>
          </ul>
          <p><strong>Arrival:</strong> We expect to reach Gilgit by evening.</p>
          <p><strong>Stay:</strong> We’ll find a cozy hotel in Gilgit for the night.</p>
        </div>
      </div>

      {/* Add more days similarly */}


    <div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
  <label className="grow px-4 py-3 font-medium" htmlFor="collapse2">Day 2: Gilgit to Hunza</label>
  <input
    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
    type="checkbox"
    name="collapse2"
    id="collapse2"
  />

  <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
    <p><strong>Departure:</strong> After breakfast, we’ll head towards Hunza.</p>
    <p><strong>Stops:</strong></p>
    <ul className="list-disc list-inside">
      <li>First, we’ll check out Rakaposhi View Point for amazing scenery.</li>
      <li>Then, we want to explore Baltit Fort in Karimabad to soak up some history.</li>
    </ul>
    <p><strong>Arrival:</strong> We’ll check into our hotel in Hunza.</p>
    <p><strong>Evening:</strong> We’re excited to explore the local markets and enjoy the atmosphere.</p>
    <p><strong>Stay:</strong> We’ll stay overnight in Karimabad or Altit.</p>
  </div>
</div>




<div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
  <label className="grow px-4 py-3 font-medium" htmlFor="collapse3">Day 3: Exploring Hunza</label>
  <input
    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
    type="checkbox"
    name="collapse3"
    id="collapse3"
  />
  
  <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
    <p><strong>Activities:</strong></p>
    <ul className="list-disc list-inside">
      <li>We plan to visit Altit Fort and enjoy the gardens around it.</li>
      <li>A trip to Eagle’s Nest for panoramic views is definitely on our list.</li>
    </ul>
    <p><strong>Lunch:</strong> We’ll treat ourselves to some local cuisine at a nearby restaurant.</p>
    <p><strong>Optional:</strong> If we have time, we’d love to explore Passu Cones and maybe take a boat ride on Attabad Lake.</p>
    <p><strong>Evening:</strong> We’ll relax and watch the sunset over the mountains.</p>
  </div>
</div>




<div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
  <label className="grow px-4 py-3 font-medium" htmlFor="collapse4">Day 4: Day Trip to Nagar Valley</label>
  <input
    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
    type="checkbox"
    name="collapse4"
    id="collapse4"
  />
  
  <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
    <p><strong>Departure:</strong> After breakfast, we’ll make our way to Nagar Valley.</p>
    <p><strong>Activities:</strong></p>
    <ul className="list-disc list-inside">
      <li>We want to walk across the stunning Husseini Suspension Bridge.</li>
      <li>We’ll enjoy the beautiful landscapes in Nagar.</li>
      <li>Visiting Nagar Khas Fort for some incredible views is a must.</li>
    </ul>
    <p><strong>Lunch:</strong> We’ll try some local food in Nagar.</p>
    <p><strong>Return:</strong> We’ll head back to Hunza for the night.</p>
    <p><strong>Stay:</strong> Another overnight stay in Hunza.</p>
  </div>
</div>

<div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
  <label className="grow px-4 py-3 font-medium" htmlFor="collapse5">Day 5: Hunza to Skardu</label>
  <input
    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
    type="checkbox"
    name="collapse5"
    id="collapse5"
  />
  
  <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
    <p><strong>Departure:</strong> We’ll start our journey to Skardu early in the morning.</p>
    <p><strong>Route:</strong> We’re looking forward to the stunning views along the way.</p>
    <p><strong>Stops:</strong></p>
    <ul className="list-disc list-inside">
      <li>We’ll stop at Skardu Fort when we arrive to take in the sights.</li>
    </ul>
    <p><strong>Arrival:</strong> We expect to be in Skardu by afternoon.</p>
    <p><strong>Stay:</strong> We’ll check into a hotel in Skardu.</p>
    <p><strong>Evening:</strong> We’ll explore the local bazaar and enjoy dinner.</p>
  </div>
</div>
<div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
  <label className="grow px-4 py-3 font-medium" htmlFor="collapse6">Day 6: Discovering Skardu</label>
  <input
    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
    type="checkbox"
    name="collapse6"
    id="collapse6"
  />
  
  <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
    <p><strong>Activities:</strong></p>
    <ul className="list-disc list-inside">
      <li>We want to visit Shangrila Resort and enjoy the views of Upper Kachura Lake.</li>
      <li>If we can, we’d love to check out Lower Kachura Lake for a serene experience.</li>
      <li>Exploring Deosai National Park (if accessible) is also on our list.</li>
    </ul>
    <p><strong>Lunch:</strong> We’ll grab a bite at a local café or our hotel.</p>
    <p><strong>Evening:</strong> We’ll unwind and enjoy the atmosphere in Skardu.</p>
  </div>
</div>

<div className="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white mb-4">
  <label className="grow px-4 py-3 font-medium" htmlFor="collapse7">Day 7: Return to Islamabad</label>
  <input
    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
    type="checkbox"
    name="collapse7"
    id="collapse7"
  />
 
  <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
    <p><strong>Morning:</strong> After breakfast, we’ll start our journey back to Gilgit.</p>
    <p><strong>Lunch:</strong> We’ll stop for a meal in Gilgit.</p>
    <p><strong>Return:</strong> Then, we’ll continue back to Islamabad along the same route.</p>
    <p><strong>Evening:</strong> We plan to arrive back in Islamabad by evening.</p>
    <p><strong>Extra Tips:</strong></p>
    <ul className="list-disc list-inside">
      <li><strong>Transport:</strong> We’ll be using a 4x4 vehicle for the journey, especially to Skardu.</li>
      <li><strong>Weather:</strong> We’ll keep an eye on the weather, as it can change quickly in the mountains.</li>
      <li><strong>Cash:</strong> We’ll make sure to have enough cash, since ATMs might not be available in some areas.</li>
      <li><strong>Packing:</strong> We’ll pack layers because temperatures can vary a lot throughout the day.</li>
    </ul>
  </div>
</div>


      </div>
    </div>
    </div>
<AutumnAdventure/>


<Footer/>
  </>

  );
};

export default BlogWelcome;

import React from "react";
import TourCard from "../BookNow/NangaParbatAndHunzaValley/page";
import AstoreFairyMeadows from "./astoreVillay/page";
import K2BaseCampTrek from "./K2Base/page";
import OneDayTour from "../BookNow/OneDayTour/page" 
import SkarduHunza from "./SkarduHunza/page"
import SkarduShigarGhanche from "./Skardu/page"
import Islamabad from "./Islamabad/page" 
import  Batura from "./Batura/page"
import HunzaAndGilgit from "./hunzaandGilglt/page"
import ChilamFestival from "./ChilamFestival/page"

const BookNow = () => {
  return (
    <div className="flex flex-col gap-20 overflow-hidden p-4 bg-[#e7e6e6]">
      <h1 className="pt-8 pl-5 font-bold text-3xl text-center md:text-left">
        Explore our latest tours and treks
      </h1>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AstoreFairyMeadows />
        <K2BaseCampTrek />
        <SkarduHunza />
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TourCard />
        <OneDayTour />
         <SkarduShigarGhanche/>
       
  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Islamabad/>
          <Batura/>
          <HunzaAndGilgit/>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <ChilamFestival/>
      </div>
    </div>
  );
};

export default BookNow;

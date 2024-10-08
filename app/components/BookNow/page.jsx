import React from "react";
import TourCard from "../BookNow/NangaParbatAndHunzaValley/page";
import AstoreFairyMeadows from "./astoreVillay/page";
import K2BaseCampTrek from "./K2Base/page";
import OneDayTour from "../BookNow/OneDayTour/page" 
import SkarduHunza from "./SkarduHunza/page"

const BookNow = () => {
  return (
    <div className="flex flex-col gap-20 overflow-hidden p-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TourCard />
        <OneDayTour />
      </div>
    </div>
  );
};

export default BookNow;

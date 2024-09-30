import React from "react";
import ExplorePakistanCard from "./explorePakistan/page";
import CultureArcheologyCard from "./calture/page";
import HunzaValleyCard from "./Hunzacard/page";
import TourCards from "./TourCards/page";

const CardWithImges = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10">
        <ExplorePakistanCard />
        <CultureArcheologyCard />
        <HunzaValleyCard />
      </div>
      <div className="mt-8">
        <TourCards />
      </div>
    </div>
  );
};

export default CardWithImges;

'use client'; 
import AboutUsCard from "../cards/abouts/page";
import ServicesCard from "./ourservice/page";
import WhyUsCard from "./whyus/page";
import React from 'react';

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-white py-[120px] px-4">
      <div className="w-full md:w-1/3 flex justify-center">
        <AboutUsCard />
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <ServicesCard />
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <WhyUsCard />
      </div>
    </div>
  );
};

export default Cards;

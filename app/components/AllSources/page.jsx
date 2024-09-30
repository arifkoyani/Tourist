'use client';

import { FaMotorcycle, FaHiking, FaMountain, FaBusAlt, FaSkiing } from 'react-icons/fa';
import { MdOutlinePeopleAlt } from 'react-icons/md'; // Example of another icon from react-icons

const ServicesGrid = () => {
  const services = [
    { icon: <FaMotorcycle size={48} />, label: 'TRENDING TRIPS' },
    { icon: <FaHiking size={48} />, label: 'TREKS' },
    { icon: <MdOutlinePeopleAlt size={48} />, label: 'CULTURAL & HERITAGE TOURS' },
    { icon: <FaMountain size={48} />, label: 'MOUNTAINEERING EXPEDITIONS' },
    { icon: <FaBusAlt size={48} />, label: 'MOUNTAIN VISTAS' },
    { icon: <FaSkiing size={48} />, label: 'SKIING' },
  ];

  return (
    <div className="bg-white py-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-[#213A71]">{service.icon}</div>
            <p className="mt-2 text-center text-[#213A71] font-medium text-sm">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

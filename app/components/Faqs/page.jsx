'use client';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  // Define state to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ Data
  const faqData = [
    {
      question: "How do I book a tour?",
      answer: "You can easily book a tour through our website. Simply browse the available tours, choose your preferred dates, and click 'Book Now.'",
    },
    {
      question: "What payment options are available?",
      answer: "We accept credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. International travelers can pay in multiple currencies.",
    },
    {
      question: "What is your cancellation or refund policy?",
      answer: "Cancellations made 30+ days before the tour start date are fully refundable. Cancellations within 15-30 days will be refunded 50%, and cancellations made within 14 days are non-refundable.",
    },
    {
      question: "What’s included in the tour package?",
      answer: "Our tour packages typically include accommodations, meals, transportation, entry fees, and the services of an experienced local guide.",
    },
    {
      question: "Are there any health or vaccination requirements?",
      answer: "Please check with your healthcare provider or visit the CDC or WHO websites for any required vaccinations or health precautions for your destination.",
    },
    {
      question: "What should I pack for the trip?",
      answer: "Pack light, comfortable clothing suitable for walking, along with any destination-specific items like warm layers for cold climates or breathable fabrics for tropical regions.",
    },
    {
      question: "How many people are typically in a tour group?",
      answer: "Our tour groups range from 8-15 people, offering an intimate and immersive experience, but some specialty tours can accommodate up to 25 people.",
    },
    {
        question: " Travel Insurance: Is travel insurance included in the package?",
        answer: "Travel insurance is not included in our standard tour packages. However, we highly recommend purchasing travel insurance to cover unforeseen circumstances such as medical emergencies, trip cancellations, or lost luggage. You can easily add insurance during the booking process, or consult with your insurance provider for coverage options",
      },
      {
        question: "Language: What languages are the tours conducted in?",
        answer: "Our tours are primarily conducted in English. However, we can arrange for guides who speak other languages, such as Spanish, French, or German, upon request. Please let us know your language preference when booking, and we will do our best to accommodate.",
      },

      {
        question: "Dietary Restrictions: Can you accommodate dietary restrictions or preferences?",
        answer: "Yes, we can accommodate most dietary restrictions or preferences, including vegetarian, vegan, gluten-free, and other special diets. Please notify us of your requirements when booking, so we can make the necessary arrangements with restaurants and accommodations during your tour."
      },
      {
        question: " Transportation: What type of transportation is provided during the tour?",
        answer: "We provide comfortable and reliable transportation throughout the tour. Depending on the destination and group size, transportation may include air-conditioned buses, minivans, or private vehicles. For certain tours, domestic flights or train journeys may also be included. Details about the transportation for each tour are provided in the itinerary."
      }, {
        question: "Custom Tours: Can I customize a tour itinerary?",
        answer: "Absolutely! We offer custom tour planning for individuals and groups. Whether you want to extend your stay, visit specific destinations, or tailor the itinerary to your preferences, our team will work closely with you to design the perfect travel experience. Contact us for more information on customizing your trip."
      },
  ];

  return (
    <div className="bg-gray-100  px-4 lg:px-0 ">
      <div className="lg:container mt-8 lg:mx-auto lg:w-8/12 w-full">
      <h1 className="text-center text-3xl lg:text-4xl font-semibold text-gray-800 mb-8">FAQ&apos;s</h1>

        <div className="bg-white p-6 shadow rounded-lg">
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div key={index}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                  <p className="text-lg font-medium text-gray-800">{faq.question}</p>
                  <button className="focus:outline-none">
                    {openFAQ === index ? (
                      <FiMinus className="text-gray-800" size={24} />
                    ) : (
                      <FiPlus className="text-gray-800" size={24} />
                    )}
                  </button>
                </div>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
    
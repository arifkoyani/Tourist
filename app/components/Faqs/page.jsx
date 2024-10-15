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
      answer: "You can conveniently book a tour by reaching out to us via email, WhatsApp, or through our website. Just explore our available tours, select your desired dates, and click 'Book Now' to secure your reservation.",
    },
    {
      question: "What payment options are available?",
      answer: "We accept payments via credit and debit cards, including Visa, MasterCard, and American Express, as well as bank transfers. International travelers can also pay in a variety of currencies for added convenience.",
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
      answer: "We offer a variety of tour packages tailored for individuals, couples, FITs, and groups of all sizes. For groups of more than 10 people, we provide more flexible options that cater to their specific transportation and lodging needs.",
    },
    {
        question: " Travel Insurance: Is travel insurance included in the package?",
        answer: "Travel insurance is not included in our standard tour packages. However, we highly recommend purchasing travel insurance to cover unforeseen circumstances such as medical emergencies, trip cancellations, or lost luggage. You can easily add insurance during the booking process, or consult with your insurance provider for coverage options",
      },
      {
        question: "Language: What languages are the tours conducted in?",
        answer: "Our tours are primarily conducted in English, but we can arrange for guides who speak other languages, including Spanish, French, German, Japanese, Chinese, and Arabic, upon request. Please inform us of your language preference when booking, and we will do our utmost to accommodate your needs.",
      },

      {
        question: "Dietary Restrictions: Can you accommodate dietary restrictions or preferences?",
        answer: "We are happy to accommodate a variety of dietary restrictions and preferences, including vegetarian, vegan, gluten-free, diabetic, cholesterol-free, and other specialized diets. Please let us know your specific requirements when making your reservation, so we can ensure that appropriate arrangements are made with restaurants and accommodations throughout your tour."
      },
      {
        question: " Transportation: What type of transportation is provided during the tour?",
        answer: "We offer comfortable and dependable transportation for all our tours. Depending on your destination and the size of your group, we provide various options, including air-conditioned buses, minivans, and private vehicles. In some cases, your journey may also feature domestic flights or train rides as part of the tour experience."
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
    
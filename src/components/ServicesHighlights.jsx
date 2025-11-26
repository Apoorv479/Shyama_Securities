import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const ServicesHighlights = () => {
  const cards = [
    {
      image: card1,
      title: "Unmatched Security Solutions for Every Need",
      description:
        "Your safety is our top priority. Our licensed and highly trained professionals deliver customized security services for residential, commercial, and event needs.",
    },
    {
      image: card2,
      title: "24/7 Vigilance with Advanced Technology",
      description:
        "Combining manpower with technology, we provide CCTV monitoring, biometric access, and smart surveillance systems to ensure total protection.",
    },
    {
      image: card3,
      title: "Trusted by Leading Businesses & Individuals",
      description:
        "We are proud to safeguard businesses, institutions, and individuals with reliable, professional, and discreet security solutions.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-4">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-[#1a9bb9] mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#0b3d64] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;


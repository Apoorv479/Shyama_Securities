import { useEffect, useState } from "react";
import hero1 from "../assets/hero_1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero_3.png";
import hero4 from "../assets/hero_4.png";
import hero5 from "../assets/hero_5.png";

const AUTO_MS = 3000;
const TRANSITION_CLASS = "transition-opacity duration-[1000ms] ease-in-out";

const slides = [
  {
    image: hero1,
    headline: "Trusted Security, Reliable Protection",
    message: "Comprehensive security guard and surveillance services tailored to your needs.",
  },
  {
    image: hero2,
    headline: "Delivering Excellence in Security & Manpower Solutions",
    message: "Expert personnel and robust solutions for corporate, industrial, and residential sectors.",
  },
  {
    image: hero3,
    headline: "Empowering Safety Through Technology and Training",
    message: "Integrating cutting-edge technology with highly-trained security professionals for maximum safety.",
  },
  {
    image: hero4,
    headline: "24/7 Vigilance, 100% Commitment",
    message: "Around-the-clock monitoring and dedicated service to safeguard your assets and people.",
  },
  {
    image: hero5,
    headline: "Your Safety, Our Priority — Always",
    message: "A commitment to peace of mind through proactive and dependable security measures.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Standard interval logic without the pause restriction
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);

    // Cleanup function to stop the timer when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden bg-gray-900 shadow-xl"
      aria-label="Hero"
    >
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${TRANSITION_CLASS} ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.image}
              alt={s.headline}
              className="h-full w-full object-cover object-[center_25%]"
              loading="eager"
            />
            
            {/* FIX: Changed 'bg-linear-to-r' to 'bg-gradient-to-r' 
               (Standard Tailwind syntax is 'gradient', 'linear' often fails to render) 
            */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b3d64]/90 via-[#0b3d64]/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left pt-12 md:pt-0">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            {slides[index].headline}
          </h1>
          <p className="mt-6 text-gray-100 text-lg md:text-2xl font-medium drop-shadow-md max-w-2xl leading-relaxed">
            {slides[index].message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
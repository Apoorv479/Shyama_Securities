import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import serv1 from "../assets/serv1.jpg";
import serv2 from "../assets/serv2.jpg";
import serv3 from "../assets/serv3.jpg";
import serv4 from "../assets/serv4.jpg";
import serv5 from "../assets/serv5.jpg";
import serv6 from "../assets/serv6.jpg";
import serv7 from "../assets/serv7.jpg";
import serv8 from "../assets/serv8.jpg";

const Industry = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(320);

  const industries = [
    { id: 1, image: serv1, title: "Construction" },
    { id: 2, image: serv2, title: "Corporate" },
    { id: 3, image: serv3, title: "Hospitality" },
    { id: 4, image: serv4, title: "Events" },
    { id: 5, image: serv5, title: "Retail" },
    { id: 6, image: serv6, title: "Residential" },
    { id: 7, image: serv7, title: "Healthcare" },
    { id: 8, image: serv8, title: "Education" },
  ];

  // Duplicate industries array for seamless loop
  const duplicatedIndustries = [...industries, ...industries];

  useEffect(() => {
    const calculateCardWidth = () => {
      if (!wrapperRef.current) return;
      
      const containerWidth = wrapperRef.current.offsetWidth;
      const width = window.innerWidth;
      const gap = 24; // 1.5rem = 24px
      
      let cardsPerView;
      if (width >= 1024) {
        // Desktop: 3 cards per view
        cardsPerView = 3;
      } else if (width >= 768) {
        // Tablet: 2 cards per view
        cardsPerView = 2;
      } else {
        // Mobile: 1 card per view
        cardsPerView = 1;
      }
      
      return (containerWidth - (gap * (cardsPerView - 1))) / cardsPerView;
    };

    const updateCardWidth = () => {
      // Small delay to ensure container is rendered
      setTimeout(() => {
        const width = calculateCardWidth();
        if (width > 0) {
          setCardWidth(width);
        }
      }, 100);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  useEffect(() => {
    if (cardWidth <= 0) return;
    
    const gap = 24; // 1.5rem = 24px
    const singleSetWidth = 8 * (cardWidth + gap);

    controls.start({
      x: [0, -singleSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls, cardWidth]);

  return (
    <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b3d64] tracking-tight">
            Industries We Serve In
          </h2>
        </div>

        {/* Slider Container */}
        <div ref={wrapperRef} className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6 will-change-transform"
            animate={controls}
            style={{ width: "max-content" }}
          >
            {duplicatedIndustries.map((industry, index) => (
              <motion.div
                key={`${industry.id}-${index}`}
                className="shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
                style={{ width: `${cardWidth}px` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20" />
                  
                  {/* Industry Name */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4 drop-shadow-2xl z-10">
                      {industry.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industry;


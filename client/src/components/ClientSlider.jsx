import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";

const ClientSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const clients = [
    { id: 1, logo: client1, name: "Client 1" },
    { id: 2, logo: client2, name: "Client 2" },
    { id: 3, logo: client3, name: "Client 3" },
    { id: 4, logo: client4, name: "Client 4" },
    { id: 5, logo: client5, name: "Client 5" },
    { id: 6, logo: client6, name: "Client 6" },
    { id: 7, logo: client7, name: "Client 7" },
  ];

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    // Calculate width: each logo is 180px + gap (2rem = 32px) = 212px per logo
    // For 7 logos: 7 * 212 = 1484px (one set width)
    const singleSetWidth = 7 * (180 + 32); // 7 logos * (width + gap)

    controls.start({
      x: [0, -singleSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    const singleSetWidth = 7 * (180 + 32);
    controls.start({
      x: [null, -singleSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b3d64] mb-10">
            Our Valued Clients
          </h2>
        </div>

        {/* Slider Container */}
        <div
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-8 will-change-transform"
            animate={controls}
            style={{ width: "max-content" }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="shrink-0 w-40 sm:w-[180px] md:w-[200px] p-4 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto object-contain max-h-16 sm:max-h-20 md:max-h-24"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;


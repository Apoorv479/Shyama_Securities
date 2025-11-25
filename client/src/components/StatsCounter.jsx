import { useEffect, useRef, useState } from "react";

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 22000, label: "Events Served" },
    { value: 350, label: "Qualified Staff" },
    { value: 20, label: "Our Locations" },
    { value: 550, label: "Areas Serving" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-6 bg-[#0b3d64] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds animation
  const steps = 60; // Number of animation steps

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let currentStep = 0;
      const increment = value / steps;
      const stepDuration = duration / steps;

      const interval = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), value);
        setCount(newValue);

        if (newValue >= value) {
          setCount(value);
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center transition-all duration-300 hover:scale-105">
      <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
        {count.toLocaleString()}
        {value >= 1000 && "+"}
      </div>
      <div className="text-[#d1d5db] text-sm md:text-base uppercase tracking-wide font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsCounter;


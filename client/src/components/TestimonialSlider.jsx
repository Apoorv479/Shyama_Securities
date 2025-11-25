import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Facility Manager",
      company: "TechCorp Industries",
      content:
        "Shyama Manpower Solutions has been our trusted partner for over 3 years. Their security staff is professional, well-trained, and always reliable. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Operations Director",
      company: "Metro Shopping Mall",
      content:
        "Excellent service quality and responsive support team. They understand our needs and deliver beyond expectations. The housekeeping staff maintains impeccable standards.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "HR Manager",
      company: "Global Logistics Ltd.",
      content:
        "We've been working with Shyama for our logistics and warehouse staffing needs. Their team is efficient, punctual, and handles our high-volume operations seamlessly.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "CEO",
      company: "Corporate Towers",
      content:
        "Professional, dependable, and cost-effective. Shyama Manpower Solutions has transformed our facility management. Their integrated approach to security and housekeeping is outstanding.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200/50 shadow-2xl p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Quote className="h-10 w-10 text-[#1a9bb9] opacity-60" />
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-base md:text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-[#0b3d64]" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-[#0b3d64]" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#1a9bb9]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;


import { motion } from "framer-motion";

const HiringBenefitsIllustration = ({ benefit = "verified", className = "w-full h-auto" }) => {
  const benefits = {
    verified: (
      <g>
        {/* Shield with Check */}
        <path
          d="M50 20 L30 30 L30 60 Q30 80 50 90 Q70 80 70 60 L70 30 Z"
          fill="url(#benefitGradient)"
        />
        <path
          d="M45 55 L40 50 L38 52 L45 62 L62 45 L60 43 Z"
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Background Circle */}
        <circle cx="50" cy="50" r="45" fill="url(#benefitGradient)" opacity="0.1" />
      </g>
    ),
    fast: (
      <g>
        {/* Clock */}
        <circle cx="50" cy="50" r="35" fill="url(#benefitGradient)" />
        <circle cx="50" cy="50" r="30" fill="#ffffff" />
        {/* Clock Hands */}
        <line x1="50" y1="50" x2="50" y2="35" stroke="#0b3d64" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="60" y2="50" stroke="#1a9bb9" strokeWidth="2" strokeLinecap="round" />
        {/* Lightning Bolt */}
        <path
          d="M50 25 L45 40 L50 40 L50 55 L55 40 L50 40 Z"
          fill="url(#benefitGradient)"
        />
      </g>
    ),
    training: (
      <g>
        {/* Graduation Cap */}
        <ellipse cx="50" cy="40" rx="35" ry="12" fill="url(#benefitGradient)" />
        <rect x="30" y="40" width="40" height="25" rx="3" fill="url(#benefitGradient)" />
        {/* Tassel */}
        <line x1="65" y1="40" x2="70" y2="50" stroke="#1a9bb9" strokeWidth="2" />
        <circle cx="70" cy="50" r="3" fill="#1a9bb9" />
        {/* Book */}
        <rect x="35" y="50" width="30" height="20" rx="2" fill="#ffffff" />
        <line x1="50" y1="50" x2="50" y2="70" stroke="#0b3d64" strokeWidth="1.5" />
      </g>
    ),
    support: (
      <g>
        {/* Headphones */}
        <ellipse cx="35" cy="50" rx="15" ry="20" fill="url(#benefitGradient)" />
        <ellipse cx="65" cy="50" rx="15" ry="20" fill="url(#benefitGradient)" />
        <rect x="35" y="50" width="30" height="8" rx="4" fill="url(#benefitGradient)" />
        {/* Support Icon */}
        <circle cx="50" cy="50" r="8" fill="#ffffff" />
        <path
          d="M50 45 L50 55 M45 50 L55 50"
          stroke="#0b3d64"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ),
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <defs>
        <linearGradient id="benefitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b3d64" />
          <stop offset="100%" stopColor="#1a9bb9" />
        </linearGradient>
      </defs>
      {benefits[benefit] || benefits.verified}
    </motion.svg>
  );
};

export default HiringBenefitsIllustration;


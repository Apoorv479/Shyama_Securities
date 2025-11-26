import { motion } from "framer-motion";

const HeroBannerIllustration = ({ className = "w-full h-auto" }) => {
  return (
    <motion.svg
      viewBox="0 0 800 400"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b3d64" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1a9bb9" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b3d64" />
          <stop offset="100%" stopColor="#1a9bb9" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="400" fill="url(#heroGradient1)" />

      {/* Security Guard */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Body */}
        <rect x="100" y="180" width="80" height="120" rx="8" fill="url(#heroGradient2)" />
        {/* Head */}
        <circle cx="140" cy="150" r="25" fill="#f4d1ae" />
        {/* Cap */}
        <ellipse cx="140" cy="135" rx="30" ry="15" fill="#0b3d64" />
        {/* Badge */}
        <circle cx="140" cy="200" r="12" fill="#1a9bb9" />
        {/* Arms */}
        <rect x="90" y="200" width="20" height="60" rx="10" fill="url(#heroGradient2)" />
        <rect x="170" y="200" width="20" height="60" rx="10" fill="url(#heroGradient2)" />
        {/* Legs */}
        <rect x="110" y="280" width="25" height="50" rx="5" fill="#0b3d64" />
        <rect x="145" y="280" width="25" height="50" rx="5" fill="#0b3d64" />
      </motion.g>

      {/* Office Staff */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Desk */}
        <rect x="250" y="220" width="100" height="8" rx="4" fill="#0b3d64" />
        {/* Chair */}
        <rect x="280" y="240" width="40" height="50" rx="5" fill="#1a9bb9" />
        {/* Person */}
        <circle cx="300" cy="180" r="20" fill="#f4d1ae" />
        <rect x="285" y="200" width="30" height="40" rx="5" fill="url(#heroGradient2)" />
        {/* Computer */}
        <rect x="260" y="200" width="40" height="25" rx="3" fill="#1a9bb9" />
        <rect x="265" y="205" width="30" height="15" rx="2" fill="#0b3d64" />
      </motion.g>

      {/* Housekeeping */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Person */}
        <circle cx="450" cy="170" r="22" fill="#f4d1ae" />
        <rect x="430" y="192" width="40" height="50" rx="5" fill="url(#heroGradient2)" />
        {/* Headband */}
        <rect x="425" y="155" width="50" height="8" rx="4" fill="#1a9bb9" />
        {/* Cleaning Cart */}
        <rect x="480" y="220" width="50" height="60" rx="5" fill="#1a9bb9" />
        <rect x="485" y="225" width="40" height="30" rx="3" fill="#0b3d64" />
        {/* Mop */}
        <line x1="500" y1="200" x2="500" y2="240" stroke="#0b3d64" strokeWidth="4" />
        <circle cx="500" cy="240" r="8" fill="#1a9bb9" />
      </motion.g>

      {/* Industrial Worker */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* Person */}
        <circle cx="600" cy="160" r="24" fill="#f4d1ae" />
        <rect x="580" y="184" width="40" height="60" rx="5" fill="url(#heroGradient2)" />
        {/* Hard Hat */}
        <ellipse cx="600" cy="145" rx="28" ry="18" fill="#1a9bb9" />
        <rect x="590" y="140" width="20" height="5" rx="2" fill="#0b3d64" />
        {/* Tool */}
        <rect x="630" y="200" width="8" height="40" rx="4" fill="#0b3d64" />
        <rect x="625" y="235" width="18" height="8" rx="4" fill="#1a9bb9" />
        {/* Safety Vest */}
        <rect x="585" y="190" width="30" height="35" rx="3" fill="#ffd700" />
      </motion.g>

      {/* Decorative Elements */}
      <motion.circle
        cx="700"
        cy="100"
        r="40"
        fill="url(#heroGradient2)"
        opacity="0.2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
      <motion.circle
        cx="50"
        cy="350"
        r="30"
        fill="url(#heroGradient2)"
        opacity="0.2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
    </motion.svg>
  );
};

export default HeroBannerIllustration;


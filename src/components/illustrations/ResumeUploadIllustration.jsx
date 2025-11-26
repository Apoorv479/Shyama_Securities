import { motion } from "framer-motion";

const ResumeUploadIllustration = ({ className = "w-full h-auto" }) => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="uploadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b3d64" />
          <stop offset="100%" stopColor="#1a9bb9" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Document/Resume */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Paper */}
        <rect
          x="50"
          y="40"
          width="100"
          height="120"
          rx="4"
          fill="#ffffff"
          stroke="url(#uploadGradient)"
          strokeWidth="2"
          filter="url(#shadow)"
        />
        {/* Folded Corner */}
        <path
          d="M140 40 L150 50 L140 50 Z"
          fill="url(#uploadGradient)"
          opacity="0.3"
        />
        {/* Lines on Document */}
        <line x1="60" y1="60" x2="140" y2="60" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="75" x2="140" y2="75" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="90" x2="120" y2="90" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="105" x2="140" y2="105" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="120" x2="130" y2="120" stroke="#e5e7eb" strokeWidth="2" />
        {/* Icon on Document */}
        <circle cx="100" cy="85" r="8" fill="url(#uploadGradient)" opacity="0.2" />
      </motion.g>

      {/* Upload Arrow */}
      <motion.g
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* Arrow */}
        <path
          d="M100 20 L90 35 L95 35 L95 50 L105 50 L105 35 L110 35 Z"
          fill="url(#uploadGradient)"
        />
        {/* Cloud/Upload Symbol */}
        <path
          d="M100 15 Q85 15 85 25 Q85 30 90 30 Q92 35 100 35 Q108 35 110 30 Q115 30 115 25 Q115 15 100 15 Z"
          fill="url(#uploadGradient)"
          opacity="0.3"
        />
      </motion.g>

      {/* File Icon Badge */}
      <motion.circle
        cx="150"
        cy="50"
        r="15"
        fill="url(#uploadGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3, type: "spring" }}
      >
        <title>PDF</title>
      </motion.circle>
      <text
        x="150"
        y="55"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="10"
        fontWeight="bold"
      >
        PDF
      </text>
    </motion.svg>
  );
};

export default ResumeUploadIllustration;


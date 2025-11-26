import { motion } from "framer-motion";

const JobRolesIllustration = ({ role = "all", className = "w-full h-auto" }) => {
  const roles = {
    security: (
      <g>
        {/* Security Guard */}
        <rect x="20" y="60" width="60" height="90" rx="6" fill="url(#roleGradient)" />
        <circle cx="50" cy="40" r="20" fill="#f4d1ae" />
        <ellipse cx="50" cy="30" rx="25" ry="12" fill="#0b3d64" />
        <circle cx="50" cy="80" r="10" fill="#1a9bb9" />
        <rect x="10" y="80" width="15" height="50" rx="8" fill="url(#roleGradient)" />
        <rect x="75" y="80" width="15" height="50" rx="8" fill="url(#roleGradient)" />
        <rect x="25" y="130" width="20" height="40" rx="4" fill="#0b3d64" />
        <rect x="55" y="130" width="20" height="40" rx="4" fill="#0b3d64" />
      </g>
    ),
    bouncer: (
      <g>
        {/* Bouncer */}
        <rect x="20" y="50" width="70" height="100" rx="6" fill="url(#roleGradient)" />
        <circle cx="55" cy="35" r="22" fill="#f4d1ae" />
        <rect x="15" y="70" width="20" height="60" rx="10" fill="url(#roleGradient)" />
        <rect x="75" y="70" width="20" height="60" rx="10" fill="url(#roleGradient)" />
        <rect x="30" y="130" width="25" height="45" rx="5" fill="#0b3d64" />
        <rect x="65" y="130" width="25" height="45" rx="5" fill="#0b3d64" />
        {/* Confident pose - arms crossed */}
        <rect x="5" y="80" width="15" height="40" rx="8" fill="url(#roleGradient)" />
        <rect x="90" y="80" width="15" height="40" rx="8" fill="url(#roleGradient)" />
      </g>
    ),
    dataEntry: (
      <g>
        {/* Desk */}
        <rect x="10" y="100" width="80" height="6" rx="3" fill="#0b3d64" />
        {/* Chair */}
        <rect x="35" y="110" width="30" height="40" rx="4" fill="#1a9bb9" />
        {/* Person */}
        <circle cx="50" cy="60" r="18" fill="#f4d1ae" />
        <rect x="38" y="78" width="24" height="35" rx="4" fill="url(#roleGradient)" />
        {/* Computer */}
        <rect x="20" y="80" width="35" height="22" rx="2" fill="#1a9bb9" />
        <rect x="23" y="83" width="29" height="16" rx="2" fill="#0b3d64" />
        {/* Keyboard */}
        <rect x="25" y="102" width="25" height="4" rx="2" fill="#0b3d64" />
      </g>
    ),
    housekeeping: (
      <g>
        {/* Person */}
        <circle cx="50" cy="50" r="20" fill="#f4d1ae" />
        <rect x="32" y="70" width="36" height="50" rx="5" fill="url(#roleGradient)" />
        <rect x="28" y="45" width="44" height="6" rx="3" fill="#1a9bb9" />
        {/* Cleaning Cart */}
        <rect x="60" y="100" width="40" height="50" rx="4" fill="#1a9bb9" />
        <rect x="63" y="103" width="34" height="25" rx="2" fill="#0b3d64" />
        {/* Mop */}
        <line x1="75" y1="85" x2="75" y2="110" stroke="#0b3d64" strokeWidth="3" />
        <circle cx="75" cy="110" r="6" fill="#1a9bb9" />
      </g>
    ),
    receptionist: (
      <g>
        {/* Desk */}
        <rect x="5" y="90" width="90" height="8" rx="4" fill="#0b3d64" />
        {/* Person */}
        <circle cx="50" cy="55" r="19" fill="#f4d1ae" />
        <rect x="38" y="74" width="24" height="30" rx="4" fill="url(#roleGradient)" />
        {/* Phone */}
        <rect x="70" y="75" width="12" height="18" rx="2" fill="#1a9bb9" />
        {/* Computer */}
        <rect x="15" y="75" width="30" height="20" rx="2" fill="#1a9bb9" />
        <rect x="17" y="77" width="26" height="16" rx="2" fill="#0b3d64" />
      </g>
    ),
  };

  return (
    <motion.svg
      viewBox="0 0 100 170"
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="roleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b3d64" />
          <stop offset="100%" stopColor="#1a9bb9" />
        </linearGradient>
      </defs>
      {role === "all" ? roles.security : roles[role] || roles.security}
    </motion.svg>
  );
};

export default JobRolesIllustration;


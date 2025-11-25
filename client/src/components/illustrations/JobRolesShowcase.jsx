import { motion } from "framer-motion";
import JobRolesIllustration from "./JobRolesIllustration";

const JobRolesShowcase = ({ className = "w-full h-auto" }) => {
  const roles = [
    { name: "Security Guard", key: "security" },
    { name: "Bouncer", key: "bouncer" },
    { name: "Data Entry", key: "dataEntry" },
    { name: "Housekeeping", key: "housekeeping" },
    { name: "Receptionist", key: "receptionist" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
      {roles.map((role, index) => (
        <motion.div
          key={role.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <JobRolesIllustration role={role.key} className="w-24 h-32 md:w-32 md:h-40" />
          </div>
          <p className="mt-3 text-sm md:text-base font-semibold text-gray-700 text-center">
            {role.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default JobRolesShowcase;


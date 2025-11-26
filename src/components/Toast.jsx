import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 right-6 z-[100] max-w-md"
        >
          <div
            className={`relative rounded-2xl shadow-2xl backdrop-blur-xl border ${
              type === "success"
                ? "bg-gradient-to-br from-green-50/95 to-emerald-50/95 border-green-200/50"
                : "bg-gradient-to-br from-red-50/95 to-rose-50/95 border-red-200/50"
            } p-4 md:p-5 flex items-start gap-3`}
          >
            <div
              className={`shrink-0 mt-0.5 ${
                type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {type === "success" ? (
                <CheckCircle className="h-6 w-6" />
              ) : (
                <AlertCircle className="h-6 w-6" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`font-semibold text-sm md:text-base ${
                  type === "success" ? "text-green-800" : "text-red-800"
                }`}
              >
                {type === "success" ? "Success!" : "Error!"}
              </p>
              <p
                className={`text-sm md:text-base mt-1 ${
                  type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {message}
              </p>
            </div>
            <button
              onClick={onClose}
              className={`shrink-0 p-1 rounded-lg hover:bg-white/50 transition-colors ${
                type === "success" ? "text-green-600" : "text-red-600"
              }`}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;


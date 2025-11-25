import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, File, X, CheckCircle } from "lucide-react";

const ResumeUploader = ({ onFileSelect, error, required = true }) => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const hiddenInputRef = useRef(null);

  const acceptedTypes = [".pdf", ".doc", ".docx"];
  const maxSize = 5 * 1024 * 1024; // 5 MB

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1024 / 1024).toFixed(1) + " MB";
  };

  const validateFile = (selectedFile) => {
    const fileExtension = selectedFile.name
      .substring(selectedFile.name.lastIndexOf("."))
      .toLowerCase();

    if (!acceptedTypes.includes(fileExtension)) {
      return {
        valid: false,
        error: "Please upload a PDF, DOC, or DOCX file.",
      };
    }

    if (selectedFile.size > maxSize) {
      return {
        valid: false,
        error: "File size must be less than 5 MB.",
      };
    }

    return { valid: true };
  };

  const handleFileSelect = (selectedFile) => {
    const validation = validateFile(selectedFile);
    if (!validation.valid) {
      onFileSelect(null, validation.error);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (hiddenInputRef.current) hiddenInputRef.current.value = "";
      return;
    }

    setFile(selectedFile);
    onFileSelect(selectedFile, null);

    // Sync to hidden input for EmailJS sendForm
    if (hiddenInputRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(selectedFile);
      hiddenInputRef.current.files = dataTransfer.files;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleRemove = () => {
    setFile(null);
    onFileSelect(null, null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (hiddenInputRef.current) hiddenInputRef.current.value = "";
  };

  return (
    <div className="w-full">
      {/* Hidden file input for EmailJS sendForm - must be inside form */}
      <input
        ref={hiddenInputRef}
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        className="hidden"
        aria-hidden="true"
      />

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-8 md:p-10 transition-all duration-300 cursor-pointer ${
            isDragging
              ? "border-[#1a9bb9] bg-[#1a9bb9]/5 scale-[1.02]"
              : error
              ? "border-red-300 bg-red-50/50"
              : "border-gray-300 bg-white/50 hover:border-[#1a9bb9] hover:bg-[#1a9bb9]/5"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            className="hidden"
            aria-label="Upload resume"
          />

          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isDragging ? 1.05 : 1 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ y: isDragging ? -5 : 0 }}
              transition={{ duration: 0.3, repeat: isDragging ? Infinity : 0, repeatType: "reverse" }}
            >
              <Upload
                className={`h-12 w-12 mb-4 ${
                  isDragging ? "text-[#1a9bb9]" : error ? "text-red-400" : "text-gray-400"
                }`}
              />
            </motion.div>
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">
              {isDragging ? "Drop your resume here" : "Drag & drop your resume"}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              or <span className="text-[#1a9bb9] font-medium">click to browse</span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              PDF, DOC, DOCX (Max 5 MB)
              {required && <span className="text-red-500 ml-1">*</span>}
            </p>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-green-200 p-4 md:p-5"
        >
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              <File className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-gray-800 text-sm md:text-base truncate">
                  {file.name}
                </p>
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
              </div>
              <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="shrink-0 p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
              aria-label="Remove file"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default ResumeUploader;


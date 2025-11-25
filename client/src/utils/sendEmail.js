import emailjs from "@emailjs/browser";

/**
 * Sends an email using EmailJS service
 * @param {Object} formData - The form data containing name, email, subject, and message
 * @returns {Promise<Object>} - Promise that resolves with EmailJS response
 * @throws {Error} - Throws error if email sending fails
 */
export const sendEmail = async (formData) => {
  // Get environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Validate environment variables
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "Email service is not configured. Please check your environment variables."
    );
  }

  // Validate form data
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    throw new Error("All fields are required.");
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error("Please enter a valid email address.");
  }

  // Prepare template parameters for EmailJS
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: "Shyama Manpower Solutions", // Recipient name
  };

  try {
    // Send email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return {
      success: true,
      message: "Email sent successfully!",
      response,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error(
      error.text || "Failed to send email. Please try again later."
    );
  }
};


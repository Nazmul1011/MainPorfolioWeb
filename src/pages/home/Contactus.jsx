import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ContactUs() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    e.target.reset();
  };

  return (
    <section
      className="reveal w-full bg-gradient-to-b from-white to-gray-50 
      dark:from-gray-900 dark:to-darkbg transition-all duration-700 ease-in-out"
    >
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-20 text-center relative fade-child">
        {/* Header */}
        <div className="mb-10 fade-child">
          <p className="uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-2 transition-colors duration-500">
            Connect with me
          </p>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto transition-colors duration-500">
            I’d love to hear from you! If you have any questions, comments, or feedback,
            please use the form below.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 text-left fade-child"
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 w-full text-sm 
              focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-300 outline-none transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 w-full text-sm 
              focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-300 outline-none transition-all duration-300"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Enter your message"
            rows="6"
            required
            className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 w-full text-sm 
            focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-300 outline-none resize-none transition-all duration-300"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center fade-child">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 
              bg-gray-900 dark:bg-white text-white dark:text-gray-900 
              px-8 py-3 rounded-full text-sm font-medium 
              hover:bg-black dark:hover:bg-gray-200 
              transition-all duration-500"
            >
              Submit now <FiArrowRight className="text-lg" />
            </button>
          </div>
        </form>

        {/* ✅ Success Toast */}
        {showToast && (
          <div
            className="fixed bottom-8 right-8 bg-green-500 text-white px-5 py-3 
            rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-up 
            transition-all duration-700 ease-in-out"
          >
            <FiCheckCircle className="text-xl" />
            <span className="font-medium">Message has been sent successfully!</span>
          </div>
        )}
      </div>
    </section>
  );
}

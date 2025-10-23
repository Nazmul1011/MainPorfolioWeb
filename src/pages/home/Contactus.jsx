import { FiArrowRight } from "react-icons/fi";

export default function ContactUs() {
  return (
    <section className="max-w-screen-lg mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="mb-10">
        <p className="uppercase text-gray-500 tracking-widest mb-2">
          Connect with me
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Get in touch
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I’d love to hear from you! If you have any questions, comments, or feedback,
          please use the form below.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-xl px-4 py-3 w-full text-sm focus:ring-2 focus:ring-gray-800 outline-none"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-xl px-4 py-3 w-full text-sm focus:ring-2 focus:ring-gray-800 outline-none"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Enter your message"
          rows="6"
          className="border border-gray-300 rounded-xl px-4 py-3 w-full text-sm focus:ring-2 focus:ring-gray-800 outline-none resize-none"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition"
          >
            Submit now <FiArrowRight className="text-lg" />
          </button>
        </div>
      </form>
    </section>
  );
}
 
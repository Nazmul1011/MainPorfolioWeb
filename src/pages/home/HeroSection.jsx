import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);

  // Detect theme mode dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="reveal flex flex-col items-center justify-center text-center 
      py-24 px-6 bg-white dark:bg-darkbg transition-all duration-700 ease-in-out"
    >
      {/* Profile Image */}
      <div className="fade-child mb-8">
        <img
          src={isDark ? "/unhappay.png" : "/happynazmul.png"}
          alt="Nazmul Hasan"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-2xl 
          transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Greeting */}
      <p className="fade-child text-gray-600 dark:text-gray-300 text-lg mb-2">
        Hi! I'm{" "}
        <span className="font-semibold text-gray-800 dark:text-white">
          Nazmul Hasan
        </span>{" "}
        👋
      </p>

      {/* Main Headline */}
      <h1 className="fade-child text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white leading-tight mb-2">
        Flutter Developer <br className="hidden md:block" />{" "}
        <span className="text-6xl">Crafting Modern Mobile Apps.</span>
      </h1>

      {/* Current Role */}
      <p className="fade-child text-gray-500 dark:text-gray-400 text-base md:text-lg mb-6">
        Working as a{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Junior Flutter Developer
        </span>{" "}
        at{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Miicon Solution
        </span>{" "}
        (June 2025 – Present)
      </p>

      {/* Description */}
      <p className="fade-child text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10">
        I’m a passionate Flutter developer with over 6 months of hands-on
        experience in building cross-platform mobile apps using{" "}
        <span className="font-semibold text-gray-800 dark:text-white">
          GetX, Firebase, and clean architecture
        </span>
        . I focus on delivering elegant UIs and smooth user experiences.
      </p>

      {/* Buttons */}
      <div className="fade-child flex flex-col sm:flex-row items-center gap-4">
        {/* 🔗 Social Links (Black & White) */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/nazmulhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nazmu11011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/nazmul.hasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Resume Download Button */}
        <a
          href="/Nazmul_Hasan_Resume.pdf"
          download="Nazmul_Hasan_Resume.pdf"
          className="inline-flex items-center justify-center gap-2 
          border border-gray-400 dark:border-gray-600 
          text-gray-900 dark:text-gray-200 
          px-6 py-3 rounded-full text-sm md:text-base font-medium 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition-all duration-500"
        >
          My Resume <HiDownload className="text-lg" />
        </a>
      </div>
    </section>
  );
};

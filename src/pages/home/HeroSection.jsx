import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white">
      {/* Profile Image */}
      <img
        src="src/assets/nazmul1.png"
        alt="Nazmul Hasan"
        className="w-28 h-28 rounded-full mb-6 shadow-lg object-cover"
      />

      {/* Greeting */}
      <p className="text-gray-600 text-lg mb-2">
        Hi! I'm <span className="font-semibold">Nazmul Hasan</span> 👋
      </p>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight mb-4">
        Flutter Developer <br className="hidden md:block" /> crafting modern mobile apps.
      </h1>

      {/* Description */}
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        I’m a passionate Flutter developer with over 6 months of hands-on experience
        in building cross-platform mobile apps using{" "}
        <span className="font-semibold">GetX, Firebase, and clean architecture</span>.
        I focus on delivering elegant UIs and smooth user experiences.
      </p>


      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          contact me <HiArrowNarrowRight className="text-lg" />
        </Link>


        <a
          href="public/Nazmul_Hasan______.pdf"
          download="Nazmul_Hasan_Resume.pdf"
          className="inline-flex items-center justify-center gap-2 border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          my resume <HiDownload className="text-lg" />
        </a>
      </div>
    </section>
  );
};

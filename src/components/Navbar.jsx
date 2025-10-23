import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // helper: if user is on another page, redirect to home and then scroll
  const handleScrollLink = (e, targetId) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = `/#${targetId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              Nazmul Hasna <span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ScrollLink
              to="hero-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium cursor-pointer transition-colors rounded-lg hover:bg-gray-50"
              onClick={(e) => handleScrollLink(e, "hero-section")}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="key-features-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium cursor-pointer transition-colors rounded-lg hover:bg-gray-50"
              onClick={(e) => handleScrollLink(e, "key-features-section")}
            >
              About me
            </ScrollLink>

            <ScrollLink
              to="service-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium cursor-pointer transition-colors rounded-lg hover:bg-gray-50"
              onClick={(e) => handleScrollLink(e, "service-section")}
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="testimonial-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium cursor-pointer transition-colors rounded-lg hover:bg-gray-50"
              onClick={(e) => handleScrollLink(e, "testimonial-section")}
            >
              My Work
            </ScrollLink>

            <ScrollLink
              to="Contactus-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium cursor-pointer transition-colors rounded-lg hover:bg-gray-50"
              onClick={(e) => handleScrollLink(e, "Contactus-section")}
            >
              Contact me
            </ScrollLink>
          </div>

          {/* Right Side - Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>

            {/* Contact Button */}
            <ScrollLink
              to="Contactus-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-6 py-2.5 bg-white border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              onClick={(e) => handleScrollLink(e, "Contactus-section")}
            >
              Contact
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <ScrollLink
                to="hero-section"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors"
                onClick={(e) => handleScrollLink(e, "hero-section")}
              >
                Home
              </ScrollLink>

              <ScrollLink
                to="key-features-section"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors"
                onClick={(e) => handleScrollLink(e, "key-features-section")}
              >
                About me
              </ScrollLink>

              <ScrollLink
                to="service-section"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors"
                onClick={(e) => handleScrollLink(e, "service-section")}
              >
                Services
              </ScrollLink>

              <ScrollLink
                to="testimonial-section"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors"
                onClick={(e) => handleScrollLink(e, "testimonial-section")}
              >
                My Work
              </ScrollLink>

              <ScrollLink
                to="Contactus-section"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors"
                onClick={(e) => handleScrollLink(e, "Contactus-section")}
              >
                Contact me
              </ScrollLink>

              <ScrollLink
                to="Help-section"
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg font-medium cursor-pointer transition-colors"
                onClick={(e) => handleScrollLink(e, "Help-section")}
              >
                Help
              </ScrollLink>

              <div className="pt-2 border-t border-gray-100 mt-2">
                <ScrollLink
                  to="Contactus-section"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="w-full px-6 py-2.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  onClick={(e) => handleScrollLink(e, "Contactus-section")}
                >
                  Contact
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </ScrollLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
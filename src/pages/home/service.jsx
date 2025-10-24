import SectionHeader from "./section_header.";
import { FaMobileAlt, FaPaintBrush, FaCode, FaUserCheck, FaBug } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiFigma } from "react-icons/si";

const services = [
  {
    icon: <SiFlutter className="text-4xl text-sky-500 mb-4" />,
    title: "Flutter App Development",
    description:
      "I build cross-platform mobile applications using Flutter and GetX with clean architecture and pixel-perfect UI.",
  },
  {
    icon: <SiFirebase className="text-4xl text-amber-500 mb-4" />,
    title: "Firebase Integration",
    description:
      "Implementing real-time databases, authentication, and notifications using Firebase for scalable app solutions.",
  },
  {
    icon: <SiFigma className="text-4xl text-pink-500 mb-4" />,
    title: "UI/UX Design",
    description:
      "Designing elegant and intuitive mobile interfaces with a focus on user experience and clean, modern layouts.",
  },
  {
    icon: <FaCode className="text-4xl text-indigo-500 mb-4" />,
    title: "Web Development",
    description:
      "Develop responsive web apps using React and modern frameworks with RESTful API integrations.",
  },
  {
    icon: <FaUserCheck className="text-4xl text-green-500 mb-4" />,
    title: "App Optimization",
    description:
      "Enhancing app performance, reducing load times, and improving responsiveness for a smoother user experience.",
  },
  {
    icon: <FaBug className="text-4xl text-purple-500 mb-4" />,
    title: "QA & Automation Testing",
    description:
      "Ensuring application quality through manual and automated testing using modern frameworks and CI/CD integration for reliable performance.",
  },
];

function Service() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-darkbg dark:to-darkbg transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 text-center">
        {/* Header */}
        <div className="mb-14">
          <p className="uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-2">
            What I Do
          </p>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
            Areas of Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m a Flutter developer with hands-on experience in mobile app development, UI/UX design,
            and backend integration. I specialize in delivering modern, functional, and visually appealing digital products.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  {/* Read more → */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;

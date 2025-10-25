import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: "/project1.jpg",
    title: "Expense Tracker",
    category: "Mobile App (Flutter -> (Gatex) + Firebase)",
  },
  {
    image: "/project2.jpg",
    title: "Meal Tracker",
    category: "Mobile App (Flutter -> (Gatex) + Django)",
  },
  {
    image: "/project3.jpg",
    title: "Fitness App",
    category: "Mobile App (Flutter -> (Gatex) + Firebase)",
  },
  {
  image: "/porject5.jpg",
  title: "Inventory Management System",
  category: "Full-Stack (React + Tailwind + Python)",
},

  
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-darkbg dark:to-darkbg transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 text-center">
        {/* Header */}
        <div className="mb-14">
          <p className="uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-2">
            My Portfolio
          </p>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
            My Latest Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a collection of my recent mobile app projects showcasing my design,
            development, and problem-solving skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.category}
                  </p>
                </div>
                <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12">
          <button className="border border-gray-400 dark:border-gray-600 px-8 py-3 rounded-full text-gray-700 dark:text-white hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300">
            Processing...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

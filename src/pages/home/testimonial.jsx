import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    image: "/project1.jpg", // place images in public folder
    title: "Frontend Project",
    category: "Web Design",
  },
  {
    image: "/project2.jpg",
    title: "Geo Based App",
    category: "Mobile App",
  },
  {
    image: "/project3.jpg",
    title: "Photography Site",
    category: "Web Design",
  },
  {
    image: "/project4.jpg",
    title: "UI/UX Designing",
    category: "UI/UX Design",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="mb-14">
        <p className="uppercase text-gray-500 tracking-widest mb-2">My Portfolio</p>
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">My Latest Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to my development portfolio! Explore a collection of projects showcasing my
          expertise in Flutter app development, UI/UX design, and full-stack integration.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-between w-[85%]">
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 text-base">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
              <div className="bg-gray-800 text-white p-2 rounded-full group-hover:bg-black transition">
                <FiArrowUpRight />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-12">
        <button className="border border-gray-400 px-8 py-3 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

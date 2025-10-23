import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";
import {
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
} from "react-icons/si";

export const KeyFeaturesSection = () => {
  const cards = [
    {
      icon: <FaCode className="text-3xl text-red-500 mb-3" />,
      title: "Languages",
      desc: "Dart, JavaScript, Python",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-green-600 mb-3" />,
      title: "Education",
      desc: "B.Sc. in Computer Science & Engineering",
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-600 mb-3" />,
      title: "Projects",
      desc: "Built more than 5 mobile apps",
    },
  ];

  const tools = [
    { icon: <SiFlutter className="text-4xl text-sky-500" /> },
    { icon: <SiFirebase className="text-4xl text-amber-500" /> },
    { icon: <SiDart className="text-4xl text-blue-500" /> },
    { icon: <SiReact className="text-4xl text-cyan-400" /> },
    { icon: <SiJavascript className="text-4xl text-yellow-400" /> },
    { icon: <SiPython className="text-4xl text-blue-400" /> },
    { icon: <SiGit className="text-4xl text-orange-500" /> },
    { icon: <SiPostman className="text-4xl text-orange-400" /> },
    { icon: <SiNodedotjs className="text-4xl text-green-500" /> },
    { icon: <SiFigma className="text-4xl text-pink-500" /> },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="uppercase text-gray-500 tracking-widest mb-2">Introduction</p>
        <h2 className="text-4xl font-semibold text-gray-900">About me</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="src/assets/nazmul1.png" // ✅ Move image to public folder and use this path
            alt="Nazmul Hasan"
            className="w-64 h-72 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-2/3 text-left">
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            I am a <span className="font-semibold text-gray-800">Flutter Developer</span>{" "}
            with over 6 months of professional experience in cross-platform mobile
            application development. I specialize in building modern apps using{" "}
            <span className="font-semibold">GetX, Firebase, and clean architecture</span>.
            My goal is to design beautiful UIs and create seamless user experiences.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center border rounded-xl p-6 hover:shadow-md transition"
              >
                {card.icon}
                <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Tools I use</h3>
            <div className="flex flex-wrap items-center gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl hover:shadow-md transition"
                >
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;

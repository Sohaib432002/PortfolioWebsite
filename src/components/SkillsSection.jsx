import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import SkillModal from "./SkillModel";

const skillsData = [
  {
    title: "Python",
    description:
      "Expert in Python programming, data manipulation with Pandas & NumPy, and ML model building with frameworks.",
    extraDetails: [
      "Advanced OOP concepts",
      "Experience with APIs & Web Scraping",
      "Automation scripts using Python",
      "Strong debugging & optimization skills"
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Hands-on experience with ML algorithms, model evaluation, tuning, and real-world AI applications.",
    extraDetails: [
      "Supervised & Unsupervised Learning",
      "Model tuning using GridSearch & RandomSearch",
      "Worked with Scikit-Learn, TensorFlow, PyTorch",
      "Feature engineering and pipeline building"
    ],
  },
  {
    title: "Web Development",
    description:
      "Building responsive front-end and scalable back-end apps using ReactJS, HTML, CSS, JS & Django.",
    extraDetails: [
      "REST API development (Django/Express)",
      "Responsive UI with Tailwind CSS",
      "Reusable React Components",
      "Authentication & JWT secure login"
    ],
  },
  {
    title: "Data Science Projects",
    description:
      "Data visualization, analysis, dashboards, insights extraction using Python libraries.",
    extraDetails: [
      "Matplotlib, Seaborn, Plotly visualizations",
      "EDA for business insights",
      "Dashboard building with Streamlit/PowerBI",
      "Data cleaning & preprocessing"
    ],
  },
];


const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
];

const SkillsSectionOptimized = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);
  const [selectedSkill, setSelectedSkill] = useState(null);


  return (
    <section className="relative w-full min-h-screen bg-[#0a0f1a] text-white px-6 py-20 overflow-hidden">

      {/* Very Light AI Glow Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-20 w-40 h-40 bg-cyan-500/20 blur-2xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-500/20 blur-2xl rounded-full"></div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-300">
          My <span className="text-white">Skills</span>
        </h2>
        <p className="text-cyan-400 text-xl md:text-2xl">
          — AI • Web • Data Science —
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 relative z-10">

        {/* Skill Buttons */}
        <div className="flex flex-col gap-4 md:w-1/3">
          {skillsData.map((skill, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSkill(skill)}
              className={`px-6 py-4 rounded-xl font-semibold text-left transition-all duration-300 border ${
                activeSkill.title === skill.title
                  ? "bg-cyan-500 border-cyan-400 shadow-lg text-white"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        {/* Skill Card */}
        <motion.div
        key={activeSkill.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:w-2/3 bg-gray-900/80 border border-gray-700 rounded-2xl p-8 shadow-xl"
      >
        <h3 className="text-3xl font-bold text-cyan-400 mb-4">
          {activeSkill.title}
        </h3>
        <p className="text-gray-200 text-lg leading-relaxed mb-6">
          {activeSkill.description}
        </p>

        {/* OPEN MODAL BUTTON */}
        <button
          onClick={() => setSelectedSkill(activeSkill)}
          className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors shadow-md"
        >
          More Details <FiArrowRight />
        </button>
      </motion.div>

      {/* Modal Rendering */}
      <AnimatePresence>
        {selectedSkill && (
          <SkillModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
      </div>

      {/* Ultra Smooth Scrolling Logos */}
      <div className="mt-20 overflow-hidden">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Tech Logo"
              className="w-14 h-14 md:w-16 md:h-16 opacity-80 hover:opacity-100 transition-all"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSectionOptimized;

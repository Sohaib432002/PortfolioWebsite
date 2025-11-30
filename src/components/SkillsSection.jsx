import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import SkillModal from "./SkillModel";

const skillsData = [
  {
    title: "Python",
    description:
      "Expert in Python programming, data manipulation with Pandas & NumPy, and ML model building with frameworks.",
  },
  {
    title: "Machine Learning",
    description:
      "Hands-on experience with ML algorithms, model evaluation, tuning, and real-world AI applications.",
  },
  {
    title: "Web Development",
    description:
      "Building responsive front-end and scalable back-end apps using ReactJS, HTML, CSS, JS & Django.",
  },
  {
    title: "Data Science Projects",
    description:
      "Data visualization, analysis, dashboards, insights extraction using Python libraries.",
  },
];

const SkillsSectionSimple = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section className="w-full min-h-screen bg-[#0a0f1a] text-white px-3 py-12 sm:px-6 sm:py-16">

      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-1 text-cyan-400">
          My <span className="text-white">Skills</span>
        </h2>
        <p className="text-cyan-400 text-sm xs:text-base sm:text-lg">
          — AI • Web • Data Science —
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6">

        <div className="flex flex-col gap-2 sm:w-1/3">
          {skillsData.map((skill, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSkill(skill)}
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold text-left border text-sm xs:text-base sm:text-base transition-colors ${
                activeSkill.title === skill.title
                  ? "bg-cyan-500 border-cyan-400 text-white"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="sm:w-2/3 bg-gray-900 border border-gray-700 rounded-xl p-4 xs:p-5 sm:p-6 shadow-md">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
            {activeSkill.title}
          </h3>
          <p className="text-gray-200 text-sm xs:text-base sm:text-base leading-relaxed mb-3">
            {activeSkill.description}
          </p>

          <button
            onClick={() => setSelectedSkill(activeSkill)}
            className="inline-flex items-center gap-1 xs:gap-2 bg-cyan-500 text-white px-3 py-2 xs:px-4 xs:py-2.5 rounded-lg font-medium hover:bg-cyan-400 transition-colors text-sm xs:text-base"
          >
            More Details <FiArrowRight />
          </button>
        </div>
      </div>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
};

export default SkillsSectionSimple;

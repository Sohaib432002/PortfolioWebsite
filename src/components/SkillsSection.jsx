import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import SkillModal from './SkillModel'

const skillsData = [
  {
    title: 'Machine Learning & AI',
    description:
      'Strong interest in AI and machine learning: predictive modeling, model evaluation, TensorFlow, and turning trained models into usable applications.',
  },
  {
    title: 'Python',
    description:
      'Python for statistical modeling, data analysis with Pandas and NumPy, and ML-backed web applications.',
  },
  {
    title: 'Data Science & Math',
    description:
      'Statistical analysis, probability, numerical methods, optimization, and data visualization from a mathematics background.',
  },
  {
    title: 'Full-Stack Development',
    description:
      'React and Django applications, REST APIs, JWT authentication, and dashboards that present model and analytics results.',
  },
]

const skillsDetailedData = [
  {
    title: 'Machine Learning & AI',
    description:
      'Hands-on experience applying Python and TensorFlow to predictive models, including a final-year research project on HPV transmission dynamics and cervical cancer risk prediction. Comfortable with model evaluation, mathematical modeling, and serving predictions through web interfaces.',
  },
  {
    title: 'Python',
    description:
      'Python for data analysis, statistical modeling, and machine learning workflows using Pandas, NumPy, and TensorFlow. Experience writing backend services that expose model predictions through REST APIs.',
  },
  {
    title: 'Data Science & Math',
    description:
      'BS Mathematics with a Data Science specialization. Coursework and project work in probability, statistics, numerical methods, optimization, data visualization, and converting mathematical models into software.',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Building React frontends and Django backends for dashboards and ML apps, including JWT authentication, REST APIs, and responsive interfaces that display live prediction and analytics results.',
  },
]
const SkillsSectionSimple = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0])
  const [activeSkillDetailed, setActiveSkillDetailed] = useState(skillsDetailedData[0])
  const [selectedSkill, setSelectedSkill] = useState(null)
  return (
    <section className="w-full   bg-[#0a0f1a] text-white px-3 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl pointer-events-none xs:text-3xl sm:text-4xl font-extrabold mb-1 text-cyan-400">
          My <span className="text-white">Skills</span>
        </h2>
        <p className="text-cyan-400 text-sm pointer-events-none xs:text-base sm:text-lg">
          — AI / ML • Data Science • Full-Stack —
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex flex-col gap-2 sm:w-1/3">
          {skillsData.map((skill, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSkill(skill)
                setActiveSkillDetailed(skillsDetailedData[idx])
              }}
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold text-left border text-sm xs:text-base sm:text-base transition-colors ${
                activeSkill.title === skill.title
                  ? 'bg-cyan-500 border-cyan-400 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="sm:w-2/3  bg-gray-900 border border-gray-700 rounded-xl p-4 xs:p-5 sm:p-6 shadow-md">
          <h3 className="text-xl pointer-events-none xs:text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
            {activeSkill.title}
          </h3>
          <p className="text-gray-200 pointer-events-none text-sm xs:text-base sm:text-base leading-relaxed mb-3">
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
        <SkillModal skill={activeSkillDetailed} onClose={() => setSelectedSkill(null)} />
      )}
    </section>
  )
}

export default SkillsSectionSimple

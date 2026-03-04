import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import SkillModal from './SkillModel'

const skillsData = [
  {
    title: 'Python',
    description:
      'Expert in Python programming, data manipulation with Pandas & NumPy, and ML model building with frameworks.',
  },
  {
    title: 'Machine Learning',
    description:
      'Hands-on experience with ML algorithms, model evaluation, tuning, and real-world AI applications.',
  },
  {
    title: 'Web Development',
    description:
      'Building responsive front-end and scalable back-end apps using ReactJS, HTML, CSS, JS & Django.',
  },
  {
    title: 'Data Science Projects',
    description:
      'Data visualization, analysis, dashboards, insights extraction using Python libraries.',
  },
]

const skillsDetailedData = [
  {
    title: 'Python',
    description:
      'Strong command of Python programming with hands-on experience in data manipulation and analysis using Pandas and NumPy. Skilled in writing clean, efficient, and scalable code. Experience in building data-driven applications, implementing mathematical models, and developing machine learning solutions using frameworks like Scikit-learn and TensorFlow.',
  },
  {
    title: 'Machine Learning',
    description:
      'Practical experience in implementing supervised and unsupervised machine learning algorithms including regression, classification, clustering, and model optimization. Skilled in data preprocessing, feature engineering, model evaluation, hyperparameter tuning, and performance analysis for real-world AI-based applications.',
  },
  {
    title: 'Web Development',
    description:
      'Experienced in developing responsive and user-friendly web applications using ReactJS, HTML, CSS, and JavaScript for front-end development, along with Django for building secure and scalable back-end systems. Capable of integrating APIs, handling databases, and deploying full-stack applications.',
  },
  {
    title: 'Data Science Projects',
    description:
      'Hands-on experience in end-to-end data science projects including data cleaning, exploratory data analysis (EDA), visualization, dashboard creation, and extracting meaningful insights using Python libraries such as Matplotlib, Seaborn, and Plotly. Able to transform raw data into actionable results.',
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
          — AI • Web • Data Science —
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

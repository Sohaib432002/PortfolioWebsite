import {
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { SiBootstrap, SiDjango, SiNumpy, SiPandas, SiTailwindcss } from 'react-icons/si'

const ProfileImage = `${process.env.PUBLIC_URL}/assets/profile pic (1).png`

const About = () => {
  const icons = [
    { icon: FaPython, color: 'text-cyan-400' },
    { icon: FaJsSquare, color: 'text-yellow-400' },
    { icon: FaReact, color: 'text-blue-400' },
    { icon: SiDjango, color: 'text-green-400' },
    { icon: FaHtml5, color: 'text-orange-500' },
    { icon: FaCss3Alt, color: 'text-blue-600' },
    { icon: SiBootstrap, color: 'text-purple-400' },
    { icon: SiTailwindcss, color: 'text-sky-400' },
    { icon: FaDatabase, color: 'text-green-500' },
    { icon: SiPandas, color: 'text-blue-400' },
    { icon: SiNumpy, color: 'text-yellow-300' },
    { icon: FaGithub, color: 'text-gray-300' },
  ]

  return (
    <section className="relative max-w-full pointer-events-none min-h-screen flex items-center justify-center py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="relative items-center z-10 max-w-7xl mx-auto flex flex-col sm:items-center md:flex-row items-start justify-between gap-10 sm:gap-14">
        {/* Left Section */}
        <div className="flex-1 bg-gray-900/60 border border-cyan-400/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_40px_-10px_rgba(0,255,255,0.4)] text-white relative">
          <img
            src={ProfileImage}
            alt="Profile"
            className="absolute -top-10 right-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 shadow-md bg-gray-800 p-2"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
            <span className="text-cyan-400 drop-shadow">About</span> Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            I am <span className="text-cyan-400 font-semibold">Muhammad Sohaib Maqsood</span>, a
            <span className="text-cyan-400 font-semibold"> Data Scientist</span> and
            <span className="text-cyan-400 font-semibold"> Machine Learning Practitioner</span>
            with a strong foundation in mathematics and analytical problem-solving.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            My work focuses on building intelligent systems, developing data-driven solutions, and
            designing scalable web applications. I combine mathematical rigor with modern
            technologies to transform complex data into actionable insights.
          </p>

          {/* Education Section */}
          <div className="bg-gray-800/50 border border-cyan-400/50 rounded-2xl p-4 sm:p-6 shadow-md">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-4">
              Education & Professional Development
            </h3>

            <ul className="text-gray-300 space-y-4 text-sm sm:text-base md:text-lg">
              <li>
                <span className="font-semibold text-white">Bachelor of Science in Mathematics</span>{' '}
                — Namal University, Mianwali (Expected 2026)
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Specialized in Discrete Geometry, Elliptic Geometry, Applied Mathematics, and
                  advanced quantitative methods with applications in Data Science and Artificial
                  Intelligence.
                </p>
              </li>

              <li>
                <span className="font-semibold text-white">
                  Data Science & Machine Learning Certifications
                </span>{' '}
                — Professional Online Programs
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Completed hands-on training in Python, Pandas, NumPy, Scikit-learn, data
                  visualization, and applied machine learning techniques.
                </p>
              </li>

              <li>
                <span className="font-semibold text-white">Applied Machine Learning Projects</span>{' '}
                — Kaggle & Independent Research
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Developed predictive models, regression and classification systems, and
                  mathematical optimization solutions for real-world datasets.
                </p>
              </li>

              <li>
                <span className="font-semibold text-white">Industry Experience</span> — Naxium
                Software & Forage
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Contributed to backend API development, interactive dashboards, and analytical
                  reporting systems within professional environments.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (Tech Icons) */}
        <div className="flex-1  grid grid-cols-3  right-section gap-4 sm:gap-1 md:gap-8 place-items-center">
          {icons.map(({ icon: Icon, color }, i) => (
            <div
              key={i}
              className="bg-gray-800/40 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/30"
            >
              <Icon className={`text-3xl sm:text-4xl md:text-5xl ${color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

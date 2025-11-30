import {
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact
} from "react-icons/fa";
import {
  SiBootstrap,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiTailwindcss
} from "react-icons/si";

const ProfileImage = `${process.env.PUBLIC_URL}/assets/profile pic (1).png`;
const About = () => {
  const icons = [
    { icon: FaPython, color: "text-cyan-400" },
    { icon: FaJsSquare, color: "text-yellow-400" },
    { icon: FaReact, color: "text-blue-400" },
    { icon: SiDjango, color: "text-green-400" },
    { icon: FaHtml5, color: "text-orange-500" },
    { icon: FaCss3Alt, color: "text-blue-600" },
    { icon: SiBootstrap, color: "text-purple-400" },
    { icon: SiTailwindcss, color: "text-sky-400" },
    { icon: FaDatabase, color: "text-green-500" },
    { icon: SiPandas, color: "text-blue-400" },
    { icon: SiNumpy, color: "text-yellow-300" },
    { icon: FaGithub, color: "text-gray-300" },
  ];

  return (
    <section className="relative max-w-full min-h-screen flex items-center justify-center py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:items-center md:flex-row items-start justify-between gap-10 sm:gap-14">

        <div className="flex-1 bg-gray-900/60 border border-cyan-400/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_40px_-10px_rgba(0,255,255,0.4)] text-white relative">

          <img
            src={ProfileImage}
            alt="Profile"
            className="absolute -top-10 right-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 shadow-md bg-gray-800 p-2"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
            <span className="text-cyan-400 drop-shadow">About</span> Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 sm:mb-4">
            I am <span className="text-cyan-400 font-semibold">Muhammad Sohaib Maqsood</span>, a skilled
            <span className="text-cyan-400 font-semibold"> Data Scientist</span>,
            <span className="text-cyan-400 font-semibold"> Machine Learning Enthusiast</span>,
            and <span className="text-cyan-400 font-semibold"> Web Developer</span>.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            I enjoy creating intelligent systems, visualizing data, and building useful applications using modern tools and technologies.
          </p>

          <div className="bg-gray-800/50 border border-cyan-400/50 rounded-2xl p-4 sm:p-6 shadow-md">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-3 sm:mb-4">Education</h3>
            <ul className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
              <li>
                <span className="font-semibold text-white">BS Mathematics</span> — Namal University, Mianwali (Expected 2026)
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Focus on Discrete Geometry, Elliptic Geometry, Applied Mathematics, Data Science, and AI applications in Finance.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">AI & Data Science Courses</span> — Online Certifications
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Completed courses covering Python, Machine Learning, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and AI + Finance projects.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">Machine Learning Projects</span> — Kaggle & Personal Research
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Projects on predictive modeling, data visualization, regression, classification, and advanced mathematical algorithms.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">Internships & Practical Experience</span> — Naxium Software & Forage
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Experience in web development, dashboards, backend APIs, and data analysis.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">Additional Skills</span> — Self-Learning & Projects
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Python programming, data visualization, AI + Finance, advanced mathematics applications, and personal portfolio projects.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {icons.map(({ icon: Icon, color }, i) => (
            <div
              key={i}
              className="bg-gray-800/40 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105"
            >
              <Icon className={`text-3xl sm:text-4xl md:text-5xl ${color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

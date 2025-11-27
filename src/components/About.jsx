import { motion } from "framer-motion";
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

const ProfileImage = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";

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
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-14">

        {/* LEFT ABOUT CARD */}
        <motion.div
          className="flex-1 bg-gray-900/60 border border-cyan-400/60 rounded-3xl p-10 md:p-12 shadow-[0_0_40px_-10px_rgba(0,255,255,0.4)] text-white relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* PROFILE IMAGE */}
          <img
            src={ProfileImage}
            alt="Profile"
            className="absolute -top-12 right-12 w-32 h-32 rounded-full border-4 border-cyan-400 shadow-md bg-gray-800 p-2"
          />

          {/* ABOUT TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-cyan-400 drop-shadow">About</span> Me
          </h2>

          {/* INTRODUCTION */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            I am <span className="text-cyan-400 font-semibold">Muhammad Sohaib Maqsood</span>, a skilled
            <span className="text-cyan-400 font-semibold"> Data Scientist</span>,
            <span className="text-cyan-400 font-semibold"> Machine Learning Enthusiast</span>,
            and <span className="text-cyan-400 font-semibold"> Web Developer</span>.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            I enjoy creating intelligent systems, visualizing data, and building useful applications using modern tools and technologies.
          </p>

          {/* EDUCATION */}
          <div className="bg-gray-800/50 border border-cyan-400/50 rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
            <ul className="text-gray-300 space-y-3 text-base md:text-lg">
              <li>
                <span className="font-semibold text-white">BS Mathematics</span> — Namal University, Mianwali (Expected 2026)
                <p className="text-gray-400 text-sm mt-1 ml-2">
                  Focus on Discrete Geometry, Elliptic Geometry, Applied Mathematics, Data Science, and AI applications in Finance.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">AI & Data Science Courses</span> — Online Certifications
                <p className="text-gray-400 text-sm mt-1 ml-2">
                  Completed courses covering Python, Machine Learning, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and AI + Finance projects.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">Machine Learning Projects</span> — Kaggle & Personal Research
                <p className="text-gray-400 text-sm mt-1 ml-2">
                  Projects on predictive modeling, data visualization, regression, classification, and advanced mathematical algorithms.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">Internships & Practical Experience</span> — Naxium Software & Forage
                <p className="text-gray-400 text-sm mt-1 ml-2">
                  Experience in web development, dashboards, backend APIs, and data analysis.
                </p>
              </li>
              <li>
                <span className="font-semibold text-white">Additional Skills</span> — Self-Learning & Projects
                <p className="text-gray-400 text-sm mt-1 ml-2">
                  Python programming, data visualization, AI + Finance, advanced mathematics applications, and personal portfolio projects.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT ICON GRID */}
        <motion.div
          className="flex-1 grid grid-cols-3 sm:grid-cols-3 gap-6 md:gap-8 place-items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {icons.map(({ icon: Icon, color }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              className="bg-gray-800/40 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-2xl shadow-lg border border-gray-700 transition-all duration-300"
            >
              <Icon className={`text-5xl ${color}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

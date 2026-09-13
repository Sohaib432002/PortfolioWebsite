import {
  FaBrain,
  FaBroom,
  FaChartBar,
  FaCloud,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaServer,
  FaSpider,
} from 'react-icons/fa'
import { SiDjango, SiNumpy, SiPandas, SiRedux, SiTailwindcss, SiTensorflow, SiTypescript } from 'react-icons/si'
import { SITE } from '../data/site'
const ProfileImage = SITE.profileImage
const AboutSection = () => {
  return (
    <section className="relative w-full  min-h-screen bg-gradient-to-b from-[#0a0f2a] to-[#041028] text-white py-20 px-6 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto  relative z-10">
        <h2 className="text-center text-5xl pointer-events-none  md:text-7xl font-extrabold mb-10 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
            About
          </span>
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-14">
          <div className="text-xl pointer-events-none md:text-2xl text-gray-300 font-medium mt-3">
            — Everything You Need To Know About Me —
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="profile-ring w-60 h-60 shrink-0">
            <img
              src={ProfileImage}
              alt="Muhammad Sohaib Maqsood"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Muhammad Sohaib Maqsood
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am an <span className="text-cyan-400 font-semibold">AI / Machine Learning Engineer</span>{' '}
              and <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> based in
              Islamabad, Pakistan. My strongest interest is AI and machine learning — from
              mathematical modeling and TensorFlow prediction models to deploying them in React and
              Django applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <p>
                <strong className="text-cyan-400">📍 Location:</strong> Islamabad, Pakistan
              </p>
              <p>
                <strong className="text-cyan-400">📞 Phone:</strong>{' '}
                <a href="tel:+923191057875" className="hover:text-cyan-300">
                  +92 319 1057875
                </a>
              </p>
              <p>
                <strong className="text-cyan-400">📧 Email:</strong>{' '}
                <a
                  href="mailto:sohaibmaqsoodsohaibmaqsood@gmail.com"
                  className="break-all hover:text-cyan-300"
                >
                  sohaibmaqsoodsohaibmaqsood@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-cyan-400">🎓 Degree:</strong> BS Mathematics (Data Science),
                Namal University (2022 – 2026)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-12"></div>

        <div className="mb-16 pointer-events-none">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">🎓 Education</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I completed a{' '}
            <span className="text-cyan-400 font-semibold">
              BS Mathematics (Data Science Specialization)
            </span>{' '}
            from Namal University (2022 – 2026), CGPA 3.0/4.0. Relevant coursework includes Machine
            Learning, Mathematical Modelling, Probability & Statistics, Data Visualization, Numerical
            Methods, and Optimization.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold pointer-events-none text-cyan-400 mb-6">🛠 Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: <FaBrain />, label: 'Machine Learning' },
              { icon: <SiTensorflow />, label: 'TensorFlow' },
              { icon: <FaBrain />, label: 'Predictive Modeling' },
              { icon: <FaPython />, label: 'Python' },
              { icon: <SiPandas />, label: 'Pandas' },
              { icon: <SiNumpy />, label: 'NumPy' },
              { icon: <FaChartBar />, label: 'Data Visualization' },
              { icon: <FaBroom />, label: 'Data Cleaning' },
              { icon: <FaSpider />, label: 'Web Scraping' },
              { icon: <FaReact />, label: 'React JS' },
              { icon: <SiTypescript />, label: 'TypeScript' },
              { icon: <FaJs />, label: 'JavaScript' },
              { icon: <SiDjango />, label: 'Django' },
              { icon: <SiDjango />, label: 'Django REST Framework' },
              { icon: <FaDatabase />, label: 'SQL' },
              { icon: <FaHtml5 />, label: 'HTML' },
              { icon: <FaCss3Alt />, label: 'CSS' },
              { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
              { icon: <FaGitAlt />, label: 'Git' },
              { icon: <FaGithub />, label: 'GitHub' },
              { icon: <FaServer />, label: 'REST APIs' },
              { icon: <SiRedux />, label: 'Redux' },
              { icon: <FaCloud />, label: 'Deployment' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 shadow-lg backdrop-blur-md hover:scale-105 transition-transform"
              >
                <div className="text-cyan-400 text-4xl">{item.icon}</div>
                <span className="text-gray-300 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 pointer-events-none">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">✨ Hobbies & Interests</h3>

          <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed">
            <li>AI, machine learning, and predictive modeling</li>
            <li>Connecting ML models to web applications</li>
            <li>Data visualization and applied mathematics</li>
            <li>Reading Islamic knowledge</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

import { FaBrain, FaBroom, FaChartBar, FaCloud, FaCss3Alt, FaDatabase, FaFlask, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLaptopCode, FaPython, FaReact, FaServer, FaSpider } from "react-icons/fa";
import { SiDjango, SiNumpy, SiPandas, SiRedux, SiTailwindcss } from "react-icons/si";
const ProfileImage = `${process.env.PUBLIC_URL}/assets/profile pic (1).png`;
const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0f2a] to-[#041028] text-white py-20 px-6 overflow-hidden">

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-10 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
            About
          </span>
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-14">
          <div className="text-xl md:text-2xl text-gray-300 font-medium mt-3">
            — Everything You Need To Know About Me —
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-60 h-60 rounded-2xl shadow-xl border-2 border-cyan-400 overflow-hidden bg-white/10 backdrop-blur-md">
            <img
              src={ProfileImage}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Muhammad Sohaib Maqsood
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a passionate <span className="text-cyan-400 font-semibold">Mathematician</span>, <span className="text-cyan-400 font-semibold">Data Scientist</span>, and <span className="text-cyan-400 font-semibold">Web Developer</span>
              from  Mianwali, Pakistan.
              I love building intelligent systems, analyzing complex data, and
              creating beautiful and smart interfaces using modern technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <p><strong className="text-cyan-400">📍 Address:</strong> Near PAF Colony, Talagang Road, Mianwali</p>
              <p><strong className="text-cyan-400">📞 Phone:</strong> 03191057875</p>
              <p><strong className="text-cyan-400">📧 Email:</strong> sohaibmaqsoodsohaibmaqsood@gmail.com</p>
              <p><strong className="text-cyan-400">🎓 Degree:</strong> BS Mathematics (Namal University)</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-12"></div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">🎓 Education</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am pursuing a <span className="text-cyan-400 font-semibold">Bachelor's in Mathematics</span> from Namal University.
            My academic focus includes Discrete Geometry, Linear Algebra,
            Probability, and Applied Mathematics. I actively combine Math with
            AI, Data Science, and Machine Learning.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">🛠 Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            {[
              { icon: <FaPython />, label: "Python" },
              { icon: <SiPandas />, label: "Pandas" },
              { icon: <SiNumpy />, label: "NumPy" },
              { icon: <FaBrain />, label: "Machine Learning" },
              { icon: <FaBrain />, label: "Deep Learning" },
              { icon: <FaChartBar />, label: "Data Visualization" },
              { icon: <FaBroom />, label: "Data Cleaning" },
              { icon: <FaSpider />, label: "Web Scraping" },
              { icon: <FaReact />, label: "React JS" },
              { icon: <FaJs />, label: "JavaScript" },
              { icon: <SiDjango />, label: "Django" },
              { icon: <SiDjango />, label: "Django REST Framework" },
              { icon: <FaDatabase />, label: "SQL" },
              { icon: <FaDatabase />, label: "Databases" },
              { icon: <FaHtml5 />, label: "HTML" },
              { icon: <FaCss3Alt />, label: "CSS" },
              { icon: <SiTailwindcss />, label: "Tailwind CSS" },
              { icon: <FaGitAlt />, label: "Git" },
              { icon: <FaGithub />, label: "GitHub" },
              { icon: <FaServer />, label: "API Development" },
              { icon: <FaFlask />, label: "Flask" },
              { icon: <SiRedux />, label: "Redux" },
              { icon: <FaLaptopCode />, label: "UI / UX" },
              { icon: <FaCloud />, label: "Deployment" },
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

        <div className="mb-10">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">✨ Hobbies & Interests</h3>

          <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed">
            <li>Exploring AI & Machine Learning</li>
            <li>Web Development (React + Django)</li>
            <li>Data Visualization & Analysis</li>
            <li>Reading Islamic Knowledge</li>
            <li>Watching tech videos & learning new tools</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

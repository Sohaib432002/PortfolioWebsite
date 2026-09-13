import {
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { SiDjango, SiNumpy, SiPandas, SiTailwindcss, SiTensorflow } from 'react-icons/si'
import { SITE } from '../data/site'

const ProfileImage = SITE.profileImage

const About = () => {
  const icons = [
    { icon: SiTensorflow, color: 'text-orange-400' },
    { icon: FaPython, color: 'text-cyan-400' },
    { icon: FaJsSquare, color: 'text-yellow-400' },
    { icon: FaReact, color: 'text-blue-400' },
    { icon: SiDjango, color: 'text-green-400' },
    { icon: FaHtml5, color: 'text-orange-500' },
    { icon: FaCss3Alt, color: 'text-blue-600' },
    { icon: SiTailwindcss, color: 'text-sky-400' },
    { icon: FaDatabase, color: 'text-green-500' },
    { icon: SiPandas, color: 'text-blue-400' },
    { icon: SiNumpy, color: 'text-yellow-300' },
    { icon: FaGithub, color: 'text-gray-300' },
  ]

  return (
    <section
      id="about"
      className="relative max-w-full pointer-events-none min-h-screen flex items-center justify-center py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="relative items-center z-10 max-w-7xl mx-auto flex flex-col sm:items-center md:flex-row items-start justify-between gap-10 sm:gap-14">
        {/* Left Section */}
        <div className="flex-1 bg-gray-900/60 border border-cyan-400/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_40px_-10px_rgba(0,255,255,0.4)] text-white relative">
          <div className="profile-ring absolute -top-10 right-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
            <img
              src={ProfileImage}
              alt="Muhammad Sohaib Maqsood"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
            <span className="text-cyan-400 drop-shadow">About</span> Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            I am <span className="text-cyan-400 font-semibold">Muhammad Sohaib Maqsood</span>, an
            <span className="text-cyan-400 font-semibold"> AI / Machine Learning Engineer</span> and
            <span className="text-cyan-400 font-semibold"> Full-Stack Developer</span> with a BS in
            Mathematics (Data Science Specialization) from Namal University.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            I am most interested in AI and machine learning — building predictive models, connecting
            them to real web applications, and turning mathematical ideas into working software. My
            final-year project models HPV transmission dynamics and cervical cancer risk using
            TensorFlow, React, and Django.
          </p>

          {/* Education Section */}
          <div className="bg-gray-800/50 border border-cyan-400/50 rounded-2xl p-4 sm:p-6 shadow-md">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-4">
              Education & Professional Development
            </h3>

            <ul className="text-gray-300 space-y-4 text-sm sm:text-base md:text-lg">
              <li>
                <span className="font-semibold text-white">
                  BS Mathematics (Data Science Specialization)
                </span>{' '}
                — Namal University, Mianwali (2022 – 2026)
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  CGPA 3.0/4.0. Coursework includes Machine Learning, Mathematical Modelling,
                  Probability & Statistics, Data Visualization, Numerical Methods, and Optimization.
                </p>
              </li>

              <li>
                <span className="font-semibold text-white">Focus</span> — AI / Machine Learning
                Engineer roles
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Applying Python and TensorFlow to predictive modeling, with additional experience
                  building REST APIs and interfaces in Django and React.
                </p>
              </li>

              <li>
                <span className="font-semibold text-white">Certifications</span> — Saylor Academy,
                Forage, Scholarhat, Naxium Software, OEC & ICMBD
                <p className="text-gray-400 text-xs sm:text-sm mt-1 ml-2">
                  Python for Data Science, British Airways Data Science Simulation, ReactJS
                  Foundation, internship, and soft skills certification.
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

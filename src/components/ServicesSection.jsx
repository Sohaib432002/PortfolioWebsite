import { motion } from 'framer-motion'
import { FaBrain, FaDatabase, FaPython, FaReact } from 'react-icons/fa'
import { SiScikitlearn, SiTensorflow } from 'react-icons/si'

const ServicesSection = () => {
  const services = [
    {
      icon: <FaPython />,
      title: 'Python Programming',
      description:
        'Strong Python skills for data analysis, automation, and AI/ML projects. Proficient with Pandas, NumPy, and more.',
    },
    {
      icon: <SiScikitlearn />,
      title: 'Machine Learning & AI',
      description:
        'Experience with regression, classification, clustering, neural networks, and TensorFlow for predictive analytics.',
    },
    {
      icon: <FaReact />,
      title: 'Web Development',
      description:
        'Building responsive websites and web apps using ReactJS, HTML, CSS, JS, and integrating backend with Django.',
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      description:
        'Designing and managing databases, writing efficient SQL queries, and ensuring proper data handling.',
    },
    {
      icon: <FaBrain />,
      title: 'Mathematics & Analytics',
      description:
        'Applied mathematics expertise, including linear algebra, probability, discrete geometry, and AI/DS integration.',
    },
    {
      icon: <SiTensorflow />,
      title: 'AI Integration',
      description:
        'Creating intelligent solutions, AI-based automation, and interactive AI demos using modern tools.',
    },
  ]

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0f2a] to-[#041028] text-white py-12 sm:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* 🔥 Optimized blur (lighter for mobile) */}
      <div className="absolute top-10 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 blur-[60px] sm:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-4 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-blue-700/10 blur-[70px] sm:blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl my-10 pointer-events-none sm:text-4xl md:text-5xl font-extrabold text-center mb-6 sm:mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Services
          </span>{' '}
          / What I Offer
        </h2>

        <div className="text-sm pointer-events-none sm:text-base md:text-lg text-gray-300 font-medium text-center mb-10">
          — Professional Skills & Services I Provide —
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              // ✅ Animate only once
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              // ✅ Remove heavy hover shadow on mobile
              whileHover={{
                scale: 1.03,
              }}
              className="flex flex-col items-center text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 shadow-md backdrop-blur-sm transition-transform duration-300"
            >
              <div className="text-cyan-400 text-4xl sm:text-5xl mb-3">{service.icon}</div>

              <h3 className="text-lg sm:text-xl pointer-events-none md:text-2xl font-bold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-300 pointer-events-none text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

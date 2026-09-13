import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SITE } from '../data/site'

const Footer = () => {
  const pageLinks = [
    { label: 'Home', to: '/' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ]

  const socialLinks = [
    { icon: <FiLinkedin size={24} />, link: SITE.linkedin, label: 'LinkedIn' },
    { icon: <FiGithub size={24} />, link: SITE.github, label: 'GitHub' },
    { icon: <FiFacebook size={24} />, link: SITE.facebook, label: 'Facebook' },
  ]

  return (
    <footer className="relative w-full bg-gradient-to-t from-[#040914] to-[#0a0f20] text-gray-300 px-6 py-12 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-bold text-cyan-400 cursor-default"
        >
          {SITE.shortName}
        </motion.div>

        <div className="flex gap-6 flex-wrap justify-center">
          {pageLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to={link.to} className="font-medium hover:text-cyan-400 transition-colors">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ scale: 1.2, color: '#00ffff' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-gray-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] pointer-events-none bg-white/10 my-8 relative z-10"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center pointer-events-none text-gray-500 relative z-10"
      >
        &copy; {new Date().getFullYear()} {SITE.shortName}. All rights reserved.
      </motion.div>
    </footer>
  )
}

export default Footer

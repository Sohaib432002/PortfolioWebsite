import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-t from-[#040914] to-[#0a0f20] text-gray-300 px-6 py-12 overflow-hidden">

      {/* AI Glow Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-bold text-cyan-400 cursor-default"
        >
          Sohaib Maqsood
        </motion.div>

        {/* Quick Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          {["Home", "Skills", "Projects", "Contact"].map((link, idx) => (
            <motion.a
              key={idx}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -3, scale: 1.1, color: "#00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-medium hover:text-cyan-400 transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: <FiLinkedin size={24} />, link: "https://www.linkedin.com/in/sohaibmaqsood/" },
            { icon: <FiGithub size={24} />, link: "https://github.com/sohaibmaqsood" },
            { icon: <FiTwitter size={24} />, link: "https://twitter.com/yourhandle" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: "#00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 my-8 relative z-10"></div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 relative z-10"
      >
        &copy; {new Date().getFullYear()} Sohaib Maqsood. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

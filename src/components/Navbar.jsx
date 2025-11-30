import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Certificates", path: "/Achivements" },
    { label: "Services", path: "/Services" },
    { label: "Contact", path: "/contact" },
    { label: "FAQs", path: "/FAQ" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-cyan-500 to-blue-700 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-2xl md:text-3xl font-extrabold text-white cursor-pointer select-none"
        >
          Sohaib<span className="text-cyan-300">.</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Link
                to={item.path}
                className="text-white font-semibold hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </Link>
              <motion.div
                className="absolute left-0 bottom-0 h-1 bg-cyan-300 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} className="text-white" /> : <FiMenu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden bg-gradient-to-b from-cyan-600 to-blue-700 overflow-hidden"
      >
        <ul className="flex flex-col px-6 py-6 space-y-4">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className="text-white font-semibold hover:text-cyan-300 block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;

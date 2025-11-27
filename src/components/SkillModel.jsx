// Modal Component
import { motion } from "framer-motion";

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-white w-[90%] max-w-xl p-8 rounded-2xl shadow-2xl border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          {skill.title}
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {skill.description}
        </p>
        {skill.extraDetails && skill.extraDetails.map((item, idx) => (
  <li key={idx} className="text-gray-300 mb-2">{item}</li>
))}

        {/* Additional Content */}

        <button
          onClick={onClose}
          className="mt-4 bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition shadow-md"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SkillModal

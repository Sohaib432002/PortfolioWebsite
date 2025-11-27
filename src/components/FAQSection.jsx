import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What technologies do I specialize in?",
    answer: "I specialize in Python, Data Science, Machine Learning, AI/ML integration, ReactJS, Django, and Web Development."
  },
  {
    question: "How can you contact me?",
    answer: "You can contact me via email at sohaibmaqsoodsohaibmaqsood@gmail.com, or phone at 03191057875. I also respond via LinkedIn and GitHub messages."
  },
  {
    question: "What projects have I done?",
    answer: "I have worked on AI/ML projects, Data Analysis projects, Web Development projects (ReactJS + Django), and Interactive Dashboards using Python libraries like Matplotlib, Seaborn, and Plotly."
  },
  {
    question: "Do I offer AI-integrated solutions?",
    answer: "Yes! I build intelligent systems, AI-powered chatbots, predictive models, and data-driven web applications."
  },
  {
    question: "Can I assist in web development projects?",
    answer: "Absolutely! I can handle full-stack development using ReactJS for frontend and Django for backend, with database integration and deployment support."
  },
  {
    question: "What are my hobbies and interests?",
    answer: "Exploring AI & ML, Data Visualization, Web Development, reading Islamic knowledge, and keeping up with tech innovations."
  },
  {
    question: "What kind of support do I provide?",
    answer: "I provide consultation, project guidance, technical mentoring, and implementation support in AI, ML, Data Science, and Web Development."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-6 bg-gradient-to-b from-[#0a0f2a] to-[#041028] text-white overflow-hidden">
      {/* Background AI Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full"></div>

      {/* Container */}
      <div className="max-w-5xl mx-auto relative z-10">
<h2 className="text-center text-5xl md:text-7xl font-extrabold mb-10 tracking-tight">
  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
    FAQ
  </span>{" "}
  <span className="text-white/90">/ Knowledge Base</span>
</h2>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-cyan-400">
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mt-3">
            — Answers to Your Most Asked Questions —
          </div>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium hover:bg-cyan-500/20 transition-colors"
              >
                {item.question}
                <span>
                  {activeIndex === index ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-300 text-base leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Extra AI Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center text-gray-400 italic"
        >
          🤖 All answers are curated intelligently to provide the most relevant information about my skills, projects, and services.
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

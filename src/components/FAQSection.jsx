import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const faqData = [
  {
    question: "What technologies do I specialize in?",
    answer: "My main interest is AI and machine learning, along with Python, TensorFlow, data science, React, and Django."
  },
  {
    question: "How can you contact me?",
    answer: "You can email me at sohaibmaqsoodsohaibmaqsood@gmail.com, call or WhatsApp +92 319 1057875, or reach me on LinkedIn and GitHub."
  },
  {
    question: "What projects have I done?",
    answer: "Featured work includes HPV transmission dynamics and risk prediction, VisuSign traffic-sign recognition, a gallstone clinical dashboard, a smart finance dashboard, a YouTube clone, and a client portfolio website."
  },
  {
    question: "Do I work with machine learning in web apps?",
    answer: "Yes. That is a core interest. I connect trained models to web interfaces, including the HPV prediction workflow and VisuSign traffic-sign recognition."
  },
  {
    question: "Can I assist in web development projects?",
    answer: "Yes. I build React frontends and Django backends, especially for dashboards and applications that present ML or analytics results."
  },
  {
    question: "What are my hobbies and interests?",
    answer: "AI and machine learning, predictive modeling, data visualization, applied mathematics, and reading Islamic knowledge."
  },
  {
    question: "What kind of support do I provide?",
    answer: "I can help with AI/ML project implementation, data science workflows, and full-stack web applications around those models."
  }
];


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0a0f2a] to-[#041028] text-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl my-10 sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-cyan-400">
          FAQ  <span className="text-white"> / Knowledge Base </span>
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 mb-12">
          — Answers to your most frequently asked questions —
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 colr rounded-xl border border-white/10 shadow-md overflow-hidden transition-colors hover:bg-cyan-500/10"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-white flex justify-between items-center p-4 text-left text-base sm:text-lg md:text-xl font-medium"
              >
                {item.question}
                <span>
                  {activeIndex === index ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
                </span>
              </button>

              <div
                className={`px-4 text-gray-300 text-sm sm:text-base md:text-base leading-relaxed overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  paddingBottom: activeIndex === index ? "16px" : "0",
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;


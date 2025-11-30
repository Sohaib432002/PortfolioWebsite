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


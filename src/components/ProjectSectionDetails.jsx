const ProjectsSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white">

      {/* Heading */}
      <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-10 tracking-tight">
  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
    My
  </span>{" "}
  <span className="text-white/90">Projects</span>
</h2>


      <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto mb-16">
        These are my top projects including Machine Learning, Web Development,
        Full-Stack applications, API tools, dashboards and Python-based tools.
      </p>

      {/* Projects Container */}
      <div className="space-y-16 max-w-6xl mx-auto">

        {/* Project 1: data-scrap-ML_proj */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl hover:scale-[1.01] transition-all duration-500">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">Data Scraping + Machine Learning Project</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            A complete end-to-end project where I scraped real-world data,
            cleaned it, preprocessed it, and applied various Machine Learning
            models. The system includes visualization, feature engineering,
            and automated model evaluation.
          </p>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
            <p className="text-gray-400">Python, Pandas, NumPy, sklearn, BeautifulSoup, Matplotlib</p>
          </div>

          <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-6">
            <li>Full web scraping pipeline</li>
            <li>ML classification + regression models</li>
            <li>Graph generation and visual insights</li>
            <li>Automated preprocessing</li>
          </ul>

          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all">GitHub</a>
          </div>
        </div>

        {/* Project 2: ML-Web */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl hover:scale-[1.01] transition-all duration-500">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">ML + Web Integration</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            A project where Machine Learning meets Web Development. Models run
            on a backend API and results are displayed beautifully on a live
            web interface.
          </p>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
            <p className="text-gray-400">ReactJS, Python, Flask/Django, ML Models</p>
          </div>

          <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-6">
            <li>Real-time ML predictions</li>
            <li>Interactive UI</li>
            <li>API-based ML communication</li>
            <li>Frontend + Backend synergy</li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all">GitHub</a>
          </div>
        </div>

        {/* Project 3: Django + React + Redux */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl hover:scale-[1.01] transition-all duration-500">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">Full-Stack App with Django + React + Redux</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            A powerful full-stack web application built using Django REST API
            and React with Redux for state management. Includes authentication,
            routing, secure APIs, and optimized frontend.
          </p>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
            <p className="text-gray-400">React, Redux, Django REST, Tailwind CSS</p>
          </div>

          <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-6">
            <li>Full CRUD API</li>
            <li>User authentication & protected routes</li>
            <li>Redux global state management</li>
            <li>Clean UI with Tailwind</li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all">GitHub</a>
          </div>
        </div>

        {/* Project 4: E-commerce Website */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl hover:scale-[1.01] transition-all duration-500">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">E-Commerce Website</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            A complete e-commerce system with product search, filtering,
            cart, checkout, admin product control, and secure backend.
          </p>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
            <p className="text-gray-400">Django, React, Tailwind, REST API</p>
          </div>

          <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-6">
            <li>Complete cart + checkout</li>
            <li>Admin panel for products</li>
            <li>Search + category filters</li>
            <li>Responsive UI</li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all">GitHub</a>
          </div>
        </div>

        {/* Project 5: Web Scraping Project */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl hover:scale-[1.01] transition-all duration-500">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">Web Scraping Project</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Extracted and analyzed real-time website data using BeautifulSoup
            and automated scripts. Useful for research and dataset creation.
          </p>

          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
            <p className="text-gray-400">Python, BeautifulSoup, Pandas</p>
          </div>

          <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-6">
            <li>Automated data extraction</li>
            <li>CSV dataset generation</li>
            <li>Cleaning + preprocessing</li>
            <li>Use case: ML-ready data</li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

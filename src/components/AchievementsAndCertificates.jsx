const AchievementsAndCertificates = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-[#0a0f1f] via-[#101c3a] to-[#0a0f1f] text-white">

      {/* Heading */}
      <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          My
        </span>{" "}
        <span className="text-white/90">Certificates</span>
      </h2>

      <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
        A complete showcase of my achievements, recognitions, certifications,
        internships, and milestones throughout my academic and professional journey.
      </p>

      <div className="max-w-6xl mx-auto space-y-20">



        {/* ---------------- CERTIFICATES SECTION ---------------- */}
        <div>


          <div className="space-y-10">

            {/* Certificate: Soft Skills */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 hover:scale-[1.01] transition-all duration-500">
              <img
                src="/assets/1763791072328.jpg"
                alt="Soft Skills"
                className="w-80 rounded-2xl shadow-lg"
              />
              <div>
                <h4 className="text-3xl font-bold text-cyan-400 mb-4">Soft Skills Certification</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Earned a professional Soft Skills Certificate recognized by OEC & ICMBD,
                  covering communication, teamwork, leadership and workplace professionalism.
                </p>
                <p className="text-cyan-300 font-semibold">Issued by: OEC & ICMBD | Year: 2025</p>
              </div>
            </div>

            {/* Certificate: ReactJS */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 hover:scale-[1.01] transition-all duration-500">
              <img
                src="/assets/1763791273596.jpg"
                alt="React Certificate"
                className="w-80 rounded-2xl shadow-lg"
              />
              <div>
                <h4 className="text-3xl font-bold text-cyan-400 mb-4">ReactJS Foundation Course</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Completed a strong foundation course in ReactJS, learning components, hooks,
                  state management, props, routing and building fully functional UI projects.
                </p>
                <p className="text-cyan-300 font-semibold">Issued by: Online Program | Year: 2025</p>
              </div>
            </div>

            {/* Certificate: Saylor Python DS */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 hover:scale-[1.01] transition-all duration-500">
              <img
                src="/assets/1763791457489.jpg"
                alt="Saylor Python DS"
                className="w-80 rounded-2xl shadow-lg"
              />
              <div>
                <h4 className="text-3xl font-bold text-cyan-400 mb-4">Python Data Science Certificate</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Completed Saylor Academy's Python & Data Science program focusing on analytical
                  skills, data structures, visualization and machine learning foundations.
                </p>
                <p className="text-cyan-300 font-semibold">Issued by: Saylor Academy | Year: 2025</p>
              </div>
            </div>

            {/* Certificate: Naxium Internship */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 hover:scale-[1.01] transition-all duration-500">
              <img
                src="/assets/1754938041268.jpg"
                alt="Naxium Internship"
                className="w-80 rounded-2xl shadow-lg"
              />
              <div>
                <h4 className="text-3xl font-bold text-cyan-400 mb-4">Naxium Software Internship Certificate</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Successfully completed an internship at Naxium Software, working on advanced web
                  development, dashboard creation, data handling, backend APIs and real-world
                  project experience using Django, ReactJS and data visualization tools.
                </p>
                <p className="text-cyan-300 font-semibold">Issued by: Naxium Software | Year: 2025</p>
              </div>
            </div>
            {/* Certificate:  British Airways Data Science Simulation */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 hover:scale-[1.01] transition-all duration-500">
              <img
                src="/assets/Forage.png"
                alt="British Airways Data Science Simulation"
                className="w-80 rounded-2xl shadow-lg"
              />
              <div>
                <h4 className="text-3xl font-bold text-cyan-400 mb-4">British Airways Data Science Simulation Certificate</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I completed the British Airways Data Science Simulation on <span className="text-cyan-400"> @Forage</span>
, where I analyzed customer reviews, uncovered insights, and built a predictive model to understand factors influencing buying behavior, gaining hands-on experience in applying data science to real-world business challenges.
                </p>
                <p className="text-cyan-300 font-semibold">Issued by: British Airways Data Science  | Year: 2024</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsAndCertificates;

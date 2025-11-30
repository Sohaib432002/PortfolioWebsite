const AchievementsAndCertificates = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0a0f1f] via-[#101c3a] to-[#0a0f1f] text-white">

      <h2 className="text-center my-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          My
        </span>{" "}
        <span className="text-white/90">Certificates</span>
      </h2>

      <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16">
        A complete showcase of my achievements, recognitions, certifications, internships,
        and milestones throughout my academic and professional journey.
      </p>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {[
          {
            img: `${process.env.PUBLIC_URL}/assets/1763791072328.jpg`,
            title: "Soft Skills Certification",
            desc: "Earned a professional Soft Skills Certificate recognized by OEC & ICMBD, covering communication, teamwork, leadership and workplace professionalism.",
            issuer: "OEC & ICMBD | Year: 2025"
          },
          {
            img: `${process.env.PUBLIC_URL}/assets/1763791273596.jpg`,
            title: "ReactJS Foundation Course",
            desc: "Completed a strong foundation course in ReactJS, learning components, hooks, state management, props, routing and building fully functional UI projects.",
            issuer: "Online Program | Year: 2025"
          },
          {
            img: `${process.env.PUBLIC_URL}/assets/1763791457489.jpg`,
            title: "Python Data Science Certificate",
            desc: "Completed Saylor Academy's Python & Data Science program focusing on analytical skills, data structures, visualization and machine learning foundations.",
            issuer: "Saylor Academy | Year: 2025"
          },
          {
            img: `${process.env.PUBLIC_URL}/assets/1754938041268.jpg`,
            title: "Naxium Software Internship Certificate",
            desc: "Successfully completed an internship at Naxium Software, working on advanced web development, dashboard creation, data handling, backend APIs and real-world project experience using Django, ReactJS and data visualization tools.",
            issuer: "Naxium Software | Year: 2025"
          },
          {
            img: `${process.env.PUBLIC_URL}/assets/Forage.png`,
            title: "British Airways Data Science Simulation Certificate",
            desc: "Completed the British Airways Data Science Simulation on @Forage, analyzing customer reviews, uncovering insights, and building predictive models to understand buying behavior.",
            issuer: "British Airways Data Science | Year: 2024"
          }
        ].map((cert, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:scale-[1.01] transition-transform duration-300"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full sm:w-64 rounded-xl shadow-lg object-cover"
            />
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-2 sm:mb-4">{cert.title}</h4>
              <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-4 leading-relaxed">{cert.desc}</p>
              <p className="text-cyan-300 font-semibold text-sm sm:text-base">{cert.issuer}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AchievementsAndCertificates;

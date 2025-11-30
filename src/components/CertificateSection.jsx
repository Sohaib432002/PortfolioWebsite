
const certificates = [
  {
    title: "British Airways Data Science Simulation",
    issuer: "British Airways Data Science | @Forage",
    year: "2024",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
    description: "Completed a data science simulation analyzing customer reviews, uncovering insights, and building predictive models for airline customer behavior."
  },
  {
    title: "Naxium Software Internship",
    issuer: "Naxium Software",
    year: "2025",
    image: `${process.env.PUBLIC_URL}/assets/Nexium.png`,
    description: "Internship focused on advanced web development, dashboard creation, and backend API integration."
  },
  {
    title: "Python Data Science Certificate",
    issuer: "Saylor Academy",
    year: "2025",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Gained hands-on experience in Python for data analysis, visualization, and statistical modeling."
  },
  {
    title: "ReactJS Foundation Course",
    issuer: "Online Program",
    year: "2025",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Learned the fundamentals of ReactJS, including components, state management, hooks, and building interactive web applications."
  },
  {
    title: "Soft Skills Certification",
    issuer: "OEC & ICMBD",
    year: "2025",
    image: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    description: "Developed essential soft skills like communication, teamwork, leadership, and problem-solving."
  }
];

const CertificateSection = () => {
  return (
    <section className="w-full bg-gray-900 text-white px-4 py-16">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 text-cyan-400">
        Achievements & Certificates
        <div className="text-cyan-500 text-base sm:text-lg md:text-xl font-semibold mt-2">
          — My Recognitions —
        </div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-800 border border-cyan-500 rounded-xl p-4 sm:p-6 text-white"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-16 h-16 rounded-full border-2 border-cyan-500 mx-auto -mt-8 bg-gray-900"
            />

            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mt-4 text-center">
              {cert.title}
            </h3>

            <p className="text-gray-300 text-center mt-1 text-sm">{cert.issuer}</p>
            <p className="text-gray-400 text-center text-xs mt-1">{cert.year}</p>

            <p className="text-gray-300 text-center text-sm mt-2">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;

import { motion } from "framer-motion";

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
    image: "/assets/Nexium.png",
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
    <section className="relative w-full min-h-screen flex flex-col items-center py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 pb-6 text-cyan-400">
        Achievements & Certificates
        <div className="text-cyan-500 text-xl md:text-2xl font-semibold mt-3">
          — My Recognitions —
        </div>
      </h2>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="bg-gray-800 border border-cyan-500 rounded-2xl p-6 shadow-lg text-white hover:shadow-cyan-500/40 transition-all"
          >
            {/* Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-16 h-16 rounded-full border-2 border-cyan-500 mx-auto -mt-10 bg-gray-900 shadow-md"
            />

            {/* Title */}
            <h3 className="text-xl font-bold text-cyan-400 mt-6 text-center">
              {cert.title}
            </h3>

            {/* Issuer + info */}
            <p className="text-gray-300 text-center mt-2">{cert.issuer}</p>
            <p className="text-gray-400 text-center text-sm mt-1">{cert.year}</p>

            {/* Description */}
            <p className="text-gray-300 text-center text-sm mt-3">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;

import { motion } from "framer-motion";

const CertificateCard = ({ title, issuer, year, image }) => {
  return (
    <motion.div
      className="bg-gray-900 border border-cyan-500 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-200 hover:border-cyan-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-cover rounded-full border-2 border-cyan-500 mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-cyan-400 mb-1">
        {title}
      </h3>

      <p className="text-gray-300 text-sm">{issuer}</p>

      <p className="text-gray-500 text-sm mt-1">{year}</p>
    </motion.div>
  );
};

export default CertificateCard;

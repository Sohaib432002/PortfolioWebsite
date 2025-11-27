import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (You can integrate an actual backend or email service here)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-cyan-400 mb-6">
  Get in <span className="text-white drop-shadow-[0_0_10px_#22d3ee]">Touch</span>
</h2>
<p className="text-center text-cyan-200 text-lg md:text-xl mb-10">
  I’d love to connect — feel free to reach out anytime.
</p>


        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:sohaibmaqsoodsohaibmaqsood@gmail.com"
            className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            <FiMail /> Email
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="tel:+923191057875"
            className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            <FiPhone /> Call
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/sohaibmaqsood/"
            target="_blank"
            className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            <FiLinkedin /> LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/sohaibmaqsood"
            target="_blank"
            className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            <FiGithub /> GitHub
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-cyan-500 text-white py-3 rounded-lg font-medium mt-2"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

    </section>
  );
};

export default ContactSection;

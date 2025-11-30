import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const ContactSection = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    form.append("access_key", "baf60a04-502e-4800-8238-a84d4c5c12ce");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form
    });

    const data = await res.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResult(data.message);
    }
  };

  return (
    <section className="w-full bg-gray-900 text-white px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-4">
          Get in <span className="text-white">Touch</span>
        </h2>
        <p className="text-cyan-200 text-base sm:text-lg mb-8">
          I’d love to connect — feel free to reach out anytime.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="mailto:sohaibmaqsoodsohaibmaqsood@gmail.com"
            className="flex justify-center items-center gap-2 bg-cyan-500 text-white w-full py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
          >
            <FiMail /> Email
          </a>
          <a
            href="tel:+923191057875"
            className="flex justify-center items-center gap-2 bg-cyan-500 text-white w-full py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
          >
            <FiPhone /> Call
          </a>
          <a
            href="https://www.linkedin.com/in/sohaibmaqsood/"
            target="_blank"
            className="flex justify-center items-center gap-2 bg-cyan-500 text-white w-full py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors" rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/sohaibmaqsood"
            target="_blank"
            className="flex justify-center items-center gap-2 bg-cyan-500 text-white w-full py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors" rel="noreferrer"
          >
            <FiGithub /> GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 w-full"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 w-full"
          />

          <button
            type="submit"
            className="bg-cyan-500 text-white py-3 rounded-lg font-medium w-full hover:bg-cyan-400 transition-colors mt-2"
          >
            Send Message
          </button>
        </form>

        <p className="text-cyan-300 mt-4">{result}</p>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactDetails = () => {
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
    <section className="relative w-full py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-[#0a0f2a] via-[#101c3a] to-[#0a0f2a] text-white">

      <h2 className="text-center text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          Get
        </span>{" "}
        <span className="text-white/90">In Touch</span>
      </h2>

      <p className="text-center text-sm sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Have a question or want to work together? Reach out to me via the contact details below or send me a message directly through the form.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6">Contact Info</h3>

          <div className="flex items-start gap-4">
            <FiMail className="text-cyan-400 text-2xl mt-1" />
            <div>
              <p className="text-gray-300 text-sm sm:text-base">Email</p>
              <p className="text-white font-semibold break-all">
                sohaibmaqsoodsohaibmaqsood@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="text-cyan-400 text-2xl mt-1" />
            <div>
              <p className="text-gray-300 text-sm sm:text-base">Phone</p>
              <p className="text-white font-semibold">+92 319 1057875</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMapPin className="text-cyan-400 text-2xl mt-1" />
            <div>
              <p className="text-gray-300 text-sm sm:text-base">Location</p>
              <p className="text-white font-semibold">
                Near PAF Colony, Talagang Road, Mianwali, Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/15 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/15 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/15 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>

          <p className="text-cyan-300 mt-4">{result}</p>
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;

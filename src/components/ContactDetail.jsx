import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-[#0a0f2a] via-[#101c3a] to-[#0a0f2a] text-white">

      {/* Title */}

      <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-10 tracking-tight">
  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
    Get
  </span>{" "}
  <span className="text-white/90">In Touch</span>
</h2>
      <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Have a question or want to work together? Reach out to me via the contact details below or send me a message directly through the form.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Details */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">Contact Info</h3>

          <div className="flex items-center gap-4">
            <FiMail className="text-cyan-400 text-2xl" />
            <div>
              <p className="text-gray-300">Email</p>
              <p className="text-white font-semibold">sohaibmaqsoodsohaibmaqsood@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiPhone className="text-cyan-400 text-2xl" />
            <div>
              <p className="text-gray-300">Phone</p>
              <p className="text-white font-semibold">+92 319 1057875</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMapPin className="text-cyan-400 text-2xl" />
            <div>
              <p className="text-gray-300">Location</p>
              <p className="text-white font-semibold">Near PAF Colony, Talagang Road, Mianwali, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">Send a Message</h3>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>


      </div>
    </section>
  );
};

export default ContactDetails;

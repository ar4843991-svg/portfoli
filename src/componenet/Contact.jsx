import React from 'react'
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {

  return (
    <section id="contact" className="w-full min-h-screen px-6 md:px-20 py-20">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact <span className="text-[#c3e3a3]">Me</span>
        </h1>

        <p className="text-[#94A3B8] mt-3">
          Let’s build something amazing together 🚀
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* LEFT SIDE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          {/* EMAIL */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl
          hover:border-[#c3e3a3] hover:shadow-[0_0_15px_rgba(195,227,163,0.2)] transition">
            <FaEnvelope className="text-[#c3e3a3] text-2xl" />
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-[#94A3B8]">atta123@example.come</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl
          hover:border-[#c3e3a3] hover:shadow-[0_0_15px_rgba(195,227,163,0.2)] transition">
            <FaPhone className="text-[#c3e3a3] text-2xl" />
            <div>
              <h3 className="text-white font-semibold">Phone</h3>
              <p className="text-[#94A3B8]">+92 300 0000000</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl
          hover:border-[#c3e3a3] hover:shadow-[0_0_15px_rgba(195,227,163,0.2)] transition">
            <FaMapMarkerAlt className="text-[#c3e3a3] text-2xl" />
            <div>
              <h3 className="text-white font-semibold">Location</h3>
              <p className="text-[#94A3B8]">Peshawar, Pakistan</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl p-8 space-y-5
          backdrop-blur-md"
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-transparent border border-white/10
            text-white focus:border-[#c3e3a3] outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-transparent border border-white/10
            text-white focus:border-[#c3e3a3] outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-transparent border border-white/10
            text-white focus:border-[#c3e3a3] outline-none"
          />

          <textarea
            rows="6"
            placeholder="Your Message..."
            className="w-full p-3 rounded-md bg-transparent border border-white/10
            text-white focus:border-[#c3e3a3] outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#c3e3a3] text-[#05141b] py-3 rounded-md font-semibold
            hover:bg-[#a8c58f] transition duration-300
            shadow-[0_0_20px_rgba(195,227,163,0.2)]"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>

    </section>
  )
}

export default Contact
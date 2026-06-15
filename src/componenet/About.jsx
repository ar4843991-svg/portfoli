import React from 'react'
import { motion } from "framer-motion"
import { FaBriefcase, FaCode, FaLaptopCode, FaSmile } from "react-icons/fa"
import Attaimg from "../assets/img1.jpeg"

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 md:px-20 py-24 flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-[#c3e3a3]">Me</span>
          </h1>
          <p className="text-[#94A3B8] mt-3">
            Get to know more about my background and passion
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="
              w-[250px] sm:w-[300px] md:w-[370px]
              h-[250px] sm:h-[300px] md:h-[370px]
              rounded-2xl overflow-hidden
              border-2 border-[#c3e3a3]
              shadow-[0_0_20px_rgba(195,227,163,0.15)]
              animate-float
            ">
              <img
                src={Attaimg}
                alt="about"
                className="w-full h-full object-cover object-[50%_200%] scale-116"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <p className="text-[#E2E8F0] text-base md:text-lg leading-relaxed">
              I am a passionate Full Stack Developer with experience in building
              modern, responsive and user-friendly web applications.
              I enjoy creating clean UI designs and turning ideas into real-world
              projects using modern technologies.
            </p>

            <p className="text-[#94A3B8] mt-4">
              My focus is on clean code, performance optimization, and
              delivering smooth user experiences.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                hover:border-[#c3e3a3] hover:bg-[#c3e3a3]/10 hover:-translate-y-2
                transition-all duration-300"
              >
                <FaBriefcase className="text-[#c3e3a3] text-3xl mx-auto mb-3" />
                <h3 className="text-white text-2xl font-bold">1+</h3>
                <p className="text-[#E2E8F0]">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                hover:border-[#c3e3a3] hover:bg-[#c3e3a3]/10 hover:-translate-y-2
                transition-all duration-300"
              >
                <FaLaptopCode className="text-[#c3e3a3] text-3xl mx-auto mb-3" />
                <h3 className="text-white text-2xl font-bold">10+</h3>
                <p className="text-[#E2E8F0]">Projects</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                hover:border-[#c3e3a3] hover:bg-[#c3e3a3]/10 hover:-translate-y-2
                transition-all duration-300"
              >
                <FaCode className="text-[#c3e3a3] text-3xl mx-auto mb-3" />
                <h3 className="text-white text-2xl font-bold">5+</h3>
                <p className="text-[#E2E8F0]">Technologies</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
                hover:border-[#c3e3a3] hover:bg-[#c3e3a3]/10 hover:-translate-y-2
                transition-all duration-300"
              >
                <FaSmile className="text-[#c3e3a3] text-3xl mx-auto mb-3" />
                <h3 className="text-white text-2xl font-bold">8+</h3>
                <p className="text-[#E2E8F0]">Happy Clients</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About;
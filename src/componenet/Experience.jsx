import React from 'react'
import { motion } from "framer-motion"

function Experience() {

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Freelance",
      year: "2025 - Present",
      desc: "Building modern responsive web apps using React and Tailwind CSS."
    },
    {
      role: "MERN Stack Learner",
      company: "Self Learning",
      year: "2024 - 2025",
      desc: "Learned full stack development with real projects and practice."
    },
    {
      role: "Web Development Intern",
      company: "Local Company",
      year: "2024",
      desc: "Worked on UI development and API integration tasks."
    }
  ]

  return (
    <section id="experience" className="w-full min-h-screen px-6 md:px-20 py-20">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#c3e3a3]">Experience</span>
        </h1>

        <p className="text-[#94A3B8] mt-3">
          My journey as a developer so far
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto relative border-l-2 border-[#c3e3a3]/40 pl-6 space-y-10">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >

            {/* DOT */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 bg-[#c3e3a3] rounded-full shadow-[0_0_10px_rgba(195,227,163,0.5)]"></div>

            {/* CARD */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5
            hover:border-[#c3e3a3] transition duration-300">

              <h2 className="text-white text-xl font-bold">
                {exp.role}
              </h2>

              <p className="text-[#c3e3a3] text-sm">
                {exp.company} | {exp.year}
              </p>

              <p className="text-[#94A3B8] mt-2 text-sm">
                {exp.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Experience
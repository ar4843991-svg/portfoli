import React from 'react'
import { motion } from "framer-motion"
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt} from "react-icons/fa"
import {SiTailwindcss, SiMongodb, SiExpress} from "react-icons/si"

function Skill() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 70 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 70 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 10 },
    { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 10 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 10 },
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 80 },
  ]

  return (
    <section id="skills" className="w-full min-h-screen px-6 flex flex-col justify-center items-center md:px-20 py-20">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#c3e3a3]">Skills</span>
        </h1>
        <p className="text-[#94A3B8] mt-3">
          Technologies I use to build modern web applications
        </p>
      </motion.div>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group bg-white/5 border border-white/10 rounded-xl p-6 text-center
            hover:bg-[#c3e3a3]/10 hover:border-[#c3e3a3] transition duration-300
            hover:shadow-[0_0_20px_rgba(195,227,163,0.2)]"
          >
            {/* ICON */}
            <div className="text-4xl flex justify-center mb-3 group-hover:scale-110 transition">
              {skill.icon}
            </div>
            {/* NAME */}
            <h3 className="text-white font-semibold">
              {skill.name}
            </h3>
            {/* BAR */}
            <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level + "%" }}
                transition={{ duration: 1 }}
                className="h-full bg-[#c3e3a3]"
              />
            </div>
            <p className="text-xs text-[#94A3B8] mt-2">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skill
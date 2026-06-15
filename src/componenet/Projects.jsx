import React from 'react'
import { motion } from "framer-motion"
import Img1 from '../assets/img 1.png'
import Deshbord from '../assets/Deshbord.png'

function Projects() {

  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full stack MERN shopping platform with cart and payments.",
      img: Img1,
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio with animations and UI effects.",
      img: Img1,
    },
    {
      title: "Dashboard UI",
      desc: "Admin dashboard with charts and analytics system.",
      img: Deshbord,
    },
    {
      title: "Blog Platform",
      desc: "Full blog system with authentication and CMS features.",
      img: Img1,
    }
  ]

  return (
    <section id="projects" className="w-full min-h-screen px-6 md:px-20 py-20">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#c3e3a3]">Projects</span>
        </h1>

        <p className="text-[#94A3B8] mt-3">
          Some of my recent work and real-world applications
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden
            hover:border-[#c3e3a3] transition duration-300"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[200px] object-cover
                group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h2 className="text-white text-xl font-bold">
                {project.title}
              </h2>

              <p className="text-[#94A3B8] text-sm mt-2">
                {project.desc}
              </p>

              {/* BUTTON */}
              <button className="mt-4 px-4 py-2 bg-[#c3e3a3] text-[#05141b]
              rounded-md text-sm font-semibold hover:bg-[#a8c58f]
              transition duration-300">
                View Project
              </button>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Projects
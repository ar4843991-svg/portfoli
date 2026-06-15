import React from 'react'
import Atta from "../assets/img1.jpeg"
import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id='home'
      className="w-full min-h-screen  flex items-center justify-center px-6 md:px-20"
    >
      <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between  py-20 md:py-5 gap-10">

        {/* IMAGE - mobile pe upar */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center md:w-1/2 md:order-2"
        >
          <div className="
            w-[200px] sm:w-[260px] md:w-[340px]
            h-[200px] sm:h-[260px] md:h-[340px]
            rounded-full
            overflow-hidden
            border-4 border-[#c3e3a3]
            shadow-[0_0_30px_rgba(195,227,163,0.2)]
            animate-float
          ">
            <img
              src={Atta}
              alt="Atta Ur Rahman"
              className="w-full h-full object-cover object-[50%_200%] scale-116"
            />
          </div>
        </motion.div>

        {/* TEXT - mobile pe neeche */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left md:order-1"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-[#c3e3a3]">Atta Ur Rahman</span>
          </h1>

          <p className="text-lg md:text-3xl text-[#E2E8F0] font-semibold mt-3">
            MERN Stack Developer & AI Developer
          </p>

          <p className="text-zinc-400 mt-4 text-sm md:text-lg max-w-md">
            I create stunning web experiences with modern technologies and innovative design.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex  flex-row gap-4">
            <button className="bg-[#c3e3a3] text-[#05141b] px-6 py-3 rounded-md font-semibold
            hover:bg-[#a8c58f] transition duration-300">
              View Work
            </button>
            <button className="border border-[#c3e3a3] text-[#c3e3a3] px-6 py-3 rounded-md font-semibold
            hover:bg-[#c3e3a3] hover:text-[#05141b] transition duration-300">
              Contact Me
            </button>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Hero
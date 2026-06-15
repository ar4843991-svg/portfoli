import React from 'react'
import Atta from "../assets/img1.jpeg"
import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id='home'
      className="w-full min-h-screen flex items-center px-6 md:px-20 "
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between py-5 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">

            Hi, I'm{" "}

            <span className="text-[#c3e3a3] whitespace-nowrap">
              Atta Ur Rahman
            </span>
            <br />
            <span className="typewriter text-2xl md:text-3xl text-[#E2E8F0]">
              MERN Stack Developer & AI Developer
            </span>
          </h1>
          <p className="text-zinc-400 mt-4 text-base md:text-lg">
            I create stunning web experiences with modern technologies and innovative design.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

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


        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center relative"
        >

          {/* Background Shape */}
          <div className="
          absolute
          w-[260px] md:w-[400px]
          h-[260px] md:h-[400px]
          bg-[#0a1f29]
          rounded-[50px]
          -top-5
          right-5
          "></div>

          {/* Image */}
          <div className="
          relative ml-22
          w-[220px] md:w-[340px]
          h-[220px] md:h-[340px]
          rounded-full
          overflow-hidden
          border-4 border-[#c3e3a3]
          animate-float">

            <img
              src={Atta}
              alt=""
              className="w-full h-full object-cover object-[50%_200%] scale-115"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Hero
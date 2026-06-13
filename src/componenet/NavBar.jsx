import React, { useState } from 'react'
import { motion } from "framer-motion"

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-[#05141b]/80 backdrop-blur-md
    
      border-b border-white/10 shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
    >

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl hover:scale-105 transition duration-300
        drop-shadow-[0_0_10px_rgba(195,227,163,0.4)] font-bold font-[Poppins]">

          <span className="bg-[#c3e3a3] text-[#05141b] px-2 py-1 rounded">
            IT's
          </span>

          <span className="text-white ml-2">Me Atta</span>

        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">

        <ul className="flex gap-6 text-[#E2E8F0] font-medium">

  <li className="cursor-pointer text-[#E2E8F0] px-3 py-1 rounded-md
hover:bg-[#c3e3a3] hover:text-[#05141b]
hover:scale-105 hover:-translate-y-1
transition duration-200 ease-in-out"
      onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
    Home
  </li>

  <li className="cursor-pointer text-[#E2E8F0] px-3 py-1 rounded-md
hover:bg-[#c3e3a3] hover:text-[#05141b]
hover:scale-105 hover:-translate-y-1
transition duration-200 ease-in-out"
      onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
    About
  </li>

  <li className="cursor-pointer text-[#E2E8F0] px-3 py-1 rounded-md
hover:bg-[#c3e3a3] hover:text-[#05141b]
hover:scale-105 hover:-translate-y-1
transition duration-200 ease-in-out"
  onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>
    
    Skills
  </li>

  <li className="cursor-pointer text-[#E2E8F0] px-3 py-1 rounded-md
hover:bg-[#c3e3a3] hover:text-[#05141b]
hover:scale-105 hover:-translate-y-1
transition duration-200 ease-in-out"
   onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
    Projects
  </li>
<li className="cursor-pointer text-[#E2E8F0] px-3 py-1 rounded-md
hover:bg-[#c3e3a3] hover:text-[#05141b]
hover:scale-105 hover:-translate-y-1
transition duration-200 ease-in-out"
 onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}>
    Experiences
  </li>
  <li className="cursor-pointer text-[#E2E8F0] px-3 py-1 rounded-md
hover:bg-[#c3e3a3] hover:text-[#05141b]
hover:scale-105 hover:-translate-y-1
transition duration-200 ease-in-out"
   onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>

    Contact
  </li>


</ul>

          <button className="bg-[#c3e3a3] text-[#05141b] px-4 py-2 rounded-md
          hover:bg-[#a8c58f] transition duration-300">
            Hire Me
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl z-50"
        >
          {open ? "✖" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden w-full bg-[#05141b] flex flex-col items-center gap-5 py-6 border-t border-white/10">

          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item, i) => (
            <span
              key={i}
              onClick={() => setOpen(false)}
              className="text-[#E2E8F0] hover:text-[#c3e3a3] cursor-pointer"
            >
              {item}
            </span>
          ))}

          <button className="bg-[#c3e3a3] text-[#05141b] font-bold  px-4 py-2 rounded-md">
            Hire Me
          </button>

        </div>
      )}

    </motion.nav>
  )
}

export default NavBar
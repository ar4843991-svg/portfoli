import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

function Footer() {

  return (
    <footer className="w-full bg-[#05141b] border-t border-white/10 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* LEFT BRAND */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-2xl font-bold">
            IT's <span className="text-[#c3e3a3]">Me Atta</span>
          </h1>
          <p className="text-[#94A3B8] text-sm mt-2">
            Full Stack Developer | AI Developer | React | Node.js | UI Designer | Front End Dev
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-[#E2E8F0] text-sm">
          <a href="#home" className="hover:text-[#c3e3a3] transition">Home</a>
          <a href="#about" className="hover:text-[#c3e3a3] transition">About</a>
          <a href="#skills" className="hover:text-[#c3e3a3] transition">Skills</a>
          <a href="#projects" className="hover:text-[#c3e3a3] transition">Projects</a>
          <a href="#contact" className="hover:text-[#c3e3a3] transition">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex justify-center md:justify-end gap-5 text-xl">
          <a
            href="#"
            className="text-[#E2E8F0] hover:text-[#c3e3a3] hover:scale-110 transition duration-300
            hover:drop-shadow-[0_0_10px_rgba(195,227,163,0.4)]">
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-[#E2E8F0] hover:text-[#c3e3a3] hover:scale-110 transition duration-300
            hover:drop-shadow-[0_0_10px_rgba(195,227,163,0.4)]" >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-[#E2E8F0] hover:text-[#c3e3a3] hover:scale-110 transition duration-300
            hover:drop-shadow-[0_0_10px_rgba(195,227,163,0.4)]">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-[#94A3B8] text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#c3e3a3]">Atta Ur Rahman</span>.
        All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
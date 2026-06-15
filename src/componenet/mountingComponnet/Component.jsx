import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import About from '../About'
import Skill from '../Skill'
import Projects from '../Projects'
import Experience from '../Experience'
import Contact from '../Contact'
import Footer from '../Footer'


function Component() {
  return (
    <div className='overflow-x-hidden w-full'>

      <NavBar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </div>
  )
}

export default Component;
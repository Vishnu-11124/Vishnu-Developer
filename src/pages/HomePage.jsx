import React from 'react'
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Projects from "../components/project/Projects"
import Contact from "../components/Contact"


const HomePage = () => {
  return (
    <>
  
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
    
    </>
  )
}

export default HomePage

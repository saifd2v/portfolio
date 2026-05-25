'use client'
import React, { useRef } from 'react'
import Header from "./components/Header";
import Hero from './components/pages/Hero'
import About from './components/pages/About'
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import ScrollToTop from './components/ScrollToTop'

const page = () => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Header heroRef={heroRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      <ScrollToTop />
      <div ref={heroRef} className='h-full w-full'>
        <Hero projectsRef={projectsRef} contactRef={contactRef} />
      </div>
      <div ref={aboutRef} className='h-full w-full'>
        <About />
      </div>
      <div ref={skillsRef} className='h-full w-full'>
        <Skills />
      </div>
      <div ref={projectsRef} className='h-full w-full'>
        <Projects />
      </div>
      <div ref={contactRef} className='h-full w-full'>
        <Contact />
      </div>
      <Footer heroRef={heroRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Copyright />
    </>
  )
}

export default page
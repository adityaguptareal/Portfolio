import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturedCard from './components/FeaturedCard'
import ExperienceSection from './components/ExperienceSection'
import TechStack from './components/TechStack'
import Testimonial from './components/Testimonial'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeaturedCard/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

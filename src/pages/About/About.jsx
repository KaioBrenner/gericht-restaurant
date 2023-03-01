import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, HistoryAbout, Testimony } from '../../container';
import { Navbar } from '../../components';

const About = () => {

  document.title = "Gericht | About Us"

  return (
    <div className="app__about">
      <Navbar />
      <Header page="aboutus"/>
      <HistoryAbout />
      <Chef />
      <Testimony />
      <Gallery />
      <Footer />
    </div>
  )
}

export default About;
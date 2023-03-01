import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Team } from '../../container';
import { Navbar } from '../../components';

const OurChefs = () => {

  document.title = "Gericht | Our Chefs"

  return (
    <div className="app__ourchefs">
      <Navbar />
      <Header page="ourchefs"/>
      <Team />
      <Intro />
      <Laurels />
      <Footer/>
    </div>
  )
}

export default OurChefs
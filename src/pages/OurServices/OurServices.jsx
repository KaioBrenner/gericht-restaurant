import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Quality, SelectMenu, BookTable, HappyHours } from '../../container';
import { Navbar } from '../../components';

const OurServices = () => {

  document.title = "Gericht | Our Services"

  return (
    <div className="app__ourservices" style={{position: 'relative'}}>
      <Navbar />
      <Header page="ourservices"/>
      <Quality />
      <SelectMenu />
      <BookTable />
      <HappyHours />
      <Footer />
    </div>
  )
}

export default OurServices;
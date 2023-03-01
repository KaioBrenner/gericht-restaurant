import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Map, Subscribe } from '../../container';
import { Navbar } from '../../components';

const ContactUs = () => {

  document.title = "Gericht | Contact Us"

  return (
    <div className="app__contactus">
      <Navbar />
      <Header page="contactus"/>
      <Map />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ContactUs
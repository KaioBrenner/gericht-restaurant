import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';
import { Navbar } from '../../components';

const ChefDetail = () => {

  document.title = "Gericht | Chef Detail"

  return (
    <div className="chefdetail">
      <Navbar />
    </div>
  )
}

export default ChefDetail
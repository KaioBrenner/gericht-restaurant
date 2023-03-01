import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import images from "../../constants/images"
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.gericht} alt="logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <Link to="/">
          <li className="p__opensans">Home</li>
        </Link>
        <Link to="/aboutus">
          <li className="p__opensans">About</li>
        </Link>
        <Link to="/ourservices">
          <li className="p__opensans">Menu</li>
        </Link>
        <Link to="/ourchefs">
          <li className="p__opensans">Chefs</li>
        </Link>
        <Link to="/contactus">
          <li className="p__opensans">Contact</li>
        </Link>
      </ul>
      <div className="app__navbar-login">
        <Link to="/contactus"><a className="p__opensans">Log In / Register</a></Link>
        <div/>
        <Link to="/ourservices"><a href="#" className="p__opensans">Book Table</a></Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}}/>

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}}/>
            <ul className="app__navbar-smallscreen-links">
              <Link to="/">
                <li className="p__opensans"><a href="#">Home</a></li>
              </Link>
              <Link to="/aboutus">
                <li className="p__opensans"><a href="#">About</a></li>
              </Link>
              <Link to="/ourservices">
                <li className="p__opensans"><a href="#">Menu</a></li>
              </Link>
              <Link to="/ourchefs">
                <li className="p__opensans"><a href="#">Chefs</a></li>
              </Link>
              <Link to="/contactus">
                <li className="p__opensans"><a href="#">Contact</a></li>
              </Link>
            </ul>
          </div>
        )}

        

        
      </div>
    </nav>
  )
};

export default Navbar;

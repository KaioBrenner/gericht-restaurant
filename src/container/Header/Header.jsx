import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from "../../constants"
import './Header.css';

const Header = ( {page} ) => {

  if(page === "home"){
    return(
      <div className="app__header app__wrapper section__padding border__bottom app__header-page_home" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour"/>
          <h1 className="app__header-h1">The Key to Fine Dining</h1>
          <p className="p__opensans" style={{margin: '2rem 0'}}> Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <Link to="/ourservices"><button type="button" className="custom__button">Explore Menu</button></Link>
        </div>
  
        <div className="app__wrapper_img">
          <img src={images.welcome} alt="header Img" />
        </div>
      </div>
    )
  }

  if(page === "ourservices"){
    return(
      <div className="app__header app__header-page_ourservices" id="home">

        <div className="app__header-banner">
          <div className="app__header-bg"></div>
          <h1 className="app__header-h1">What We Offer</h1>
            <div className="app__header-page_ourservices-breadcrumb">
              <Link to="/">
                <p className="p__cormorant">Home</p>
              </Link>
              <img src={images.angleleft} alt="angle left" />
              <Link to="/ourservices">
                <p className="p__cormorant">Our Services</p>
              </Link>
            </div>
        </div>

      </div>
    )
  }

  if(page === "aboutus"){
    return(
      <div className="app__header app__header-page_ourservices" id="home">

        <div className="app__header-banner">
          <div className="app__header-bg"></div>
          <h1 className="app__header-h1">Welcome to Gerícht</h1>
            <div className="app__header-page_ourservices-breadcrumb">
              <Link to="/">
                <p className="p__cormorant">Home</p>
              </Link>
              <img src={images.angleleft} alt="angle left" />
              <Link to="/aboutus">
                <p className="p__cormorant">About Us</p>
              </Link>
            </div>
        </div>

      </div>
    )
  }
  
  if(page === "contactus"){
    return(
      <div className="app__header app__header-page_ourservices" id="home">

        <div className="app__header-banner">
          <div className="app__header-bg"></div>
          <h1 className="app__header-h1">Contact Us</h1>
            <div className="app__header-page_ourservices-breadcrumb">
              <Link to="/">
                <p className="p__cormorant">Home</p>
              </Link>
              <img src={images.angleleft} alt="angle left" />
              <Link to="/contactus">
                <p className="p__cormorant">Contact Us</p>
              </Link>
            </div>
        </div>

      </div>
    )
  }

  if(page === "ourchefs"){
    return(
      <div className="app__header app__header-page_ourservices" id="home">

        <div className="app__header-banner">
          <div className="app__header-bg"></div>
          <h1 className="app__header-h1">Our Chefs</h1>
            <div className="app__header-page_ourservices-breadcrumb">
              <Link to="/">
                <p className="p__cormorant">Home</p>
              </Link>
              <img src={images.angleleft} alt="angle left" />
              <Link to="/ourchefs">
                <p className="p__cormorant">Our Chefs</p>
              </Link>
            </div>
        </div>

      </div>
    )
  }
};

export default Header;

import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./TeamChef.css";

const TeamChef = ({ img, name, level, isHeadChef }) => {
  if (isHeadChef) {
    return (
      <div className="app__teamchef">
      <div className="app__teamchef-img">
        <img src={img} alt={name} />
        <div className="app__teamchef-img_info">
          <div className="app__teamchef-img_info-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
          <div className="app__teamchef-img_info-content">
            <div className="app__teamchef-img_info-content_line"/>
            <p className="p__cormorant">Read More</p>
          </div>
        </div>
      </div>
        <h3 className="p__cormorant" style={{ color: "#DCCA87" }}>
          {name}
        </h3>
        <p className="p__opensans">{level}</p>
      </div>
    );
  } else {
    return (
      <div className="app__teamchef">
        <div className="app__teamchef-img">
          <img src={img} alt={name} />
          <div className="app__teamchef-img_info">
            <div className="app__teamchef-img_info-icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
            <div className="app__teamchef-img_info-content">
              <div className="app__teamchef-img_info-content_line"/>
              <p className="p__cormorant">Read More</p>
            </div>
          </div>
        </div>
        <h3 className="p__cormorant">{name}</h3>
        <p className="p__opensans">{level}</p>
      </div>
    );
  }
};

export default TeamChef;

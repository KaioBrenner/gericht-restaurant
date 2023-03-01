import React from "react";
import { SubHeading } from "../../components";
import Intro from "../Intro/Intro";
import "./AboutContainer.css";

const AboutContainer = () => {
  return (
    <div className="app__aboutcontainer">
      <SubHeading title="About Us" />
      <h2 className="headtext__cormorant">Happy Hours with Us</h2>
      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>

      <div className="app__aboutcontainer-intro">
        <Intro />
      </div>
    </div>
  );
};

export default AboutContainer;

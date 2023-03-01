import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./HistoryContainer.css";

const HistoryContainer = () => {
  return (
    <div className="app__historycontainer">
      <SubHeading title="Our History" />
      <h2 className="headtext__cormorant">
        Serving Customers For Over A Decade
      </h2>
      <div className="app__historycontainer-container">
        <div className="app__historycontainer-container_aside">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <div className="app__historycontainer-container_aside-img">
            <img src={images.tattoria} alt="Tattoria" />
          </div>
        </div>
        <div className="app__historycontainer-container_aside">
          <div className="app__historycontainer-container_aside-img">
            <img src={images.servicedesk} alt="Service Desk" />
          </div>
          <h3 className="headtext__cormorant">Over The Years</h3>
          <div className="app__historycontainer-container_aside-infos">
            <div className="app__historycontainer-container_aside-infos-text">
              <h4 className="headtext__cormorant">30+</h4>
              <SubHeading />
              <p className="p__cormorant">Breakfast Options</p>
            </div>
            <div className="straight__line" />
            <div className="app__historycontainer-container_aside-infos-text">
              <h4 className="headtext__cormorant">50+</h4>
              <SubHeading />
              <p className="p__cormorant">Dinner Options</p>
            </div>
            <div className="straight__line" />
            <div className="app__historycontainer-container_aside-infos-text">
              <h4 className="headtext__cormorant">8</h4>
              <SubHeading />
              <p className="p__cormorant">New Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContainer;

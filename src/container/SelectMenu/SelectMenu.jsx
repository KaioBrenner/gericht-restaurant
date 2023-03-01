import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./SelectMenu.css";

const SelectMenu = () => {
  return (
    <div className="app__selectmenu">
        <div className="app__selectmenu-banner">
          <div className="app__selectmenu-bg section__padding">
            <div className="app__selectmenu-options">
              <div>
                <p className="p__cormorant">Bar Menu</p>
              </div>
              <div>
                <p className="p__cormorant">Food Menu</p>
              </div>
              <div>
                <p className="p__cormorant">Desserts Menu</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SelectMenu;

import React from "react";
import { TeamChef } from "../../components";
import { images } from "../../constants";
import "./Team.css";

const Team = () => {
  const chefs = [
    {
      img: images.teamchef01,
      name: "Kevin Luo",
      level: "Head Chef",
    },
    {
      img: images.teamchef02,
      name: "Patrick Choi",
      level: "Deputy Chef",
    },
    {
      img: images.teamchef03,
      name: "Jack Biscoff",
      level: "Station Chef",
    },
    {
      img: images.teamchef04,
      name: "Stacy Lee",
      level: "Station Chef",
    },
    {
      img: images.teamchef05,
      name: "Aren Goodman",
      level: "Junior Chef",
    },
    {
      img: images.teamchef06,
      name: "Javier Downsing",
      level: "Junior Chef",
    },
  ];

  const Chefs = chefs.map((chef) => {
    if (chef.name === "Kevin Luo") {
      return <TeamChef img={chef.img} name={chef.name} level={chef.level} isHeadChef={true}/>;
    }

    if (chef.name !== "Kevin Luo") {
      return <TeamChef img={chef.img} name={chef.name} level={chef.level} isHeadChef={false}/>;
    }
      
  });

  return <div className="app__team section__padding">{Chefs}</div>;
};

export default Team;

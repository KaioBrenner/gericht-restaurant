import React from "react";
import { SubHeading, Costumer } from "../../components";
import { images } from "../../constants";
import "./Testimony.css";

const Testimony = () => {

  const costumers = [{
    img: images.costumer01,
    name: "Wade Warren",
    job: "Sommelier"
  },{
    img: images.costumer02,
    name: "Brooklyn Simmons",
    job: "Caterer"
  },{
    img: images.costumer03,
    name: "Robert Fox",
    job: "Chef"
  },{
    img: images.costumer04,
    name: "Jane Cooper",
    job: "Chef"
  },]

  const Costumers = costumers.map((costumer, i) => {
    return(
      <Costumer img={costumer.img} name={costumer.name} job={costumer.job}/>
    )
  })

  return (
    <div className="app__testimony">
      <SubHeading title="Testimony" />
      <h2 className="headtext__cormorant">Happy customers</h2>

      <div className="app__testimony-costumers">
        {Costumers}
      </div>
    </div>
  );
};

export default Testimony;

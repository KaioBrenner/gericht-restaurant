import React from "react"
import { images } from "../../constants"
import "./Costumer.css"

const Costumer = ({img, name, job}) => {
  return (
      <div className="app__costumer">
          <div className="app__costumer-imgdiv">
              <img src={img} alt="Costumer"/>
              <img src={images.quote} alt="Quote"/>
          </div>
          <div className="app__costumer-info">
              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
              <h4 className="headtext__cormorant">{name}</h4>
              <p className="p__opensans">{job}</p>
          </div>
      </div>

      
  )
}

export default Costumer
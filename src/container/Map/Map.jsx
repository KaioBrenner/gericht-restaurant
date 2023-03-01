import React from "react"
import { images } from "../../constants"
import "./Map.css"

const Map = () => {
  return (
    <div className="app__map section__padding">
        <div className="app__map-container">
            <img src={images.map} alt="Map" />
        </div>
    </div>
  )
}

export default Map
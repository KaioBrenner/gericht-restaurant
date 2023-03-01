import React from 'react'
import { SubHeading, Delight } from '../../components'
import { Link } from 'react-router-dom'
import './Quality.css'

const Quality = () => {
  return (
    <div className="app__quality section__padding app__bg">
        <div className="app__quality-info">
            <SubHeading title="Serving Quality"/>
            <h1 className="headtext__cormorant">We at Gericth are serving our customers for over a decade.</h1>
            <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <div className="app__quality-info_buttons">
                <Link to="/contactus"><button className="custom__button" style={{marginTop:"2rem"}}>Read More</button></Link>
                <Link to="/contactus"><button className=" empty-button" style={{marginTop:"2rem"}}>Contact Us</button></Link>
            </div>
            
          <Delight />
        </div>
    </div>
  )
}

export default Quality;
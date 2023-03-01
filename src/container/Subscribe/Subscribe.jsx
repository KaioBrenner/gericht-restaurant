import React from "react"
import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Subscribe.css"

const Subscribe = () => {
    return (
        <div className="app__subscribe app__bg app__wrapper section__padding">
            <div className="app__subscribe-form">

                <form action="">
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="email" name="" id="" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="button" className="custom__button">Subscribe</button>
                </form>

            </div>

            <div className="app__wrapper_img">
                <img src={images.laurels} alt="laurels" />
            </div>
        </div>
    )
}

export default Subscribe
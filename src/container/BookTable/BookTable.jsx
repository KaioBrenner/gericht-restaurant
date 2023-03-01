import React from "react"
import { SubHeading, Delight } from "../../components"
import "./BookTable.css"

const BookTable = () => {
  return (
    <div className="app__booktable section__padding flex__center app__bg">
        <div className="app__booktable-container">
          <SubHeading title="Reservations"/>
          <h1 className="headtext__cormorant">Book A Table</h1>
          <div className="app__booktable-container_inputs">
            <select name="persons" id="persons">
              <option value="1person">1 Person</option>
              <option value="2persons">2 Persons</option>
              <option value="3persons">3 Persons</option>
              <option value="4persons">4 Persons</option>
            </select>
            <input type="date" placeholder="YYYY-MM-DD"/>
            <select name="time" id="time">
              <option value="07h">07:00 AM</option>
              <option value="08h">08:00 AM</option>
              <option value="09h">09:00 AM</option>
              <option value="10h">10:00 AM</option>
              <option value="11h">11:00 AM</option>
              <option value="12h">12:00 AM</option>
              <option value="16h">04:00 PM</option>
              <option value="17h">05:00 PM</option>
              <option value="18h">06:00 PM</option>
              <option value="19h">07:00 PM</option>
            </select>
          </div>
          <button className="custom__button">Book Now</button>
        </div>
    </div>
  )
}

export default BookTable;
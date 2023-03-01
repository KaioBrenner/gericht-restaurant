import React from "react"
import HistoryContainer from '../HistoryContainer/HistoryContainer';
import AboutContainer from '../AboutContainer/AboutContainer';

import "./HistoryAbout.css"


const HistoryAbout = () => {
  return (
    <div className="app__historyabout">
      <HistoryContainer />
      <AboutContainer />
    </div>
  )
}

export default HistoryAbout
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import About from './pages/About/About'
import ChefDetail from './pages/ChefDetail/ChefDetail'
import ContactUs from './pages/ContactUs/ContactUs'
import OurChefs from './pages/OurChefs/OurChefs'
import OurServices from './pages/OurServices/OurServices'

import './global.css';

const App = () => (
  
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/chefdetail" element={<ChefDetail />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/ourchefs" element={<OurChefs />} />
      <Route path="/ourservices" element={<OurServices />} />
    </Routes>
  </Router>

);

export default App;

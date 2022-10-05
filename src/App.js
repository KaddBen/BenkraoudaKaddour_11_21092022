
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Location from './pages/Location/Location.js'
import SharedLayout from './pages/SharedLayout/SharedLayout.js'
import Error from './pages/Error/Error.js'
import logo from './img/LOGO.png';
import 'typeface-montserrat';


import './style/App.css';
import './pages/Home/Home.css';
import './pages/About/About.css'
import './pages/Location/Location.css'
import './pages/SharedLayout/SharedLayout.css'
import './pages/Error/Error.css'

function App() {
  return (
   <BrowserRouter>
  <img src={logo} className="logo"></img>
   <Routes>
   <Route path ="/" element={<SharedLayout/>}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='/:locationId' element={<Location />} />
    <Route path='*' element={<Error />} />
    </Route>
  
   </Routes>
  </BrowserRouter>
  );
}

export default App;

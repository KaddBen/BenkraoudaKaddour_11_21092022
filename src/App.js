
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Location from './Location.js'
import SharedLayout from './SharedLayout.js'
import Error from './Error.js'
import logo from './img/LOGO.png';
import 'typeface-montserrat';


import './App.css';

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

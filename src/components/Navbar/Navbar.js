import React from 'react';
import { NavLink } from "react-router-dom";
import  './Navbar.css';

const Navbar = () => {
    return (

       <nav className="menu">
    <NavLink  to ='/' end className={({ isActive }) => (isActive 
    ? 'underline' : '' )}>ACCEUIL</NavLink>
<NavLink to ="/about" exact = {true} className={({ isActive }) => (isActive 
    ? 'underline' : '' )}>A PROPOS</NavLink>
       </nav>
    )
}

export default Navbar;
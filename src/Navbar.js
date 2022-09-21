import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

       <nav className="menu">
    <NavLink  to ='/' end className={({ isActive }) => (isActive 
    ? 'underline' : '' )}>Accueil</NavLink>
<NavLink to ="/about" exact = {true} className={({ isActive }) => (isActive 
    ? 'underline' : '' )}>A propos</NavLink>
       </nav>
    )
}

export default Navbar;
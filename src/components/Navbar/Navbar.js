import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="menu">
        <img src={logo} className="logo" alt="logo"></img>
        <div className="item_menu">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        A propos
      </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

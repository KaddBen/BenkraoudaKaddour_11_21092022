import React, { useState } from "react";
import downArrow  from "../../assets/Vector.svg"


import "./Dropdown.css";

const Dropdown = ({ title, description, classname }) => {
    const [open1, setOpen1] = useState(false);
    
  return (
    <div className={classname}>
      <button
        onClick= {() => setOpen1(!open1)}
        aria-controls={title}
        aria-expanded={open1}
        className="blue"
      >
        <span>{title}</span>
        <img src={downArrow} alt="down arrow"
          className={" " + (open1 ? "arrow_icon rotate" : "arrow_icon")}
        />
      </button>
      <div id={title} className={" " + ((open1===true) ? "collapses_span" : "hidden")}>
        {description }
      </div>
    </div>
  );
};

export default Dropdown;

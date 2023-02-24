import React from 'react';
import { MdArrowBackIosNew }  from 'react-icons/md';
import  './Dropdown.css';


const Dropdown = ({ title, state, setstate}) => {
    return (
    <button  onClick= {setstate} 
        aria-controls={title}
        aria-expanded= {state} className="blue">
             <span>{title}</span>
            <MdArrowBackIosNew className={' ' + ( state ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        
    );
}

export default  Dropdown;


import {Collapse} from "react-collapse"
import React  from 'react';
import  './Collapse.css';


const Collapses = ({ title, description, state }) => {  
    return (
        <Collapse  isOpened= {state}>
        <p id ={title}>
       {description}
        </p> 
        </Collapse>
    )
}

export default Collapses;
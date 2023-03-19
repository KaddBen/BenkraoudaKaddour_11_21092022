import {Collapse} from "react-collapse"
import React  from 'react';
import  './Collapse.css';


const Collapses = ({ title, description, state }) => {  
    return (
        <Collapse  isOpened= {state}>
        <div id ={title} className='collapses_span'>
       {description}
        </div> 
        </Collapse>
    )
}

export default Collapses;
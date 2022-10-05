import React from 'react';
import logo from '../../img/landscape.png';
import { Link } from "react-router-dom"
import housings from "../../logements.json"
import Dropdown from '../../components/Dropdown/Dropdown.js';
import Collapses from '../../components/Collapse/Collapse.js';
import Article from '../../components/Article/Article';
import Header from '../../components/Header/Header';


const Home = () => {
    return (
        <div>
{/* < div className='landscape'>
<img src={logo} className="logo_background"></img>
<div>Chez vous,partout et ailleurs</div>   
    </div> */}
<Header classdiv="landscape" 
classimg="logo_background" 
img={logo} 
content="Chez vous,partout et ailleurs"
classArrowLeft="hidden" 
classArrowRight="hidden"
/>

<div className="location_section">
{housings.map((housing) => {
    return(    
       <Article id={housing.id} cover={housing.cover} title= {housing.title} />
    ) 
})}
</div>
</div>
    )
}

export default Home;
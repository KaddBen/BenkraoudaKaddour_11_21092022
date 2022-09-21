import React from 'react';
import logo from './img/landscape.png';
import { Link } from "react-router-dom"
import housings from "./logements.json"
const Home = () => {
    return (
        <div>
 < div className='landscape'>
<img src={logo} className="logo_background"></img>
<div>Chez vous,partout et ailleurs</div>   
</div>

<div className="location_section">
{housings.map((housing) => {
    return(    
        <article key={housing.id} className="location"> 
        <Link to={`/${housing.id}`}> 
        <img src={housing.cover}></img> 
        </Link>         
        </article>
    ) 
})}
</div>
</div>
    )
}

export default Home;
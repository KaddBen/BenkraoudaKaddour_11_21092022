import React from 'react';
import logo from './img/landscape.png';
import { Link } from "react-router-dom"
import housings from "./logements.json"
import Navbar from './Navbar.js'
const Error = () => {
    return (
        <div className='error_container'>
<h2 className='error'>404</h2>
<div className='error_msg'>Oups! La page que vous demandez n'existe pas
</div>
<div  className='back_home'>
<Link to='/'>Retourner sur la page d'acceuil</Link>
</div>
</div>

    )
}

export default Error;
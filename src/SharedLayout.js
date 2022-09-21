import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import Navbar from './Navbar.js'
import footer from './img/footer.png'

const Home = () => {
    return (
    <>
    <Navbar />
    <Outlet />
    <div className='footer'>
    <img src={footer}></img>
    </div>
    </>
    );
}

export default Home;
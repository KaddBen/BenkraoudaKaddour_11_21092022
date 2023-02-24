import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';

const Home = () => {
    return (
    <>
    <Navbar />
    <Outlet /> 
    <Footer />
    </>
    );
}

export default Home;
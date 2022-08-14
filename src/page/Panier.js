import React from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import PanierC from '../component/PanierComp/PanierC';

function Panier() {
    return (
   <div className='container'>
    <Navbar/>



    <PanierC/>

    <Footer/>
   </div>
    )
}

export default Panier;


import React from 'react'
import { useSelector } from 'react-redux';
function Navbar() {
/*

       const quantité = 
        useSelector((store) => {
            console.log(store.cart.cartQuantity);
        } )
 */


    return (
        <div className=" w-full flex justify-between p-4 items-center">
        <div className=''>
        <img className="h-16" src="" alt=""/>
        </div>


        <nav>


                       <ul className="font-bold text-center md:flex gap-8 ">
                           
                           <a href='/' >Home</a>
                           <a  href='/'>Nos Produit</a>
                           <a href='/Panier'>Panier</a>
                           <a  href='/ContactP'> Nous Contacter</a>

                       </ul>

        </nav>


<div className='flex'>
<img href='/Panier' alt='panier' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABD0lEQVRIie3WvUrDUBiA4Qdx0VVBHQXvwMnJUYvg7EV4CV6N16CDdaodHARHV6V1FAWHilKtQxKs2DYn6Uk61BfOkvNx3u8n4YR5pY1Buh5wNAvxAH1s1SXPOE3lJ3WLD1Pxdd3iZfTwibWqJAsjnvXQSvf2qhKP49jvly3WusoTb1YkfswEo1oN97jLy64El3liOK9SPIldcdv8hfUQ8SJeIopvhw+f1Oo+LkIyDKQZKibunIPmm7EqqXzaNvewNHxwXsVPuCmS6RhaeCsihrMI4mZ+yF828Kp8m5+xUjbjHck1+VFA+C75wdguK51fDiS3SxeNCHHBdP3MrzNtXMjnNHMakmo62I8Q9089fAPfl7KJKlqUDwAAAABJRU5ErkJggg=="/>
        <button className="p-2 font-semibold rounded-full bg-blue-400 text-coolGray-100" >Logout</button></div>
    </div>
    )
}

export default Navbar;

import React from 'react'
import PanierProduit from './PanierProduit'
import { useSelector } from 'react-redux';

function PanierC() {




    let CartP= useSelector(state => state.cart.cartItem)
   
        console.log(CartP);
    return (

<div>

<div> <h2 className='text-center text-5xl font-bold  mt-6'>Panier </h2> </div>

        {CartP.map((produitcart) => {

            return <PanierProduit key={produitcart.id} {...produitcart}
            
            />}) }
        
</div>

     
    )
}

export default PanierC





















/*
  <div>
        <h1 className='text-center text-5xl font-bold uppercase mt-6'>Panier</h1>
        <span className=''></span>


        <div className='w-screen flex container mx-auto px-8 space-x-12'>
             <img className='' alt='' src="" href="" />

                <div className='flex flex-col justify-center'> <h4>T-Shirt</h4> <h4>Taille : M</h4></div>


<div>
    <button className='bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>dddddddddd</button>
</div>

        </div>



      </div>
  */
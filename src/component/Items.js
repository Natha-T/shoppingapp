import React from 'react'

import { useSelector } from 'react-redux';
import Item from './Item';
function Items() {



  
    let itemsData = useSelector(state => state.item.items);
   
 

console.log(itemsData);

    return (
        <div className=" bg-gray-100 flex flex-col justify-center">
        <h1 className="text-center text-5xl font-bold uppercase mt-6"> Produits </h1>
    <div className="relative mt-8 flex flex-wrap mx-auto justify-center">
  

    {itemsData.map((item) => {

      return <Item key={item.id} {...item}
      
      />}) }
  
 
  
  








</div>


   
  
    </div>


    )
}

export default Items;

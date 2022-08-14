import React from 'react'
import { delToCart,incressQuantity,decreaseQuantity } from '../../config/redux/cartSlice';
import { useDispatch } from 'react-redux';


function PanierProduit(produitcart) {

    const dispatch = useDispatch();

    return (
        
     
      <div className="flex space-y-22 flex-col flex-1 ">
          {/* 1st product div */   }

            <div className="  flex  space-x-22 self-start">
              <img
                className="w-[6rem]  sm:w-[24rem]  "
                src={produitcart.url}
                alt="product_img"
              />

              <div className=" flex items-start text-center justify-between flex-col sm:justify-center  ">
              
                <p>
                  <b className="">Product:</b>{produitcart.description}
                </p>
                <p className="flex items-center justify-center">
                  <b className="">Color:</b>
                  <div className="colorSelect bg-sky-500  w-[24px] h-[20px]">gdfhrgdfgdfg</div>
                </p>
                <p>
                  <b className="">Taille:</b>{produitcart.taille}
                </p>
              </div>


              <div className=' lg:m-24 flex   items-center text-center w text-4xl '>
                    <div className='flex  items-center text-center justify-center'>
                        <h2>Prix</h2>
                        <p className="">
                          <b>{produitcart.price}</b>
                        </p>
                    </div>



                  <div className=' lg:m-24 sm:items-center text-center justify-center'>
                    <button onClick={() => {dispatch(incressQuantity())}} className='  italic font-serif bg-clip-content bg-blue-600'>+</button>

                    <button onClick={() => {dispatch(decreaseQuantity())}} className='bg-contain italic font-serif bg-clip-content bg-blue-600'>-</button>
                  </div>   



              </div>
            

          <div className="flex items-center text-center w-full">
                 
                         <button onClick={() => {dispatch(delToCart(produitcart.id))}} className='bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500  rounded-lg text-center text-base font-semibold shadow-md '> Remove from cart</button>   
</div>



            </div>

    
            
        </div>
       
        
    )
}

export default PanierProduit;

import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const initialState = {
    cartItem: localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')) : [], 
    cartPrice: localStorage.getItem('cartP') ?  JSON.parse(localStorage.getItem('cartP')) : 0,
    cartQuantity: localStorage.getItem('cartQ') ?  JSON.parse(localStorage.getItem('cartQ')) : 0,
    isLoading: false,
};


const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {


// Add to cart action //

        addToCart: (state, action) => {
          

            const itemID = state.cartItem.filter(item => item.id === action.payload.id);
    
            if (itemID == 0) { 

                 state.cartItem.push(action.payload);
               
            }
            else {
                 
               
                state.cartPrice += 0;
  state.cartQuantity += 1; 
            }
           

            state.cartPrice += action.payload.price;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItem), );
            localStorage.setItem('cartQ', JSON.stringify(state.cartQuantity), );
            localStorage.setItem('cartP', JSON.stringify(state.cartPrice), );

        },


        //-------------------------------------//


        
// Delete to cart action //

        delToCart: (state, action) => {
           const itemID = action.payload;
           state.cartItem = state.cartItem.filter((item) => item.id !== itemID);
              state.cartPrice -= action.payload.price;
                state.cartQuantity -= action.payload.quantity;

                state.cartPrice = 0;
                state.cartQuantity = 0;

         localStorage.setItem("cartItems", JSON.stringify(state.cartItem)); 
         localStorage.setItem('cartQ', JSON.stringify(state.cartQuantity), );
         localStorage.setItem('cartP', JSON.stringify(state.cartPrice), );
         
       

        },

/*
        //------------------------------------//  ----- Quantity action... coming soon //



       incressQuantity: (state, action) => {
        
        const itemID = action.payload;

            state.cartItem.forEach((item) => {

                if (item == itemID) {
                    state.CartQuantity += 1;
                    state.cartPrice += 0;
                }

            }

            );


             state.cartPrice += itemID.cartItem.price;
            localStorage.setItem('cartQ', JSON.stringify(state.cartQuantity), ); 
        },


        //--------------------------------------//


     decreaseQuantity: (state, action) => {
        const itemID = action.payload;
        state.cartItem.forEach((item) => {
            if (item.id === itemID) {
                item.quantity -= 1;
                state.cartPrice -= item.price;
            }
            if (item.quantity == 0) {
                state.cartPrice = 0;
            }
         } 
         );
        state.cartQuantity -= 0;

        localStorage.setItem('cartQ', JSON.stringify(state.cartQuantity), );

    },



    //-----------------------------------------//


    
    decrease: (state, action) => {
        const itemID = action.payload;
        state.cartItem.forEach((item) => {
            if (item.id === itemID) {
                item.quantity -= 1;
                item.price -= item.price;
            }
        }
        );
        state.cartQuantity -= 1;
        state.cartPrice -=  state.cartItem.itemID.price;
     
        localStorage.setItem("cartItems", JSON.stringify(state.cartItem));   
    },

       -----------------------------------------// */


    }
});

export default cartSlice.reducer;

export const { addToCart, setCartData, delToCart, incressQuantity,decrease,decreaseQuantity } = cartSlice.actions;



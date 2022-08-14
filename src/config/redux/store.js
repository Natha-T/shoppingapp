import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import itemReducer from './itemSlice';
import userAuthReducer from './userAuthSlice';

export const store = configureStore({   
    reducer: {
        cart: cartReducer,
        item: itemReducer,
        userAuth: userAuthReducer,
    }
    ,

});
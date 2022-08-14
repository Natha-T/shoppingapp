
import { createSlice } from '@reduxjs/toolkit';


/*   const [userName, setUserName] = useState('');
const [userEmail, setUserEmail] = useState('');       */

 const  initialState = {
    userName:   null,
    userEmail: null,
    userCart: localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')) : [], 
};


const userAuthSlice = createSlice({
    name : 'userAuth',
    initialState,


    // User login action //
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },

    
        // User Cart action //

        setUserCart : (state, action) => {

            state.userCart = action.payload;



     
        },



        // User logout action //
        setUserLogOut: (state, action) => {
        
            state.userName = null;
            state.userEmail = null;
        },

    }
});


export const {setUser, setUserLogOut, setUserCart} = userAuthSlice.actions;
export const selectUserName =  state => state.userAuth.userName;
export const selectUserEmail =  state => state.userAuth.userEmail;
export const selectUserCart =  state => state.userAuth.userCart;
export default userAuthSlice.reducer;



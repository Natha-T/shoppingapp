import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isLoading: false,
    error: null, 
};

const itemSlice = createSlice({
    name : 'item',
    initialState,
    reducers: {


         
        // Get product items action in redux store //

        setItemData: (state, action) => 
        { state.items = action.payload;},


    },
});

export const {setItemData} = itemSlice.actions;
export default itemSlice.reducer;
